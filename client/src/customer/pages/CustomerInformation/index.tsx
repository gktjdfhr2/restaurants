import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInNavigation from './SignInNavigation';
import HistoryInformation from './HistoryInformation';

const CustomerInformationSection = () => {
  const [isLogin] = useState(false);
  const testUserName = '최재혁';

  return (
    <>
      {isLogin ? (
        <SignInNavigation title={testUserName} />
      ) : (
        <Link to="/customer/SignIn">
          <SignInNavigation title="로그인 하기" />
        </Link>
      )}
      <HistoryInformation title="예약 내역">
        <span>&gt;</span>
      </HistoryInformation>
      <HistoryInformation title="원격 줄서기 내역">
        <span>&gt;</span>
      </HistoryInformation>
      <HistoryInformation title="최근 본 매장">
        <span>&gt;</span>
      </HistoryInformation>
    </>
  );
};

export default CustomerInformationSection;
