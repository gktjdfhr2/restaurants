import PageTitle from '@customer/UI/Form/PageTitle';
import ExhibitionItems from '@customer/UI/Form/ExhibitionItems';
import HistoryContainer from '@customer/UI/Form/HistoryContainer';
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

// const SearchNavigation = styled.button`
//   // border: none;
//   width: 30px;
//   height: 30px;
//   background-size: contain;
//   background: url(/src/assets/images/placeholder.png);
// `;

const RecentViewHistory = () => {
  const localStorage = window.localStorage;
  const historyDefault: Array<String> = JSON.parse(
    `${localStorage.getItem('viewHistory')}`
  )
    ? JSON.parse(`${localStorage.getItem('viewHistory')}`)
    : [];
  const [history] = useState(historyDefault);

  {
    /* <Link to="/customer/StoreInformation/소우데스">
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
        </Link>
        <Link to="/customer/StoreInformation/땅땅치킨">
          <ExhibitionItems
            title="땅땅치킨"
            score={4.6}
            countReview={303}
            condition="패스트푸드"
            address="사직동"
            distance={0.05}
            reservation={true}
            line={false}
          />
        </Link>
        <Link to="/customer/StoreInformation/초밥쟁이">
          <ExhibitionItems
            title="초밥쟁이"
            score={4.9}
            countReview={303}
            condition="일식"
            address="사직동"
            distance={1.98}
            reservation={true}
            line={false}
          />
        </Link> */
  }

  return (
    <>
      <PageTitle>최근 본 매장</PageTitle>
      <HistoryContainer>
        {history.length === 0 ? (
          <>
            <NoneHistory>최근 본 매장이 없네요!</NoneHistory>
            <Link to="/customer/Search">
              <LinkRestaurants>
                주변 맛집 탐방하러가기 &gt;
                {/* <SearchNavigation /> */}
              </LinkRestaurants>
            </Link>
          </>
        ) : (
          history.slice(0, 4).map((value, index) => (
            <Link to={`/customer/StoreInformation/${value}`} key={index}>
              <ExhibitionItems
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
      </HistoryContainer>
    </>
  );
};

export default RecentViewHistory;
