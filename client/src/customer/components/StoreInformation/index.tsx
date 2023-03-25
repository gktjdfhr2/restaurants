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
  background-color: white;
  padding: 30px 0;
`;

const MenuNavigation = styled(ToggleMenuButton)`
  font-size: 20px;
  margin: 0 20px;
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
  background-color: white;
  opacity: 0.2;
  ${(props) =>
    props.use &&
    css`
      opacity: 1;
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
  const [data, setData] = useState({
    businessAddress: '',
    businessBreakEnd: null,
    businessBreakTime: null,
    businessClosedTime: '',
    businessConditions: '',
    businessDeleteState: 0,
    businessId: 1,
    businessLikes: 0,
    businessName: '',
    businessOpenState: 1,
    businessOpenTime: '',
    businessOwner: '',
    businessPlaceX: 0,
    businessPlaceY: 0,
  });

  /** 최근 본 가게정보 로컬 스토리지에 추가 */
  useEffect(() => {
    history.filter((value) => {
      return value === storeName;
    }).length
      ? setHistory((prev) => {
          prev.splice(history.indexOf(storeName), 1);
          localStorage.setItem(
            'viewHistory',
            JSON.stringify([storeName, ...prev])
          );

          return [storeName, ...prev];
        })
      : setHistory((prev) => {
          localStorage.setItem(
            'viewHistory',
            JSON.stringify([storeName, ...prev])
          );

          return [storeName, ...prev];
        });

    axios
      .get(
        `http://localhost:8080/api/member/store/${Number(
          storeInformation.storeId
        )}`,
        {
          params: {
            id: Number(storeInformation.storeId),
          },
        }
      )
      .then((response) => {
        console.log(response);
        setData(response.data.data);

        console.log('data', data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //TODO: storeId로 서버에서 데이터 받아서 뿌려주기

  return (
    <MediumContainer>
      <StoreImage />
      <StoreMoreInformationContainer>
        <StoreMoreInformation
          storeName={data.businessName}
          storeAddress={data.businessAddress}
          reviewScore={3.9}
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
          <ReservationButton use={true}>원격 줄서기</ReservationButton>
          <ReservationButton use={false}>예약 미사용</ReservationButton>
        </ButtonContainer>
      </StoreMoreInformationContainer>
    </MediumContainer>
  );
};
export default React.memo(StoreInformation);
