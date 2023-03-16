import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignInNavigation from './SignInNavigation';
import HistoryInformation from './ReservationHistory';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const HistoryNavigation = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid gainsboro;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  opacity: 0.5;
  color: black;

  &:before {
    content: ${(props) => `'${props.title || ''}'`};
    display: flex;
    align-items: center;
    width: max-content;
    height: 100%;
    font-size: 30px;
    color: black;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const CustomerInformationSection = () => {
  const [cookies] = useCookies(['token']);
  // const navigate = useNavigate();
  // useEffect(() => (cookies.token ? navigate('/') : console.log('false')), []);
  const testUserName = '최재혁';

  return (
    <>
      {cookies.token ? (
        <SignInNavigation title={testUserName} />
      ) : (
        <Link to="/customer/SignIn">
          <SignInNavigation title="로그인 하기" />
        </Link>
      )}
      <Link to="ReservationHistory">
        <HistoryNavigation title="예약 내역">
          <span>&gt;</span>
        </HistoryNavigation>
      </Link>
      <HistoryNavigation title="원격 줄서기 내역">
        <span>&gt;</span>
      </HistoryNavigation>
      <HistoryNavigation title="최근 본 매장">
        <span>&gt;</span>
      </HistoryNavigation>
    </>
  );
};

export default CustomerInformationSection;
