/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

function SignUpPassword({
  userPassword,
  passwordCheck,
  passwordHandle,
  passwordCheckHandle,
}) {
  console.log('SignUpPassword');
  return (
    <>
      <div>비밀번호</div>
      <input
        type="password"
        placeholder="비밀번호 숫자 + 영문 4자이상"
        value={userPassword}
        onChange={(event) => {
          passwordHandle(event.target.value);
        }}
        required
        pattern="[a-zA-Z0-9]{4,}"
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        required
        value={passwordCheck}
        onChange={(event) => {
          passwordCheckHandle(event.target.value);
        }}
        pattern="[a-zA-Z0-9]{4,}"
      />
    </>
  );
}
SignUpPassword.propTypes = {
  userPassword: PropTypes.string.isRequired,
  passwordCheck: PropTypes.string.isRequired,
  passwordHandle: PropTypes.func.isRequired,
  passwordCheckHandle: PropTypes.func.isRequired,
};
function areEqual(prevProps, nextProps) {
  console.log('pw1', prevProps.userPassword === nextProps.userPassword);
  console.log('pw2', prevProps.passwordCheck === nextProps.passwordCheck);
  console.log('핸들1', prevProps.passwordHandle === nextProps.passwordHandle);
  console.log(
    '핸들2',
    prevProps.passwordCheckHandle === nextProps.passwordCheckHandle,
  );
  return (
    // eslint-disable-next-line operator-linebreak
    prevProps.userPassword === nextProps.userPassword &&
    prevProps.passwordCheck === nextProps.passwordCheck
  );
}
export default React.memo(SignUpPassword, areEqual);
