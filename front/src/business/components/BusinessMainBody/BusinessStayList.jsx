import React from 'react';
import PropTypes from 'prop-types';
import BusinessStayListItems from './BusinessStayListItems';

function BusinessStayList({ stayListShow, showStayButton }) {
  return (
    <>
      <div className={stayListShow ? 'stayListTitleShow' : 'stayListTitle'}>
        대기 목록
        <button
          type="button"
          className={stayListShow ? 'close-button' : 'open-button'}
          onClick={showStayButton}
        >
          show
        </button>
      </div>
      {stayListShow && (
        <>
          <BusinessStayListItems />
          <BusinessStayListItems />
        </>
      )}
    </>
  );
}
BusinessStayList.propTypes = {
  stayListShow: PropTypes.bool.isRequired,
  showStayButton: PropTypes.func.isRequired,
};

function areEqual(prevProps, nextProps) {
  // console.log('boolValue', prevProps.stayListShow === nextProps.stayListShow);
  // console.log(
  //   'funcHandle',
  //   prevProps.showStayButton === nextProps.showStayButton,
  // );
  return (
    // eslint-disable-next-line operator-linebreak
    prevProps.stayListShow === nextProps.stayListShow &&
    prevProps.showStayButton === nextProps.showStayButton
  );
}
export default React.memo(BusinessStayList, areEqual);
