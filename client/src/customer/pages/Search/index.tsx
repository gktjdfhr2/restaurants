import TextInput from '@customer/UI/Form/TextInput';
import SearchContainer from './SearchContainer';
import SearchButton from '@customer/UI/Form/SearchButton';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import RecentKeywords from './RecentKeywords';
import styled from 'styled-components';
import RecommendKeywords from './RecommendKeywords';
import React, { useState, useCallback } from 'react';

const SearchDiv = styled(ButtonSortDiv)`
  //   margin: 20px 0;
  //
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
  console.log('history', history.length);

  const searchEvent = () => {
    console.log('submit', keyword);

    keyword &&
      setHistory((prev) => {
        localStorage.setItem(
          'searchHistory',
          JSON.stringify([...prev, keyword])
        );

        return [keyword, ...prev];
      });
  };
  return (
    <SearchContainer>
      <SearchDiv>
        <TextInput
          placeholder="검색어를 입력해주세요"
          autoComplete="off"
          value={keyword}
          onChange={keywordChangeHandle}
        />
        <SearchButton type="submit" onClick={searchEvent} />
      </SearchDiv>
      <RecentKeywords keyWords={history} />
      <RecommendKeywords />
    </SearchContainer>
  );
};

export default Search;
