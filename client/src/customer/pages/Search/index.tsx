import TextInput from '@customer/UI/Form/TextInput';
import SearchContainer from './SearchContainer';
import SearchButton from '@customer/UI/Form/SearchButton';
import RecentKeywords from './RecentKeywords';
import styled from 'styled-components';
import RecommendKeywords from './RecommendKeywords';
import React, { useState, useCallback } from 'react';

const SearchForm = styled.form`
  position: relative;
  width: 100%;
  height: 46px;
  margin-bottom: 30px;
`;

const Search = () => {
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
    },
    [keyword]
  );
  console.log('history', history);

  const searchEvent = () => {
    console.log('submit', keyword);

    // keyword &&
    //   setHistory((prev) => {
    //     localStorage.setItem(
    //       'searchHistory',
    //       JSON.stringify([keyword, ...prev])
    //     );

    //     return [keyword, ...prev];
    //   });

    // console.log(
    //   'filter',
    //   history.filter((value) => {
    //     return value === keyword;
    //   }).length
    // );

    keyword &&
    history.filter((value) => {
      return value === keyword;
    }).length
      ? setHistory((): String[] => {
          history.splice(history.indexOf(keyword), 1);
          localStorage.setItem(
            'searchHistory',
            JSON.stringify([keyword, ...history])
          );

          return [keyword, ...history];
        })
      : // (history.splice(history.indexOf(keyword),1))
        setHistory((prev) => {
          localStorage.setItem(
            'searchHistory',
            JSON.stringify([keyword, ...prev])
          );

          return [keyword, ...prev];
        });
  };

  return (
    <SearchContainer>
      <SearchForm>
        <TextInput
          placeholder="검색어를 입력해주세요"
          autoComplete="off"
          autoFocus={true}
          value={keyword}
          onChange={keywordChangeHandle}
        />
        <SearchButton type="submit" onClick={searchEvent} />
      </SearchForm>
      <RecentKeywords history={history} setHistory={setHistory} />
      <RecommendKeywords />
    </SearchContainer>
  );
};

export default Search;
