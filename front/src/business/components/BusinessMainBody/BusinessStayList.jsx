import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BusinessStayListItems from './BusinessStayListItems';

function BusinessStayList({ stayListShow, showStayButton }) {
  const [stayCustomerInformation] = useState({
    stayNumber: 47,
    stayStartTime: '18 : 20',
    customerName: '정한결',
    customerPersonnelAdult: 3,
    customerPersonnelkid: 0,
    lastPhoneNumber: 4782,
  });
  return (
    <>
      <div className="history-title">
        대기 목록
        <button
          type="button"
          className={stayListShow ? 'close-button' : 'open-button'}
          onClick={showStayButton}
        >
          show
        </button>
      </div>
      {stayListShow && (
        <div className="information-items-container">
          <BusinessStayListItems
            stayNumber={stayCustomerInformation.stayNumber}
            stayStartTime={stayCustomerInformation.stayStartTime}
            customerName={stayCustomerInformation.customerName}
            customerPersonnelAdult={
              stayCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={stayCustomerInformation.customerPersonnelkid}
            lastPhoneNumber={stayCustomerInformation.lastPhoneNumber}
          />
        </div>
      )}
    </>
  );
}
BusinessStayList.propTypes = {
  stayListShow: PropTypes.bool.isRequired,
  showStayButton: PropTypes.func.isRequired,
};

function areEqual(prevProps, nextProps) {
  // console.log('boolValue', prevProps.stayListShow === nextProps.stayListShow);
  // console.log(
  //   'funcHandle',
  //   prevProps.showStayButton === nextProps.showStayButton,
  // );
  return (
    // eslint-disable-next-line operator-linebreak
    prevProps.stayListShow === nextProps.stayListShow &&
    prevProps.showStayButton === nextProps.showStayButton
  );
}
export default React.memo(BusinessStayList, areEqual);
