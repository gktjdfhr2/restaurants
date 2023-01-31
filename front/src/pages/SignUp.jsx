import React from 'react';

function SignUp() {
  return (
    <section id="SignUpSection">
      <div id="SignUpTitle">회원가입</div>
      <div id="SignUpItemContainer">
        <div>아이디</div>
        <input type="text" />
        <div id="idState">아이디를 입력해주세요</div>
        <div>비밀번호</div>
        <input type="text" />
        <input type="text" />
        <div id="pwState">비밀번호를 확인해주세요</div>
        <div>이름</div>
        <input type="text" />
        <div>주소</div>
        <input type="text" />
        <div>전화번호</div>
        <input type="text" />
        <div>회원 유형</div>
        <select defaultValue="고객">
          <option value="고객">고객</option>
          <option value="사업자">사업자</option>
        </select>
        <input type="button" id="infoSubmit" value="가입하기" />
      </div>
    </section>
  );
}

export default SignUp;
