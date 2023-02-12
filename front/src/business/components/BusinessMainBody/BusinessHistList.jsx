import React from 'react';
import propTypes from 'prop-types';
import BusinessHistListItems from './BusinessHistListItems';

function BusinessHistList({ histListShow, showHistButton }) {
  return (
    <>
      <div className={histListShow ? 'stayListTitleShow' : 'stayListTitle'}>
        히스토리
        <button
          type="button"
          className={histListShow ? 'openButton' : 'closeButton'}
          onClick={showHistButton}
        >
          show
        </button>
      </div>
      {histListShow && (
        <>
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
          <BusinessHistListItems />
        </>
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
