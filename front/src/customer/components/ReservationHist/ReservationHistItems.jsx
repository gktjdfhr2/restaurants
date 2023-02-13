import React from 'react';
import { Link } from 'react-router-dom';
import storeImg from '../../../assets/parked-car.png';

function ReservationHistItems() {
  return (
    <>
      <div id="signup-title">예약 내역</div>
      <div id="history-menu-type-container">
        <button type="button" className="history-menu-type menu-selected">
          이용 내역
        </button>
        <button type="button" className="history-menu-type">
          취소/노쇼
        </button>
      </div>

      <section className="history-store-container">
        <ul>
          <li>
            <Link to="./store" className="history-store-information-container">
              <img className="store-image" src={storeImg} alt="가게이름" />
              <div className="store-more-information">
                <div className="store-more-information-title">가게명</div>
                <div className="store-more-information-reviews">리뷰 별점</div>
                <div className="store-more-information-reservation-state">
                  상태
                </div>
                <button
                  type="button"
                  className="store-more-information-reservation-cancle"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();

                    alert('예약취소');
                  }}
                >
                  예약 취소하기
                </button>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
export default ReservationHistItems;
