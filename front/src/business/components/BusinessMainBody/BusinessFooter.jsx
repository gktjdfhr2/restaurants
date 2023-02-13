import React from 'react';
import FooterLayout from '../../../components/Layouts/Footer';

function BusinessFooter() {
  return (
    <FooterLayout>
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
    </FooterLayout>
  );
}
export default BusinessFooter;
