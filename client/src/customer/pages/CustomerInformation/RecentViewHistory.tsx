import PageTitle from '@customer/UI/Form/PageTitle';
import ExhibitionItem from '@customer/UI/Form/ExhibitionItem';
import MediumContainer from '@customer/UI/Form/MediumContainer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const NoneHistory = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 50px auto;
`;

const LinkRestaurants = styled(NoneHistory)`
  font-size: 30px;
  color: black;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const RecentViewHistory = () => {
  const localStorage = window.localStorage;
  const historyDefault: Array<String> = JSON.parse(
    `${localStorage.getItem('viewHistory')}`
  )
    ? JSON.parse(`${localStorage.getItem('viewHistory')}`)
    : [];
  const [history] = useState(historyDefault);

  return (
    <>
      <PageTitle>최근 본 매장</PageTitle>
      <MediumContainer>
        {history.length === 0 ? (
          <>
            <NoneHistory>최근 본 매장이 없네요!</NoneHistory>
            <Link to="/customer/Search">
              <LinkRestaurants>주변 맛집 탐방하러가기 &gt;</LinkRestaurants>
            </Link>
          </>
        ) : (
          history.slice(0, 4).map((value, index) => (
            <Link to={`/customer/StoreInformation/${value}`} key={index}>
              <ExhibitionItem
                title={`${value}`}
                score={4.6}
                countReview={303}
                condition="패스트푸드"
                address="사직동"
                distance={0.05}
                reservation={true}
                line={false}
              />
            </Link>
          ))
        )}
      </MediumContainer>
    </>
  );
};

export default RecentViewHistory;
