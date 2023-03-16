import { useState } from 'react';
import styled from 'styled-components';
import ExhibitionItems from '../../UI/Form/ExhibitionItems';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
        <ToggleMenuButton
          title="전체"
          selectFilter={selectFilter.all}
          onClick={() =>
            setSelectFilter({ all: true, reservation: false, line: false })
          }
        />
        <ToggleMenuButton
          title="예약"
          selectFilter={selectFilter.reservation}
          onClick={() =>
            setSelectFilter({ all: false, reservation: true, line: false })
          }
        />
        <ToggleMenuButton
          title="원격 줄서기"
          selectFilter={selectFilter.line}
          onClick={() =>
            setSelectFilter({ all: false, reservation: false, line: true })
          }
        />
      </ButtonContainer>

      <ExhibitionItems
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