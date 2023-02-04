import React from 'react';
import PropTypes from 'prop-types';

function SignUpId({ userId, userIdHandle }) {
  console.log('SignUpId');
  return (
    <form>
      <div>아이디</div>
      <input
        type="text"
        id="userId"
        placeholder="아이디 숫자 + 영문 6자이상"
        required
        value={userId}
        onChange={(event) => {
          userIdHandle(event.target.value);
        }}
        pattern="[a-zA-Z0-9]{6,}"
      />
    </form>
  );
}

SignUpId.propTypes = {
  userId: PropTypes.string.isRequired,
  userIdHandle: PropTypes.func.isRequired,
};
// function areEqual(prevProps, nextProps) {
//   console.log(prevProps, nextProps);
//   return prevProps.userId === nextProps.userId;
// }
export default React.memo(SignUpId);
