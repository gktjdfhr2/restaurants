/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

function SignUpPassword({ userPw1, userPw2, userPwHandle, pwCheckHandle }) {
  console.log('SignUpPassword');
  return (
    <>
      <div>비밀번호</div>
      <input
        type="password"
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
  console.log('pw1', prevProps.userPw1 === nextProps.userPw1);
  console.log('pw2', prevProps.userPw2 === nextProps.userPw2);
  console.log('핸들1', prevProps.userPwHandle === nextProps.userPwHandle);
  console.log('핸들2', prevProps.pwCheckHandle === nextProps.pwCheckHandle);
  return (
    // eslint-disable-next-line operator-linebreak
    prevProps.userPw1 === nextProps.userPw1 &&
    prevProps.userPw2 === nextProps.userPw2
  );
}
export default React.memo(SignUpPassword, areEqual);
