import React from 'react';
import PropritorStayList from '../components/PropritorStayList';

function ProprietorMainBody() {
  return (
    <section className="proprietorSection">
      <div>
        <div>대기 목록</div>
        <PropritorStayList />
        <PropritorStayList />
      </div>
    </section>
  );
}

export default ProprietorMainBody;
