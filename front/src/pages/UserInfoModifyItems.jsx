import React from 'react';
import PropTypes from 'prop-types';

function UserInfoModifyItems({ infoTitle, infoValue, onClick }) {
  return (
    <div id="userInfoModifyContainer">
      <div className="infoTitle">{infoTitle}</div>
      <div className="infoFlex">
        <div className="infoValue">{infoValue}</div>
        <button className="infoModify" type="button" onClick={onClick}>
          수정
        </button>
      </div>
    </div>
  );
}
UserInfoModifyItems.propTypes = {
  infoTitle: PropTypes.string.isRequired,
  infoValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default UserInfoModifyItems;
