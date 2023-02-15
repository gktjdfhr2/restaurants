import React, { useState, useCallback } from 'react';
import UserInfoModifyItems from '../components/CustomerInformationModify/CustomerInformationModifyItems';

function CustomerInformationModify() {
  const [userInfo] = useState({
    name: '하성록',
    emailAddress: '0.0@naver.com',
    phoneNum: '01012345678',
    password: 'qlalfqjsgh',
  });
  const modifyButtonAction = useCallback((event) => {
    console.log(event.target);
  }, []);

  return (
    <section id="signup-section">
      <div id="signup-title">개인정보 수정</div>
      <UserInfoModifyItems
        informationTitle="이름"
        informationValue={userInfo.name}
        modifyButtonAction={modifyButtonAction}
      />
      <UserInfoModifyItems
        informationTitle="이메일 주소"
        informationValue={userInfo.emailAddress}
      />
      <UserInfoModifyItems
        informationTitle="휴대폰 번호"
        informationValue={userInfo.phoneNum}
      />
      <UserInfoModifyItems
        informationTitle="비밀번호"
        informationValue={'*'.repeat(userInfo.password.length)}
      />
    </section>
  );
}
export default CustomerInformationModify;
