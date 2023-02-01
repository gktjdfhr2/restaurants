import React from 'react';

function SignUp() {
  const signInHandleChagne = () => {
    const showTarget = document.querySelector('#idState');
    const pwShowTarget = document.querySelector('#pwState');
    const pw1 = document.querySelector('#pw1').value;
    const pw2 = document.querySelector('#pw2').value;
    const userId = document.querySelector('#userId').value;
    console.log('change');
    if (userId.length > 0) {
      showTarget.setAttribute('style', 'color: white;');
    } else {
      showTarget.setAttribute('style', 'color: black;');
    }

    if (pw1 === pw2) {
      pwShowTarget.setAttribute('style', 'color: white;');
    } else {
      pwShowTarget.setAttribute('style', 'color: red;');
    }
  };
  const signIn = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <section id="SignUpSection">
      <div id="SignUpTitle">회원가입</div>
      <div id="SignUpItemContainer">
        <form onSubmit={signIn} onChange={signInHandleChagne}>
          <div>아이디</div>
          <input type="text" id="userId" placeholder="아이디" />
          <div id="idState">아이디를 입력해주세요</div>
          <div>비밀번호</div>
          <input type="password" id="pw1" placeholder="비밀번호" />
          <input type="password" id="pw2" placeholder="비밀번호 확인" />
          <div id="pwState">비밀번호를 확인해주세요</div>
          <div>이름</div>
          <input type="text" placeholder="예) 홍길동" />
          <div>주소</div>
          <input type="text" />
          <div>전화번호</div>
          <input
            type="text"
            placeholder="-을 제거해서 입력해주세요 예)01012345678"
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
