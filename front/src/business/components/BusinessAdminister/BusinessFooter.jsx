import React from 'react';
import FooterLayout from '../../../components/Layouts/Footer';

function BusinessFooter() {
  return (
    <FooterLayout>
      <div className="footer-container">
        <div className="deadline-container">
          <div className="deadline-title">대기 자동 마감 시간</div>
          <div className="deadline-time">21 : 30</div>
          <div className="deadline-explain">
            해당 시간이 되면 자동으로 마감됩니다.
          </div>
        </div>
        <div className="footer-button-conatiner">
          <div className="deadline-button-container">
            <button type="button" className="deadline-button">
              대기 마감
            </button>
            <div>대기 마감</div>
          </div>
          <div className="stay-register-button-container">
            <button type="button" className="stay-register-button">
              대기 등록
            </button>
            <div>대기 등록</div>
          </div>
        </div>
      </div>
    </FooterLayout>
  );
}
export default BusinessFooter;
