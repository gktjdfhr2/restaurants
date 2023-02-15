import React from 'react';
import PropTypes from 'prop-types';

function CustomerInformationModifyItems({
  informationTitle,
  informationValue,
  modifyButtonAction,
}) {
  return (
    <div id="customer-information-modify-container">
      <div className="information-title">{informationTitle}</div>
      <div className="information-value-container">
        <div className="information-value">{informationValue}</div>
        <button
          className="information-modify-button"
          type="button"
          onClick={modifyButtonAction}
        >
          수정
        </button>
      </div>
    </div>
  );
}
CustomerInformationModifyItems.propTypes = {
  informationTitle: PropTypes.string.isRequired,
  informationValue: PropTypes.string.isRequired,
  modifyButtonAction: PropTypes.func.isRequired,
};
export default CustomerInformationModifyItems;
