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
        </>
      )}
    </>
  );
}
ProprietorHistList.propTypes = {
  histListShow: propTypes.bool.isRequired,
  showHistButton: propTypes.func.isRequired,
};
export default ProprietorHistList;
