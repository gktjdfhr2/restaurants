import React, { useState, useCallback } from 'react';
import BusinessStayList from '../components/BusinessMainBody/BusinessStayList';
import BusinessHistList from '../components/BusinessMainBody/BusinessHistList';

function BusinessMainBody() {
  const [showState, setShowState] = useState({
    stayListShow: true,
    histListShow: false,
  });
  const showStayButton = useCallback(() => {
    console.log('showStayButton');
    setShowState((prev) => ({
      ...prev,
      stayListShow: !showState.stayListShow,
    }));
  }, [showState.stayListShow]);

  const showHistButton = useCallback(() => {
    console.log('showHistButton');
    setShowState((prev) => ({
      ...prev,
      histListShow: !showState.histListShow,
    }));
  }, [showState.histListShow]);

  return (
    <section className="businessSection">
      <div className="BusinessListBox">
        <BusinessStayList
          stayListShow={showState.stayListShow}
          showStayButton={showStayButton}
        />
        <BusinessHistList
          histListShow={showState.histListShow}
          showHistButton={showHistButton}
        />
      </div>
      <footer className="businessFooter">
        <ul className="footerUl">
          <li>
            <ul className="autoDeadLine">
              <li>대기 자동 마감 시간</li>
              <li>21 : 30</li>
              <li>해당 시간이 되면 자동으로 마감됩니다.</li>
            </ul>
          </li>
          <li>2</li>
          <li>3</li>
        </ul>
      </footer>
    </section>
  );
}

export default BusinessMainBody;
