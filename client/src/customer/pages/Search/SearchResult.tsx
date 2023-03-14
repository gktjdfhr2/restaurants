import Button from '@customer/UI/Form/Button';
import styled, { css } from 'styled-components';
import SearchResultItems from './SearchResultItems';

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const ClassificationButton = styled(Button)<{ selected?: boolean }>`
  width: auto;
  height: 40px;
  background-color: white;

  border-radius: 0;
  color: black;
  padding: 0 20px;
  font-weight: normal;
  ${(props) =>
    props.selected &&
    css`
      border-bottom: 1px solid black;
      font-weight: bold;
    `};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 20px 0;
`;

const SearchResult = () => {
  return (
    <ResultContainer>
      <ButtonContainer>
        <ClassificationButton title="전체" selected />
        <ClassificationButton title="예약" />
        <ClassificationButton title="원격 줄서기" />
      </ButtonContainer>

      <SearchResultItems />
    </ResultContainer>
  );
};
export default SearchResult;
