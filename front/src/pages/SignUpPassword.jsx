/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

function SignUpPassword({ userPw1, userPw2, userPwHandle, pwCheckHandle }) {
  return (
    <>
      <div>비밀번호</div>
      <input
        type="password"
        id="pw1"
        placeholder="비밀번호 숫자 + 영문 4자이상"
        value={userPw1}
        onChange={(event) => {
          userPwHandle(event.target.value);
        }}
        required
        pattern="[a-zA-Z0-9]{4,}"
      />
      <input
        type="password"
        id="pw2"
        placeholder="비밀번호 확인"
        required
        value={userPw2}
        onChange={(event) => {
          pwCheckHandle(event.target.value);
        }}
        pattern="[a-zA-Z0-9]{4,}"
      />
    </>
  );
}
SignUpPassword.propTypes = {
  userPw1: PropTypes.string.isRequired,
  userPw2: PropTypes.string.isRequired,
  userPwHandle: PropTypes.func.isRequired,
  pwCheckHandle: PropTypes.func.isRequired,
};
function areEqual(prevProps, nextProps) {
  console.log(prevProps, nextProps);
  return (
    // eslint-disable-next-line operator-linebreak
    prevProps.userPw1 === nextProps.userPw1 &&
    prevProps.userPw2 === nextProps.userPw2
  );
}
const SignUpPasswordMemo = React.memo(SignUpPassword, areEqual);
export default SignUpPasswordMemo;
