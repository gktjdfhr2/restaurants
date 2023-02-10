import React from 'react';
import PropTypes from 'prop-types';
import PropritorStayListItems from './ProprietorStayListItems';

function ProprietorStayList({ stayListShow, showStayButton }) {
  return (
    <>
      <div className={stayListShow ? 'stayListTitleShow' : 'stayListTitle'}>
        대기 목록
        <button
          type="button"
          className={stayListShow ? 'openButton' : 'closeButton'}
          onClick={showStayButton}
        >
          show
        </button>
      </div>
      {stayListShow && (
        <>
          <PropritorStayListItems />
          <PropritorStayListItems />
        </>
      )}
    </>
  );
}
ProprietorStayList.propTypes = {
  stayListShow: PropTypes.bool.isRequired,
  showStayButton: PropTypes.func.isRequired,
};
export default ProprietorStayList;
