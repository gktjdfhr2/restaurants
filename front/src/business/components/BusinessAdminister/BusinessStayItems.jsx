import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import StayMoreInformation from './StayMoreInformation';

function BusinessStayItems({
  stayNumber,
  stayStartTime,
  customerName,
  customerPersonnelAdult,
  customerPersonnelkid,
  lastPhoneNumber,
  waitingTime,
  visit,
  lastVisited,
}) {
  const [moreInformationToggle, setMoreInformationToggle] = useState(false);
  console.log(typeof stayNumber);
  const callCustomer = useCallback((event) => {
    event.stopPropagation();
    console.log('call');
  }, []);

  const changeStayState = useCallback((event) => {
    event.stopPropagation();
    console.log('staying');
  }, []);

  const showMoreInformation = useCallback(() => {
    setMoreInformationToggle(!moreInformationToggle);
    console.log('click');
  }, [moreInformationToggle]);

  return (
    <>
      <div className="business-customer-information-container">
        <div className="stay-time">
          <div className="stay-number">{stayNumber}</div>
          <div className="stay-start-time">{stayStartTime}</div>
        </div>
        <button
          type="button"
          onClick={showMoreInformation}
          className="more-information-button"
        >
          <div className="customer-name">{customerName}</div>
          <div className="customer-personnel-information">
            성인 {customerPersonnelAdult}
            &nbsp; 유아 {customerPersonnelkid}
            &nbsp; | &nbsp;{lastPhoneNumber}
          </div>
        </button>
        <button
          type="button"
          className="customer-call-button"
          onClick={callCustomer}
        >
          호출
        </button>
        <button
          type="button"
          className="customer-stay-state-change-button"
          onClick={changeStayState}
        >
          대기중
        </button>
      </div>
      {moreInformationToggle && (
        <StayMoreInformation
          waitingTime={waitingTime}
          visit={visit}
          lastVisited={lastVisited}
        />
      )}
    </>
  );
}

BusinessStayItems.propTypes = {
  stayNumber: PropTypes.number.isRequired,
  stayStartTime: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerPersonnelAdult: PropTypes.number.isRequired,
  customerPersonnelkid: PropTypes.number.isRequired,
  lastPhoneNumber: PropTypes.number.isRequired,
  waitingTime: PropTypes.number.isRequired,
  visit: PropTypes.number.isRequired,
  lastVisited: PropTypes.string.isRequired,
};

export default BusinessStayItems;
