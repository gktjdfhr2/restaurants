import React, { useState, useCallback } from 'react';
import ProprietorStayList from '../components/ProprietorMainBody/ProprietorStayList';
import ProprietorHistList from '../components/ProprietorMainBody/ProprietorHistList';

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
      <div className="ProprietorListBox">
        <ProprietorStayList
          stayListShow={showState.stayListShow}
          showStayButton={showStayButton}
        />
        <ProprietorHistList
          histListShow={showState.histListShow}
          showHistButton={showHistButton}
        />
      </div>
    </section>
  );
}

export default ProprietorMainBody;
