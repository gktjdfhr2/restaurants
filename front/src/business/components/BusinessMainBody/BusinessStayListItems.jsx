import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import StayMoreInfo from './StayMoreInfo';

function BusinessStayList({
  stayNumber,
  stayStartTime,
  customerName,
  customerPersonnelAdult,
  customerPersonnelkid,
  lastPhoneNumber,
}) {
  const [clicked, setClicked] = useState(false);

  const callClick = useCallback((event) => {
    event.stopPropagation();
    console.log('call');
  }, []);

  const stayingClick = useCallback((event) => {
    event.stopPropagation();
    console.log('staying');
  }, []);

  const showMoreInformation = useCallback(() => {
    setClicked(!clicked);
    console.log('click');
  }, [clicked]);
  console.log(showMoreInformation, stayingClick, callClick);

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
          <div>{customerName}</div>
          <div>
            성인
            {customerPersonnelAdult}
            {customerPersonnelkid}
            ||
            {lastPhoneNumber}
          </div>
        </button>
        <button type="button" className="customer-call-button">
          호출
        </button>
        <button type="button" className="customer-stay-state-change-button">
          대기중
        </button>
      </div>
      <div>{clicked && <StayMoreInfo />}</div>
    </>
  );
}

BusinessStayList.propTypes = {
  stayNumber: PropTypes.number.isRequired,
  stayStartTime: PropTypes.number.isRequired,
  customerName: PropTypes.string.isRequired,
  customerPersonnelAdult: PropTypes.string.isRequired,
  customerPersonnelkid: PropTypes.number.isRequired,
  lastPhoneNumber: PropTypes.number.isRequired,
};

export default BusinessStayList;
