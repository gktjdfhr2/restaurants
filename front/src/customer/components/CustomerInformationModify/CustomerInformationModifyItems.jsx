import React from 'react';
import PropTypes from 'prop-types';

function CustomerInformationModifyItems({ infoTitle, infoValue, onClick }) {
  return (
    <div id="customer-information-modify-container">
      <div className="information-title">{infoTitle}</div>
      <div className="information-value-container">
        <div className="information-value">{infoValue}</div>
        <button
          className="information-modify-button"
          type="button"
          onClick={onClick}
        >
          수정
        </button>
      </div>
    </div>
  );
}
CustomerInformationModifyItems.propTypes = {
  infoTitle: PropTypes.string.isRequired,
  infoValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CustomerInformationModifyItems;
