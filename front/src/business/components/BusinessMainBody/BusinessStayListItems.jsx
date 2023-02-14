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
  wating,
  visit,
  lastVisited,
}) {
  const [clicked, setClicked] = useState(false);
  console.log(typeof stayNumber);
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
          <div className="customer-name">{customerName}</div>
          <div className="customer-personnel-information">
            성인 {customerPersonnelAdult}
            &nbsp; 유아 {customerPersonnelkid}
            &nbsp; | &nbsp;{lastPhoneNumber}
          </div>
        </button>
        <button type="button" className="customer-call-button">
          호출
        </button>
        <button type="button" className="customer-stay-state-change-button">
          대기중
        </button>
      </div>
      {clicked && (
        <StayMoreInfo wating={wating} visit={visit} lastVisited={lastVisited} />
      )}
    </>
  );
}

BusinessStayList.propTypes = {
  stayNumber: PropTypes.number.isRequired,
  stayStartTime: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerPersonnelAdult: PropTypes.number.isRequired,
  customerPersonnelkid: PropTypes.number.isRequired,
  lastPhoneNumber: PropTypes.number.isRequired,
  wating: PropTypes.number.isRequired,
  visit: PropTypes.number.isRequired,
  lastVisited: PropTypes.string.isRequired,
};

export default BusinessStayList;
