import TextInput from '@customer/UI/Form/TextInput';
import SearchContainer from './SearchContainer';
import SearchButton from '@customer/UI/Form/SearchButton';
import ButtonSortDiv from '@customer/UI/Form/ButtonSortDiv';
import RecentKeywords from './RecentKeywords';

const Search = () => {
  return (
    <SearchContainer>
      <ButtonSortDiv>
        <TextInput />
        <SearchButton />
      </ButtonSortDiv>
      <RecentKeywords />
    </SearchContainer>
  );
};

export default Search;
