import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import HistMoreInfo from './HistMoreInfo';

function BusinessHistList({
  stayNumber,
  stayStartTime,
  customerName,
  customerPersonnelAdult,
  customerPersonnelkid,
  lastPhoneNumber,
  wating,
  visit,
  lastVisited,
  lastCallTime,
  joinTime,
}) {
  const [clicked, setClicked] = useState(false);

  const showMoreInformation = useCallback(() => {
    setClicked(!clicked);
    console.log('clicked');
  }, [clicked]);
  console.log(showMoreInformation);

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
          {lastCallTime}
        </button>
        <button type="button" className="customer-join">
          {joinTime}
        </button>
      </div>
      {clicked && (
        <HistMoreInfo wating={wating} visit={visit} lastVisited={lastVisited} />
      )}
    </>
  );
}
BusinessHistList.propTypes = {
  stayNumber: PropTypes.number.isRequired,
  stayStartTime: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerPersonnelAdult: PropTypes.number.isRequired,
  customerPersonnelkid: PropTypes.number.isRequired,
  lastPhoneNumber: PropTypes.number.isRequired,
  wating: PropTypes.number.isRequired,
  visit: PropTypes.number.isRequired,
  lastVisited: PropTypes.string.isRequired,
  lastCallTime: PropTypes.string.isRequired,
  joinTime: PropTypes.string.isRequired,
};
export default BusinessHistList;
