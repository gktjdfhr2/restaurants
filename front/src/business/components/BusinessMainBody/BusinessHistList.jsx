import React, { useState } from 'react';
import propTypes from 'prop-types';
import BusinessHistListItems from './BusinessHistListItems';

function BusinessHistList({ histListShow, showHistButton }) {
  const [historyCustomerInformation] = useState({
    stayNumber: 47,
    stayStartTime: '18 : 20',
    customerName: '정한결',
    customerPersonnelAdult: 3,
    customerPersonnelkid: 0,
    lastPhoneNumber: 4782,
    wating: 21,
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
          className={histListShow ? 'close-button' : 'open-button'}
          onClick={showHistButton}
        >
          show
        </button>
      </div>

      {histListShow && (
        <div className="information-items-container">
          <BusinessHistListItems
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
            wating={historyCustomerInformation.wating}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
          <BusinessHistListItems
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
            wating={historyCustomerInformation.wating}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
          <BusinessHistListItems
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
            wating={historyCustomerInformation.wating}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
          <BusinessHistListItems
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
            wating={historyCustomerInformation.wating}
            visit={historyCustomerInformation.visit}
            lastVisited={historyCustomerInformation.lastVisited}
            lastCallTime={historyCustomerInformation.lastCallTime}
            joinTime={historyCustomerInformation.joinTime}
          />
          <BusinessHistListItems
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
            wating={historyCustomerInformation.wating}
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
BusinessHistList.propTypes = {
  histListShow: propTypes.bool.isRequired,
  showHistButton: propTypes.func.isRequired,
};
function areEqual(prevProps, nextProps) {
  // console.log('boolValue', prevProps.histListShow === nextProps.histListShow);
  // console.log(
  //   'funcHandle',
  //   prevProps.showHistButton === nextProps.showHistButton,
  // );
  return (
    // eslint-disable-next-line operator-linebreak
    prevProps.histListShow === nextProps.histListShow &&
    prevProps.showHistButton === nextProps.showHistButton
  );
}
export default React.memo(BusinessHistList, areEqual);
