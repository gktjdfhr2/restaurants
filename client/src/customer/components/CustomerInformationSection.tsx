import { useState } from 'react';
import { CustomerInformation } from './CustomerInformation';

const CustomerInformationSection = () => {
  const [isLogin] = useState(true);
  const testUserName = '최재혁';

  return (
    <CustomerInformation.Container>
      <CustomerInformation.SignIn
        title={isLogin ? testUserName : '로그인 하기'}
      />
      <CustomerInformation.History title="예약 내역">
        <span>&gt;</span>
      </CustomerInformation.History>
      <CustomerInformation.History title="원격 줄서기 내역">
        <span>&gt;</span>
      </CustomerInformation.History>
      <CustomerInformation.History title="최근 본 매장">
        <span>&gt;</span>
      </CustomerInformation.History>
    </CustomerInformation.Container>
  );
};

export default CustomerInformationSection;