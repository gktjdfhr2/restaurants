import Button from '@customer/UI/Form/Button';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import SearchResultItems from './SearchResultItems';

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const ClassificationButton = styled(Button)<{ selectFilter: boolean }>`
  width: auto;
  height: 40px;
  background-color: white;

  border-radius: 0;
  color: black;
  padding: 0 20px;
  font-weight: normal;
  ${(props) =>
    props.selectFilter &&
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
  const [selectFilter, setSelectFilter] = useState({
    all: true,
    reservation: false,
    line: false,
  });

  return (
    <ResultContainer>
      <ButtonContainer>
        <ClassificationButton
          title="전체"
          selectFilter={selectFilter.all}
          onClick={() =>
            setSelectFilter({ all: true, reservation: false, line: false })
          }
        />
        <ClassificationButton
          title="예약"
          selectFilter={selectFilter.reservation}
          onClick={() =>
            setSelectFilter({ all: false, reservation: true, line: false })
          }
        />
        <ClassificationButton
          title="원격 줄서기"
          selectFilter={selectFilter.line}
          onClick={() =>
            setSelectFilter({ all: false, reservation: false, line: true })
          }
        />
      </ButtonContainer>

      <SearchResultItems
        title="소우데스"
        score={3.9}
        countReview={303}
        condition="일식"
        address="사직동"
        distance={0.98}
        reservation={true}
        line={false}
      />
    </ResultContainer>
  );
};
export default SearchResult;
