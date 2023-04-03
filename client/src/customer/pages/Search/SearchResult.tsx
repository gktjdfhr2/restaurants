import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExhibitionItem from '../../UI/Form/ExhibitionItem';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';
import React from 'react';
import { Link } from 'react-router-dom';
import { getDistance } from 'geolib';

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
interface StayLocation {
  latitude: number;
  longitude: number;
}
const SearchResult = (props: {
  searchResult: StoreInformation[];
  stayLocation: StayLocation;
}) => {
  type selectMenu = 'ALL' | 'RESERVATION' | 'LINE';
  const [selectFilter, setSelectFilter] = useState<selectMenu>('ALL');
  // console.log(props.stayLocation);
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
            const address = new kakao.maps.services.Geocoder();
            let coords = { latitude: 0, longitude: 0 };
            address.addressSearch(
              value.businessAddress,
              (result: any, status: any) => {
                if (status === kakao.maps.services.Status.OK) {
                  var checkCoords: any = new kakao.maps.LatLng(
                    result[0].y,
                    result[0].x
                  );
                  coords = {
                    latitude: checkCoords.Ma,
                    longitude: checkCoords.La,
                  };
                  console.log('coords!!! :', coords);
                }
              }
            );
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
                  distance={
                    props.stayLocation.latitude === 0
                      ? '0'
                      : (
                          getDistance(coords, props.stayLocation, 1000) /
                          10000000
                        ).toFixed(2)
                  }
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
