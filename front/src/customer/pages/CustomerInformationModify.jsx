import React, { useState, useCallback } from 'react';
import UserInfoModifyItems from '../components/CustomerInformationModify/CustomerInformationModifyItems';

function UserInfoModify() {
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
        infoTitle="이름"
        infoValue={userInfo.name}
        onClick={modifyButtonAction}
      />
      <UserInfoModifyItems
        infoTitle="이메일 주소"
        infoValue={userInfo.emailAddress}
      />
      <UserInfoModifyItems
        infoTitle="휴대폰 번호"
        infoValue={userInfo.phoneNum}
      />
      <UserInfoModifyItems
        infoTitle="비밀번호"
        infoValue={'*'.repeat(userInfo.password.length)}
      />
    </section>
  );
}
export default UserInfoModify;
