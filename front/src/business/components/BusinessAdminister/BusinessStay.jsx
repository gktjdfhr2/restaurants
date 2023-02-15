import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BusinessStayItems from './BusinessStayItems';

function BusinessStay({ stayShowToggle, showStayButton }) {
  const [stayCustomerInformation] = useState({
    stayNumber: 47,
    stayStartTime: '18 : 20',
    customerName: '정한결',
    customerPersonnelAdult: 3,
    customerPersonnelkid: 0,
    lastPhoneNumber: 4782,
    waitingTime: 21,
    visit: 3,
    lastVisited: '2023-01-02',
  });
  return (
    <>
      <div className="history-title">
        대기 목록
        <button
          type="button"
          className={stayShowToggle ? 'close-button' : 'open-button'}
          onClick={showStayButton}
        >
          show
        </button>
      </div>

      {stayShowToggle && (
        <div className="information-items-container">
          <BusinessStayItems
            stayNumber={stayCustomerInformation.stayNumber}
            stayStartTime={stayCustomerInformation.stayStartTime}
            customerName={stayCustomerInformation.customerName}
            customerPersonnelAdult={
              stayCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={stayCustomerInformation.customerPersonnelkid}
            lastPhoneNumber={stayCustomerInformation.lastPhoneNumber}
            waitingTime={stayCustomerInformation.waitingTime}
            visit={stayCustomerInformation.visit}
            lastVisited={stayCustomerInformation.lastVisited}
          />
          <BusinessStayItems
            stayNumber={stayCustomerInformation.stayNumber}
            stayStartTime={stayCustomerInformation.stayStartTime}
            customerName={stayCustomerInformation.customerName}
            customerPersonnelAdult={
              stayCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={stayCustomerInformation.customerPersonnelkid}
            lastPhoneNumber={stayCustomerInformation.lastPhoneNumber}
            waitingTime={stayCustomerInformation.waitingTime}
            visit={stayCustomerInformation.visit}
            lastVisited={stayCustomerInformation.lastVisited}
          />
          <BusinessStayItems
            stayNumber={stayCustomerInformation.stayNumber}
            stayStartTime={stayCustomerInformation.stayStartTime}
            customerName={stayCustomerInformation.customerName}
            customerPersonnelAdult={
              stayCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={stayCustomerInformation.customerPersonnelkid}
            lastPhoneNumber={stayCustomerInformation.lastPhoneNumber}
            waitingTime={stayCustomerInformation.waitingTime}
            visit={stayCustomerInformation.visit}
            lastVisited={stayCustomerInformation.lastVisited}
          />
          <BusinessStayItems
            stayNumber={stayCustomerInformation.stayNumber}
            stayStartTime={stayCustomerInformation.stayStartTime}
            customerName={stayCustomerInformation.customerName}
            customerPersonnelAdult={
              stayCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={stayCustomerInformation.customerPersonnelkid}
            lastPhoneNumber={stayCustomerInformation.lastPhoneNumber}
            waitingTime={stayCustomerInformation.waitingTime}
            visit={stayCustomerInformation.visit}
            lastVisited={stayCustomerInformation.lastVisited}
          />
          <BusinessStayItems
            stayNumber={stayCustomerInformation.stayNumber}
            stayStartTime={stayCustomerInformation.stayStartTime}
            customerName={stayCustomerInformation.customerName}
            customerPersonnelAdult={
              stayCustomerInformation.customerPersonnelAdult
            }
            customerPersonnelkid={stayCustomerInformation.customerPersonnelkid}
            lastPhoneNumber={stayCustomerInformation.lastPhoneNumber}
            waitingTime={stayCustomerInformation.waitingTime}
            visit={stayCustomerInformation.visit}
            lastVisited={stayCustomerInformation.lastVisited}
          />
        </div>
      )}
    </>
  );
}
BusinessStay.propTypes = {
  stayShowToggle: PropTypes.bool.isRequired,
  showStayButton: PropTypes.func.isRequired,
};

function areEqual(prevProps, nextProps) {
  // console.log('boolValue', prevProps.stayShowToggle === nextProps.stayShowToggle);
  // console.log(
  //   'funcHandle',
  //   prevProps.showStayButton === nextProps.showStayButton,
  // );
  return (
    // eslint-disable-next-line operator-linebreak
    prevProps.stayShowToggle === nextProps.stayShowToggle &&
    prevProps.showStayButton === nextProps.showStayButton
  );
}
export default React.memo(BusinessStay, areEqual);
