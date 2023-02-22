import React, { useState, useCallback } from 'react';
import axios from 'axios';
import SignUpId from '../components/SignUp/SignUpId';
import SignUpPassword from '../components/SignUp/SignUpPassword';

function SignUp() {
  console.log('siginUp');

  const [signUpInfo, setSignUpInfo] = useState({
    userId: '',
    userPassword: '',
    userName: '',
    userAddress: '',
    userPhoneNumber: '',
    userType: '고객',
  });
  const [passwordCheck, setCheckPassword] = useState('');

  /** 아이디 입력 */
  const userIdHandle = useCallback(
    (inputId) => {
      setSignUpInfo((prev) => ({ ...prev, userId: inputId }));
      console.log(signUpInfo.userId);
    },
    [signUpInfo.userId],
  );

  /** 비밀번호 입력 확인 */
  const passwordHandle = useCallback(
    (inputPassword) => {
      setSignUpInfo((prev) => ({ ...prev, userPassword: inputPassword }));
      console.log(signUpInfo.userPassword);
    },
    [signUpInfo.userPassword],
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
    setSignUpInfo({ ...signUpInfo, userName: event.target.value });
  };

  /** 주소 입력 확인 */
  const userAddressHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, userAddress: event.target.value });
  };
  /** 핸드폰번호 입력 확인 */
  const userPhoneNumberHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, userPhoneNumber: event.target.value });
  };

  /** 회원 유형 확인 */
  const userTypeHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, userType: event.target.value });
  };

  const register = () => {
    axios
      .post('localhost:8080/account/signUp', signUpInfo)
      .then((response) => {
        console.log(response);
        console.log('data:', response.data.user);
        console.log('tocken', response.data.jwt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (event) => {
    event.preventDefault();
    console.log(signUpInfo);
    // if (signUpInfo.userPassword !== signUpInfo.passwordCheck) {
    //   setSignUpInfo({ ...signUpInfo, passwordCheck: '' });
    //   console.log(signUpInfo.userId);
    // } else {
    //   register();
    //   console.log(signUpInfo.userId);
    // }
    register();
  };

  return (
    <section id="signup-section">
      <div id="signup-title">회원가입</div>
      <div id="SignUpItemContainer">
        <SignUpId userId={signUpInfo.userId} userIdHandle={userIdHandle} />

        <SignUpPassword
          userPassword={signUpInfo.userPassword}
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
        <div>회원 유형</div>
        <select defaultValue="고객" onChange={userTypeHandle}>
          <option value="고객">고객</option>
          <option value="사업자">사업자</option>
        </select>
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
