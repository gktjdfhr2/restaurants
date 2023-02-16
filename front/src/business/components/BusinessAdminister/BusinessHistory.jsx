import React, { useState } from 'react';
import propTypes from 'prop-types';
import BusinessHistoryItems from './BusinessHistoryItems';

function BusinessHistory({ historyShowToggle, showHistoryButton }) {
  const [historyCustomerInformation] = useState({
    stayNumber: 47,
    stayStartTime: '18 : 20',
    customerName: '정한결',
    customerPersonnelAdult: 3,
    customerPersonnelkid: 0,
    lastPhoneNumber: 4782, // TODO format
    waitingTime: 21, //  TODO format
    visit: 3,
    lastVisited: '2023-01-02',
    lastCallTime: '18 : 39',
    joinTime: '18 : 40',
  });
  return (
    <>
      <div className="history-title">
        히스토리
        <button
          type="button"
          className={historyShowToggle ? 'close-button' : 'open-button'}
          onClick={showHistoryButton}
        >
          show
        </button>
      </div>

      {historyShowToggle && (
        <div className="information-items-container">
          <BusinessHistoryItems
            stayNumber={historyCustomerInformation.stayNumber}
            stayStartTime={historyCustomerInformation.stayStartTime}
            customerName={historyCustomerInformation.customerName}
            customerPersonnelAdult={
              historyCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={
              historyCustomerInformation.customerPersonnelkid
            }
            lastPhoneNumber={historyCustomerInformation.lastPhoneNumber}
            waitingTime={historyCustomerInformation.waitingTime}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
          <BusinessHistoryItems
            stayNumber={historyCustomerInformation.stayNumber}
            stayStartTime={historyCustomerInformation.stayStartTime}
            customerName={historyCustomerInformation.customerName}
            customerPersonnelAdult={
              historyCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={
              historyCustomerInformation.customerPersonnelkid
            }
            lastPhoneNumber={historyCustomerInformation.lastPhoneNumber}
            waitingTime={historyCustomerInformation.waitingTime}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
          <BusinessHistoryItems
            stayNumber={historyCustomerInformation.stayNumber}
            stayStartTime={historyCustomerInformation.stayStartTime}
            customerName={historyCustomerInformation.customerName}
            customerPersonnelAdult={
              historyCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={
              historyCustomerInformation.customerPersonnelkid
            }
            lastPhoneNumber={historyCustomerInformation.lastPhoneNumber}
            waitingTime={historyCustomerInformation.waitingTime}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
          <BusinessHistoryItems
            stayNumber={historyCustomerInformation.stayNumber}
            stayStartTime={historyCustomerInformation.stayStartTime}
            customerName={historyCustomerInformation.customerName}
            customerPersonnelAdult={
              historyCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={
              historyCustomerInformation.customerPersonnelkid
            }
            lastPhoneNumber={historyCustomerInformation.lastPhoneNumber}
            waitingTime={historyCustomerInformation.waitingTime}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
          <BusinessHistoryItems
            stayNumber={historyCustomerInformation.stayNumber}
            stayStartTime={historyCustomerInformation.stayStartTime}
            customerName={historyCustomerInformation.customerName}
            customerPersonnelAdult={
              historyCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={
              historyCustomerInformation.customerPersonnelkid
            }
            lastPhoneNumber={historyCustomerInformation.lastPhoneNumber}
            waitingTime={historyCustomerInformation.waitingTime}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
        </div>
      )}
    </>
  );
}
BusinessHistory.propTypes = {
  historyShowToggle: propTypes.bool.isRequired,
  showHistoryButton: propTypes.func.isRequired,
};
function areEqual(prevProps, nextProps) {
  // console.log('boolValue', prevProps.historyShowToggle === nextProps.historyShowToggle);
  // console.log(
  //   'funcHandle',
  //   prevProps.showHistoryButton === nextProps.showHistoryButton,
  // );
  return (
    // eslint-disable-next-line operator-linebreak
    prevProps.historyShowToggle === nextProps.historyShowToggle &&
    prevProps.showHistoryButton === nextProps.showHistoryButton
  );
}
export default React.memo(BusinessHistory, areEqual);
