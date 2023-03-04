import TextInput from '@customer/UI/Form/TextInput';
import SearchContainer from './SearchContainer';
import SearchButton from '@customer/UI/Form/SearchButton';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import RecentKeywords from './RecentKeywords';
import styled from 'styled-components';
import RecommendKeywords from './RecommendKeywords';
import React, { useState } from 'react';

const SearchDiv = styled(ButtonSortDiv)`
  //   margin: 20px 0;
  //
`;

const SearchForm = styled.form``;

const Search = () => {
  const [keyword, setKeyword] = useState('');

  const keywordChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const searchEvent = () => {
    console.log('submit', keyword);
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
      <RecentKeywords />
      <RecommendKeywords />
    </SearchContainer>
  );
};

export default Search;
