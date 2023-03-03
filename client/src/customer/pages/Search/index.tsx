import TextInput from '@customer/UI/Form/TextInput';
import SearchContainer from './SearchContainer';
import SearchButton from '@customer/UI/Form/SearchButton';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import RecentKeywords from './RecentKeywords';
import styled from 'styled-components';
import RecommendKeywords from './RecommendKeywords';

const SearchDiv = styled(ButtonSortDiv)`
  margin: 20px 0;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchDiv>
        <TextInput placeholder="검색어를 입력해주세요" autoComplete="off" />
        <SearchButton />
      </SearchDiv>
      <RecentKeywords />
      <RecommendKeywords />
      {/* TODO: 구조 정하기 */}
    </SearchContainer>
  );
};

export default Search;
