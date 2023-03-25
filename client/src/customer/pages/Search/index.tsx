import React, { useState, useCallback, FormEvent } from 'react';
import styled from 'styled-components';
import TextInput from '@customer/UI/Form/TextInput';
import SearchButton from '@customer/UI/Form/SearchButton';
import RecentKeywords from './RecentKeywords';
import RecommendKeywords from './RecommendKeywords';
import SearchResult from './SearchResult';
import ResetButton from '@customer/UI/Form/ResetButton';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const SearchForm = styled.form`
  position: relative;
  width: 100%;
  height: 46px;
  margin-bottom: 20px;
`;
const SearchContainer = styled.section`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const KeywordInput = styled(TextInput)`
  padding: 0 40px;
`;

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const localStorage = window.localStorage;
  const historyDefault: Array<String> = JSON.parse(
    `${localStorage.getItem('searchHistory')}`
  )
    ? JSON.parse(`${localStorage.getItem('searchHistory')}`)
    : [];
  const [history, setHistory] = useState(historyDefault);
  const [cookies] = useCookies(['token']);
  const [searchResult, setSearchResult] = useState<Array<object>>([]);
  //TODO: 배열 인자 타입 인터페이스로 정의해주기,

  const keywordChangeHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
      event.target.value.length === 0 && setIsSearch(false);
      console.log('data :', searchResult);
    },
    [keyword]
  );

  const searchEvent = async (event: FormEvent, inputValue: string) => {
    setKeyword(inputValue);
    event.preventDefault();

    await axios
      .get(`http://localhost:8080/api/member/store`, {
        params: {
          keyword: inputValue,
        },
        headers: { Authorization: `Bearer ${cookies.token}` },
      })
      .then((response) => {
        //TODO: 응답 인자 타입 정의해주기,
        console.log('data :', response);
        setSearchResult(response.data.data);

        inputValue.length === 0
          ? setIsSearch(false)
          : history.filter((value) => {
              return value === inputValue;
            }).length
          ? setHistory((prev) => {
              prev.splice(history.indexOf(inputValue), 1);
              localStorage.setItem(
                'searchHistory',
                JSON.stringify([inputValue, ...prev])
              );
              setIsSearch(true);
              return [inputValue, ...prev];
            })
          : setHistory((prev) => {
              localStorage.setItem(
                'searchHistory',
                JSON.stringify([inputValue, ...prev])
              );
              setIsSearch(true);
              return [inputValue, ...prev];
            });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SearchContainer>
      <SearchForm
        onSubmit={(event) => {
          searchEvent(event, keyword);
        }}
      >
        <SearchButton type="submit" />
        <KeywordInput
          placeholder="검색어를 입력해주세요"
          autoComplete="off"
          autoFocus={true}
          value={keyword}
          onChange={keywordChangeHandle}
        />
        {keyword && (
          <ResetButton
            onClick={() => {
              setKeyword('');
              setIsSearch(false);
            }}
          />
        )}
      </SearchForm>
      <RecentKeywords
        history={history}
        setHistory={setHistory}
        searchEvent={searchEvent}
      />

      {isSearch ? (
        <SearchResult searchResult={searchResult} />
      ) : (
        <RecommendKeywords searchEvent={searchEvent} />
      )}
    </SearchContainer>
  );
};

export default Search;
