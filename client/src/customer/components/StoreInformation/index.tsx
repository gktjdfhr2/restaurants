import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import styled, { css } from 'styled-components';
import StoreMoreInformation from './StoreMoreInformation';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';
import StoreMenu from './StoreMenu';
import StoreReviews from './StoreReviews';
import OperatingTime from './OperatingTime';
import Amenities from './Amenities';
import React from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const StoreImage = styled.div`
  //TODO: props로 서버에서 이미지 받아와서 background지정
  background: url(/src/assets/images/placeholder.png);
  background-repeat: no-repeat;
  background-position: left;
  background-size: 100% 300px;
  width: 100%;
  height: 300px;
`;
const StoreMoreInformationContainer = styled.div`
  top: -30px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  border: 1px solid black;
  position: relative;
  background: white;
  padding: 30px 0;
`;

const MenuNavigation = styled(ToggleMenuButton)`
  background: none;
  font-size: 20px;
  margin: 0 20px;
  opacity: 1;
`;

const MenuNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
  border-bottom: 10px solid gainsboro;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 70%;
  height: 50px;
  justify-content: space-between;
  margin: 0 auto;
`;

const ReservationButton = styled.button<{ use: boolean }>`
  width: 200px;
  height: 50px;
  background: none;
  opacity: 0.2;
  cursor: default;
  ${(props) =>
    props.use &&
    css`
      opacity: 1;
      cursor: pointer;
    `}
  border: 1px solid black;
  border-radius: 10px;
`;

const StoreInformation = () => {
  const localStorage = window.localStorage;
  const historyDefault: Array<String> = JSON.parse(
    `${localStorage.getItem('viewHistory')}`
  )
    ? JSON.parse(`${localStorage.getItem('viewHistory')}`)
    : [];
  const [history, setHistory] = useState(historyDefault);
  const storeInformation = useParams();
  let storeName = storeInformation.storeId ? storeInformation.storeId : '';

  storeName = storeName.toString();
  const reviewRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLElement>(null);
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
  const [data, setData] = useState<StoreInformation>({
    averageScore: 0,
    businessAddress: '',
    businessAmenities: [],
    businessBreakEnd: '',
    businessBreakTime: '',
    businessClosedTime: '',
    businessConditions: '',
    businessDeleteState: 0,
    businessId: 1,
    businessLikes: 0,
    businessName: '',
    businessOpenState: 0,
    businessOpenTime: '',
    businessOwner: '',
    businessPlaceX: 0,
    businessPlaceY: 0,
    businessTags: [],
    reviews: [],
  });

  /** 최근 본 가게정보 로컬 스토리지에 추가 */
  () => {
    // TODO: 서버 응답 수정하고,response에 값 설정한 다음 useEffect에 넣기
    // history.filter((value) => {
    //   return value === data.businessName;
    // }).length
    //   ? setHistory((prev) => {
    //       prev.splice(history.indexOf(data.businessName), 1);
    //       localStorage.setItem(
    //         'viewHistory',
    //         JSON.stringify([data.businessName, ...prev])
    //       );
    //       return [data.businessName, ...prev];
    //     })
    //   : setHistory((prev) => {
    //       localStorage.setItem(
    //         'viewHistory',
    //         JSON.stringify([data.businessName, ...prev])
    //       );
    //       return [data.businessName, ...prev];
    //     });
  };

  useEffect(() => {
    console.log('id:', storeInformation.storeId);
    axios
      .get(`http://localhost:8080/api/member/store/${storeInformation.storeId}`)
      .then((response) => {
        setData(response.data.data);
        return response.data.data;
        // history.filter((value) => {
        //   return value === data.businessName;
        // }).length
        //   ? setHistory((prev) => {
        //       console.log('data!', data.businessName);
        //       prev.splice(history.indexOf(data.businessName), 1);
        //       localStorage.setItem(
        //         'viewHistory',
        //         JSON.stringify([data.businessName, ...prev])
        //       );

        //       return [data.businessName, ...prev];
        //     })
        //   : setHistory((prev) => {
        //       console.log('data!!', data.businessName);
        //       localStorage.setItem(
        //         'viewHistory',
        //         JSON.stringify([data.businessName, ...prev])
        //       );

        //       return [data.businessName, ...prev];
        //     });
      })
      .catch((err) => {
        console.log(err);
      })
      .then((response) => {
        console.log('response', response);
        history.filter((value) => {
          return value === response.businessName;
        }).length
          ? setHistory((prev) => {
              console.log('data!', response.businessName);
              prev.splice(history.indexOf(response.businessName), 1);
              localStorage.setItem(
                'viewHistory',
                JSON.stringify([response.businessName, ...prev])
              );

              return [response.businessName, ...prev];
            })
          : setHistory((prev) => {
              console.log('data!!', response.businessName);
              localStorage.setItem(
                'viewHistory',
                JSON.stringify([response.businessName, ...prev])
              );

              return [response.businessName, ...prev];
            });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   history.filter((value) => {
  //     return value === data.businessName;
  //   }).length
  //     ? setHistory((prev) => {
  //         console.log('data!', data.businessName);
  //         prev.splice(history.indexOf(data.businessName), 1);
  //         localStorage.setItem(
  //           'viewHistory',
  //           JSON.stringify([data.businessName, ...prev])
  //         );

  //         return [data.businessName, ...prev];
  //       })
  //     : setHistory((prev) => {
  //         console.log('data!!', data.businessName);
  //         localStorage.setItem(
  //           'viewHistory',
  //           JSON.stringify([data.businessName, ...prev])
  //         );

  //         return [data.businessName, ...prev];
  //       });
  // }, [data]);

  //TODO: storeId로 서버에서 데이터 받아서 뿌려주기
  // console.log('data!:', data);
  return (
    <>
      <MediumContainer>
        <StoreImage />
        <StoreMoreInformationContainer>
          <StoreMoreInformation
            storeName={data.businessName}
            storeAddress={data.businessAddress}
            reviewScore={data.averageScore} //추가
          />
          <MenuNavigationContainer>
            <MenuNavigation selectFilter>전체메뉴</MenuNavigation>
            <MenuNavigation
              selectFilter={false}
              onClick={() =>
                reviewRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              최근리뷰
            </MenuNavigation>
            <MenuNavigation
              selectFilter={false}
              onClick={() =>
                infoRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              매장정보
            </MenuNavigation>
          </MenuNavigationContainer>
          <StoreMenu />
          <StoreReviews ref={reviewRef} />
          <OperatingTime ref={infoRef} />
          <Amenities />
          <ButtonContainer>
            <ReservationButton
              use={data.businessOpenState === 1 ? true : false}
            >
              원격 줄서기
            </ReservationButton>
            <ReservationButton use={false}>예약 미사용</ReservationButton>
          </ButtonContainer>
        </StoreMoreInformationContainer>
      </MediumContainer>
    </>
  );
};
export default React.memo(StoreInformation);
