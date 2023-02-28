import { useState } from 'react';
import { CustomerInformation } from './CustomerInformation';
import { Link } from 'react-router-dom';

const CustomerInformationSection = () => {
  const [isLogin] = useState(false);
  const testUserName = '최재혁';

  return (
    <>
      {isLogin ? (
        <CustomerInformation.SignIn title={testUserName} />
      ) : (
        <Link to="/customer/SignInPage">
          <CustomerInformation.SignIn title="로그인 하기" />
        </Link>
      )}
      <CustomerInformation.History title="예약 내역">
        <span>&gt;</span>
      </CustomerInformation.History>
      <CustomerInformation.History title="원격 줄서기 내역">
        <span>&gt;</span>
      </CustomerInformation.History>
      <CustomerInformation.History title="최근 본 매장">
        <span>&gt;</span>
      </CustomerInformation.History>
    </>
  );
};

export default CustomerInformationSection;
