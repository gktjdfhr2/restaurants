import React from 'react';
import propTypes from 'prop-types';
import BusinessHistListItems from './BusinessHistListItems';

function BusinessHistList({ histListShow, showHistButton }) {
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
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
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
