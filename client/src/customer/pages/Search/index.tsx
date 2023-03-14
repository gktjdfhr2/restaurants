import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import styled from 'styled-components';
import TextInput from '@customer/UI/Form/TextInput';
import SearchContainer from './SearchContainer';
import SearchButton from '@customer/UI/Form/SearchButton';
import RecentKeywords from './RecentKeywords';
import RecommendKeywords from './RecommendKeywords';
import SearchResult from './SearchResult';

const SearchForm = styled.form`
  position: relative;
  width: 100%;
  height: 46px;
  margin-bottom: 30px;
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

  const keywordChangeHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
      event.target.value.length === 0 && setIsSearch(false);
    },
    [keyword]
  );

  const searchEvent = (event: FormEvent) => {
    event.preventDefault();
    console.log('key', keyword.length);

    keyword.length !== 0 &&
    history.filter((value) => {
      return value === keyword;
    }).length
      ? setHistory((prev) => {
          prev.splice(history.indexOf(keyword), 1);
          localStorage.setItem(
            'searchHistory',
            JSON.stringify([keyword, ...prev])
          );

          return [keyword, ...prev];
        })
      : setHistory((prev) => {
          localStorage.setItem(
            'searchHistory',
            JSON.stringify([keyword, ...prev])
          );

          return [keyword, ...prev];
        });
    setIsSearch(true);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={searchEvent}>
        <TextInput
          placeholder="검색어를 입력해주세요"
          autoComplete="off"
          autoFocus={true}
          value={keyword}
          onChange={keywordChangeHandle}
        />
        <SearchButton type="submit" />
      </SearchForm>
      <RecentKeywords
        history={history}
        // keyword={keyword}
        setKeyword={setKeyword}
        setHistory={setHistory}
        searchEvent={searchEvent}
      />
      {isSearch ? <SearchResult /> : <RecommendKeywords />}
    </SearchContainer>
  );
};

export default Search;
