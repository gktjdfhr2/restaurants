import React, { useState, useRef } from 'react';
import axios from 'axios';

function SignUp() {
  console.log('siginUp');

  const idState = useRef(null);
  const pwState = useRef(null);

  const [signUpInfo, setSignUpInfo] = useState({
    userId: '',
    userPw1: '',
    userPw2: '',
    userName: '',
    userAddress: '',
    userPhoneNum: '',
    userType: '고객',
  });

  /** 아이디 입력 확인 */
  const idHandleChange = (event) => {
    if (event.target.value.length > 0) {
      idState.current.style.color = 'white';
    } else {
      idState.current.style.color = 'black';
    }
    setSignUpInfo({ ...signUpInfo, userId: event.target.value });
  };

  /** 비밀번호 입력 확인 */
  const pwHandleChange = (event) => {
    const pw1 = event.target.value;

    if (pw1 === signUpInfo.userPw2) {
      pwState.current.style.color = 'white';
    } else {
      pwState.current.style.color = 'red';
    }
    setSignUpInfo({ ...signUpInfo, userPw1: pw1 });
  };

  /** 비밀번호 일치 확인 */
  const pwCheckHandle = (event) => {
    const pw2 = event.target.value;

    if (pw2 === signUpInfo.userPw1) {
      pwState.current.style.color = 'white';
    } else {
      pwState.current.style.color = 'red';
    }
    setSignUpInfo({ ...signUpInfo, userPw2: pw2 });
  };

  /** 이름 입력 확인 */
  const userNameHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, userName: event.target.value });
  };

  /** 주소 입력 확인 */
  const userAddressHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, userAddress: event.target.value });
  };

  /** 핸드폰번호 입력 확인 */
  const userPhoneNumHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, userPhoneNum: event.target.value });
  };

  /** 회원 유형 확인 */
  const userTypeHandle = (event) => {
    setSignUpInfo({ ...signUpInfo, userType: event.target.value });
  };

  const register = () => {
    axios
      .post('localhost:3000/account/signUp', signUpInfo)
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
    if (signUpInfo.userPw1 !== signUpInfo.userPw2) {
      setSignUpInfo({ ...signUpInfo, userPw2: '' });
    } else {
      register();
    }
  };

  return (
    <section id="SignUpSection">
      <div id="SignUpTitle">회원가입</div>
      <div id="SignUpItemContainer">
        <form onSubmit={signIn}>
          <div>아이디</div>
          <input
            type="text"
            id="userId"
            placeholder="아이디 숫자 + 영문 6자이상"
            required
            value={signUpInfo.userId}
            onChange={idHandleChange}
            pattern="[a-zA-Z0-9]{6,}"
          />
          <div id="idState" ref={idState}>
            아이디를 입력해주세요
          </div>
          <div>비밀번호</div>
          <input
            type="password"
            id="pw1"
            placeholder="비밀번호 숫자 + 영문 4자이상"
            value={signUpInfo.userPw1}
            onChange={pwHandleChange}
            required
            pattern="[a-zA-Z0-9]{4,}"
          />
          <input
            type="password"
            id="pw2"
            placeholder="비밀번호 확인"
            required
            value={signUpInfo.userPw2}
            onChange={pwCheckHandle}
            pattern="[a-zA-Z0-9]{4,}"
          />
          <div id="pwState" ref={pwState}>
            비밀번호를 확인해주세요
          </div>
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
            onChange={userPhoneNumHandle}
          />
          <div>회원 유형</div>
          <select defaultValue="고객" onChange={userTypeHandle}>
            <option value="고객">고객</option>
            <option value="사업자">사업자</option>
          </select>
          <button type="submit" id="infoSubmit">
            가입하기
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
