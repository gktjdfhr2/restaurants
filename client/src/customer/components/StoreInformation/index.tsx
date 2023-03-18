import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import styled from 'styled-components';
import StoreMoreInformation from './StoreMoreInformation';
import ToggleMenuButton from '@customer/UI/Form/ToggleMenuButton';

const StoreImages = styled.div`
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
  }, []);

  //TODO: storeId로 서버에서 데이터 받아서 뿌려주기

  return (
    <MediumContainer>
      <StoreImages />
      <StoreMoreInformationContainer>
        <StoreMoreInformation
          storeName="소우데스"
          storeAddress="동래구 석사북로 5 (사직동) 1층"
          reviewScore={3.9}
        />
        <MenuNavigationContainer>
          <MenuNavigation selectFilter>전체메뉴</MenuNavigation>
          <MenuNavigation selectFilter={false}>최근리뷰</MenuNavigation>
          <MenuNavigation selectFilter={false}>매장정보</MenuNavigation>
        </MenuNavigationContainer>
      </StoreMoreInformationContainer>
    </MediumContainer>
  );
};
export default StoreInformation;
