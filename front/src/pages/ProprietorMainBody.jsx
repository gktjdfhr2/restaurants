import React, { useState } from 'react';
import PropritorStayList from '../components/PropritorStayList';
import ProprietorHistList from '../components/ProprietorHistList';

function ProprietorMainBody() {
  const [showState, setShowState] = useState({
    stayListShow: true,
    histListShow: false,
  });
  function showStayButton() {
    console.log('showStayButton');
    setShowState({
      stayListShow: !showState.stayListShow,
      histListShow: !showState.histListShow,
    });
  }
  function showHisyButton() {
    console.log('showHistButton');
    setShowState({
      histListShow: !showState.histListShow,
      stayListShow: !showState.stayListShow,
    });
  }
  return (
    <section className="proprietorSection">
      <div>
        <div className="stayListTitle">
          대기 목록
          <button
            type="button"
            className="closeButton"
            onClick={showStayButton}
          >
            show
          </button>
        </div>
        {showState.stayListShow && (
          <>
            <PropritorStayList />
            <PropritorStayList />
          </>
        )}
        <div className="stayListTitle">
          히스토리
          <button
            type="button"
            className="closeButton"
            onClick={showHisyButton}
          >
            show
          </button>
        </div>
        {showState.histListShow && (
          <>
            <ProprietorHistList />
            <ProprietorHistList />
          </>
        )}
      </div>
    </section>
  );
}

export default ProprietorMainBody;
