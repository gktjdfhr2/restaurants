import { useState } from 'react';
import styled from 'styled-components';
import ExhibitionItem from '../../UI/Form/ExhibitionItem';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 20px 0;
`;
interface StoreInformation {
  averageScore: number;
  businessAddress: string;
  businessAmenities?: Array<number>;
  businessBreakEnd?: string;
  businessBreakTime?: string;
  businessClosedTime?: string;
  businessConditions: string;
  businessDeleteState?: number;
  businessId: number;
  businessLikes?: number;
  businessName: string;
  businessOpenState: number;
  businessOpenTime: string;
  businessOwner?: string;
  businessPlaceX?: number;
  businessPlaceY?: number;
  businessTags: Array<string>;
  reviews: Array<string>;
}

const SearchResult = (props: { searchResult: StoreInformation[] }) => {
  type selectMenu = 'ALL' | 'RESERVATION' | 'LINE';
  const [selectFilter, setSelectFilter] = useState<selectMenu>('ALL');
  //TODO: 프롭스 배열 인자 타입 정의해주기

  return (
    <>
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
      {
        props.searchResult.length === 0 ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          props.searchResult.map((value: StoreInformation, index) => {
            return (
              <Link
                to={`/customer/StoreInformation/${value.businessId}`}
                key={index}
              >
                <ExhibitionItem
                  title={value.businessName}
                  score={value.averageScore}
                  countReview={value.reviews.length}
                  condition={value.businessConditions}
                  address="사직동"
                  distance={0.98}
                  reservation={true}
                  line={false}
                />
              </Link>
            );
          })
        )

        // <Link to={`/customer/StoreInformation/${1}`}>
        //   <ExhibitionItem
        //     title="소우데스"
        //     score={3.9}
        //     countReview={303}
        //     condition="일식"
        //     address="사직동"
        //     distance={0.98}
        //     reservation={true}
        //     line={false}
        //   />
        // </Link>
      }
    </>
  );
};
export default React.memo(SearchResult);
