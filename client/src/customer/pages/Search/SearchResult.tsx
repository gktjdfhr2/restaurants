import { useState } from 'react';
import styled from 'styled-components';
import ExhibitionItem from '../../UI/Form/ExhibitionItem';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';
import SearchResultContainer from '@customer/UI/Form/SearchResultContainer';

const MenuButtonContainer = styled.div`
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
    <SearchResultContainer>
      <MenuButtonContainer>
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
      </MenuButtonContainer>

      <ExhibitionItem
        title="소우데스"
        score={3.9}
        countReview={303}
        condition="일식"
        address="사직동"
        distance={0.98}
        reservation={true}
        line={false}
      />
    </SearchResultContainer>
  );
};
export default SearchResult;
