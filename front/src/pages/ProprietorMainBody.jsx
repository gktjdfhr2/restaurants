import React, { useState, useCallback } from 'react';
import PropritorStayList from '../components/PropritorStayList';
import ProprietorHistList from '../components/ProprietorHistList';

function ProprietorMainBody() {
  const [showState, setShowState] = useState({
    stayListShow: true,
    histListShow: false,
  });
  const showStayButton = useCallback(() => {
    console.log('showStayButton');
    setShowState({
      stayListShow: !showState.stayListShow,
      histListShow: !showState.histListShow,
    });
  }, [showState.stayListShow]);

  const showHistButton = useCallback(() => {
    console.log('showHistButton');
    setShowState({
      histListShow: !showState.histListShow,
      stayListShow: !showState.stayListShow,
    });
  }, [showState.histListShow]);

  return (
    <section className="proprietorSection">
      <div>
        <div
          className={
            showState.stayListShow ? 'stayListTitleShow' : 'stayListTitle'
          }
        >
          대기 목록
          <button
            type="button"
            className={showState.stayListShow ? 'openButton' : 'closeButton'}
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
        <div
          className={
            showState.histListShow ? 'stayListTitleShow' : 'stayListTitle'
          }
        >
          히스토리
          <button
            type="button"
            className={showState.histListShow ? 'openButton' : 'closeButton'}
            onClick={showHistButton}
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
