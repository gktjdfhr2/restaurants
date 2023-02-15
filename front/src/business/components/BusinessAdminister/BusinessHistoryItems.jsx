import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import HistoryMoreInformation from './HistoryMoreInformation';

function BusinessHistoryItems({
  stayNumber,
  stayStartTime,
  customerName,
  customerPersonnelAdult,
  customerPersonnelkid,
  lastPhoneNumber,
  waitingTime,
  visit,
  lastVisited,
  lastCallTime,
  joinTime,
}) {
  const [moreInformationToggle, setMoreInformationToggle] = useState(false);

  const showMoreInformation = useCallback(() => {
    setMoreInformationToggle(!moreInformationToggle);
    console.log('moreInformationToggle');
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
        <button type="button" className="customer-call-button">
          {lastCallTime}
        </button>
        <button type="button" className="customer-join">
          {joinTime}
        </button>
      </div>
      {moreInformationToggle && (
        <HistoryMoreInformation
          waitingTime={waitingTime}
          visit={visit}
          lastVisited={lastVisited}
        />
      )}
    </>
  );
}
BusinessHistoryItems.propTypes = {
  stayNumber: PropTypes.number.isRequired,
  stayStartTime: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  customerPersonnelAdult: PropTypes.number.isRequired,
  customerPersonnelkid: PropTypes.number.isRequired,
  lastPhoneNumber: PropTypes.number.isRequired,
  waitingTime: PropTypes.number.isRequired,
  visit: PropTypes.number.isRequired,
  lastVisited: PropTypes.string.isRequired,
  lastCallTime: PropTypes.string.isRequired,
  joinTime: PropTypes.string.isRequired,
};
export default BusinessHistoryItems;
