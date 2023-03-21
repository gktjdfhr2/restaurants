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
  type selectMenu = 'ALL' | 'RESERVATION' | 'LINE';
  const [selectFilter, setSelectFilter] = useState<selectMenu>('ALL');

  return (
    <SearchResultContainer>
      <MenuButtonContainer>
        <ToggleMenuButton
          title="전체"
          selectFilter={selectFilter === 'ALL'}
          onClick={() => setSelectFilter(() => 'ALL')}
        />
        <ToggleMenuButton
          title="예약"
          selectFilter={selectFilter === 'RESERVATION'}
          onClick={() => setSelectFilter(() => 'RESERVATION')}
        />
        <ToggleMenuButton
          title="원격 줄서기"
          selectFilter={selectFilter === 'LINE'}
          onClick={() => setSelectFilter(() => 'LINE')}
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
