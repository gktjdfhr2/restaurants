import React from 'react';
import propTypes from 'prop-types';
import ProprietorHistListItems from './ProprietorHistListItems';

function ProprietorHistList({ histListShow, showHistButton }) {
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
          <ProprietorHistListItems />
          <ProprietorHistListItems />
          <ProprietorHistListItems />
          <ProprietorHistListItems />
          <ProprietorHistListItems />
          <ProprietorHistListItems />
        </>
      )}
    </>
  );
}
ProprietorHistList.propTypes = {
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
export default React.memo(ProprietorHistList, areEqual);
