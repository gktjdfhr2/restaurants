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

let history = new Array();
JSON.parse(`${localStorage.getItem('searchHistory')}`) &&
  history.push(JSON.parse(`${localStorage.getItem('searchHistory')}`));

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const localStorage = window.localStorage;

  console.log(history);

  const keywordChangeHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value);
    },
    [keyword]
  );

  const searchEvent = () => {
    console.log('submit', keyword);
    history.push(keyword);
    localStorage.setItem('searchHistory', JSON.stringify(history));
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
