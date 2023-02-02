import React, { useState, useRef } from 'react';

function SignUp() {
  console.log('siginUp');

  const idState = useRef(null);
  const pwState = useRef(null);
  const [signUpInfo, setSignUpInfo] = useState({
    userId: '',
    userPw1: '',
    userPw2: '',
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
    setSignUpInfo({ ...signUpInfo, userpw1: pw1 });
  };
  /** 비밀번호 일치 확인 */
  const pwCheckHandle = (event) => {
    const pw2 = event.target.value;

    if (pw2 === signUpInfo.userPw1) {
      pwState.current.style.color = 'white';
    } else {
      pwState.current.style.color = 'red';
    }
    setSignUpInfo({ ...signUpInfo, userpw2: pw2 });
  };

  /** 로그인 버튼 클릭 */
  const signIn = (event) => {
    event.preventDefault();
    if (signUpInfo.userPw1 !== signUpInfo.userPw2) {
      setSignUpInfo({ ...signUpInfo, userpw2: '' });
    }
    console.log('submit');
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
            placeholder="아이디"
            required
            value={signUpInfo.userId}
            onChange={idHandleChange}
          />
          <div id="idState" ref={idState}>
            아이디를 입력해주세요
          </div>
          <div>비밀번호</div>
          <input
            type="password"
            id="pw1"
            placeholder="비밀번호"
            value={signUpInfo.userPw1}
            onChange={pwHandleChange}
            required
          />
          <input
            type="password"
            id="pw2"
            placeholder="비밀번호 확인"
            required
            value={signUpInfo.userPw2}
            onChange={pwCheckHandle}
          />
          <div id="pwState" ref={pwState}>
            비밀번호를 확인해주세요
          </div>
          <div>이름</div>
          <input type="text" placeholder="예) 홍길동" required />
          <div>주소</div>
          <input type="text" required />
          <div>전화번호</div>
          <input
            type="text"
            placeholder="-을 제거해서 입력해주세요 예)01012345678"
            required
            pattern="[0]+[1]+[0-9]{9}"
          />
          <div>회원 유형</div>
          <select defaultValue="고객">
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
