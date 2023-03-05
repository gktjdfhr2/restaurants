import React, { useState, useCallback } from 'react';
// import axios from 'axios';
import SignUpId from '../components/SignUp/SignUpId';
import SignUpPassword from '../components/SignUp/SignUpPassword';

function SignUp() {
  console.log('siginUp');

  const [signUpInfo, setSignUpInfo] = useState({
    memberRole: 0,
    memberEmail: '',
    memberPassword: '',
    memberName: '',
    memberPhone: '',
    memberAddress: '',
  });
  const [passwordCheck, setCheckPassword] = useState('');

  /** 아이디 입력 */
  const userIdHandle = useCallback(
    (inputId) => {
      setSignUpInfo((prev) => ({ ...prev, memberEmail: inputId }));
      console.log(signUpInfo.memberEmail);
    },
    [signUpInfo.memberEmail],
  );

  /** 비밀번호 입력 확인 */
  const passwordHandle = useCallback(
    (inputPassword) => {
      setSignUpInfo((prev) => ({ ...prev, memberPassword: inputPassword }));
      console.log(signUpInfo.memberPassword);
    },
    [signUpInfo.memberPassword],
  );

  /** 비밀번호 일치 확인 */
  const passwordCheckHandle = useCallback(
    (inputPasswordCheck) => {
      setCheckPassword(inputPasswordCheck);
    },
    [passwordCheck],
  );

  /** 이름 입력 확인 */
  const userNameHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, memberName: event.target.value });
  };

  /** 주소 입력 확인 */
  const userAddressHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, memberAddress: event.target.value });
  };
  /** 핸드폰번호 입력 확인 */
  // const memberRoleHandle = (event) => {
  const userPhoneNumberHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, memberPhone: event.target.value });
  };

  /** 회원 유형 확인 */
  //   setSignUpInfo({ ...signUpInfo, memberRole: event.target.value });
  // };

  const register = () => {
    console.log(signUpInfo);
    // axios
    //   .post('localhost:8080/account/signUp', signUpInfo)
    //   .then((response) => {
    //     console.log(response);
    //     console.log('data:', response.data.user);
    //     console.log('tocken', response.data.jwt);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const signIn = (event) => {
    event.preventDefault();
    console.log(signUpInfo);
    // if (signUpInfo.userPassword !== signUpInfo.passwordCheck) {
    //   setSignUpInfo({ ...signUpInfo, passwordCheck: '' });
    //   console.log(signUpInfo.memberEmail);
    // } else {
    //   register();
    //   console.log(signUpInfo.memberEmail);
    // }
    register();
  };

  return (
    <section id="signup-section">
      <div id="signup-title">회원가입</div>
      <div id="SignUpItemContainer">
        <SignUpId userId={signUpInfo.memberEmail} userIdHandle={userIdHandle} />

        <SignUpPassword
          memberPassword={signUpInfo.memberPassword}
          passwordCheck={passwordCheck}
          passwordHandle={passwordHandle}
          passwordCheckHandle={passwordCheckHandle}
        />
        <div>이름</div>
        <input
          type="text"
          placeholder="예) 홍길동"
          required
          pattern="[가-힣]{2,}"
          onChange={userNameHandle}
        />
        <div>주소</div>
        <input
          type="text"
          required
          pattern="[가-힣]{6,}"
          onChange={userAddressHandle}
        />
        <div>전화번호</div>
        <input
          type="text"
          placeholder="-을 제거해서 입력해주세요 예)01012345678"
          required
          pattern="[0]+[1]+[0-9]{9}"
          onChange={userPhoneNumberHandle}
        />
        {/* <select defaultValue="고객" onChange={memberRoleHandle}>
        <div>회원 유형</div>
          <option value="고객">고객</option>
          <option value="사업자">사업자</option>
        </select> */}
        <form onSubmit={signIn}>
          <button type="submit" id="informationSubmit">
            가입하기
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
