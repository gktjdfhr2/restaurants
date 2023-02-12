import React from 'react';
import { Link } from 'react-router-dom';
import storeImg from '../../../assets/parked-car.png';

function ReservationHistItems() {
  return (
    <>
      <div id="SignUpTitle">예약 내역</div>
      <div id="selectTagFlex">
        <button type="button" className="selectTag selected">
          이용 내역
        </button>
        <button type="button" className="selectTag">
          취소/노쇼
        </button>
      </div>

      <section className="histItems">
        <ul>
          <li>
            <Link to="./store" className="histItem">
              <img className="storeImg" src={storeImg} alt="가게이름" />
              <div className="storeInfo">
                <div className="storeInfoTitle">가게명</div>
                <div className="storeInfoReview">리뷰 별점</div>
                <div className="storeInfoState">상태</div>
                <button
                  type="button"
                  className="storeInfoCancle"
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
