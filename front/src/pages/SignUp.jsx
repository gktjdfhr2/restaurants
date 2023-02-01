import React from 'react';

function SignUp() {
  const signInHandleChagne = () => {
    const showTarget = document.querySelector('#idState');
    const pwShowTarget = document.querySelector('#pwState');
    const pw1 = document.querySelector('#pw1');
    const pw2 = document.querySelector('#pw2');
    const userId = document.querySelector('#userId').value;

    /** 아이디 입력 확인 */
    if (userId.length > 0) {
      showTarget.setAttribute('style', 'color: white;');
    } else {
      showTarget.setAttribute('style', 'color: black;');
    }

    /** 비밀번호 일치 확인 */
    if (pw1.value === pw2.value) {
      pwShowTarget.setAttribute('style', 'color: white;');
      pw2.setCustomValidity('');
    } else {
      pwShowTarget.setAttribute('style', 'color: red;');
      pw2.setCustomValidity('비밀번호가 일치하지 않습니다.');
    }
  };

  /** 로그인 버튼 클릭 */
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
          <input type="text" id="userId" placeholder="아이디" required />
          <div id="idState">아이디를 입력해주세요</div>
          <div>비밀번호</div>
          <input type="password" id="pw1" placeholder="비밀번호" required />
          <input
            type="password"
            id="pw2"
            placeholder="비밀번호 확인"
            required
          />
          <div id="pwState">비밀번호를 확인해주세요</div>
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
