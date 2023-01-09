import React, { useState } from 'react';
import Timer from './Timer';
import './MainEvent.scss';
export default function MainEvent() {
  const [timer, setTimer] = useState(24);

  const duration = () => {
    setTimer(timer * 24 * 60 * 60 * 1000);
  };
  console.log(timer);
  return (
    <div className="collection">
      <div className="eventBox">
        <div className="todayDiscount">
          <div className="todayDiscountTitle">
            <span>오늘만 이 가격</span>
            <Timer duration={duration} />
          </div>
          <div className="discountPrice">
            <p>시그니처 콩고기 돈까스 세트</p>
            <p>20000원</p>
          </div>
        </div>
        <div className="attendanceStory">
          <div className="checkAttendence">
            <div className="attendencePeriodBox">
              <span className="month">1월 출석체크</span>
              <span className="period"> 기간 적기</span>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD1m0kMFcRKXr7JYjAGwM5eToVDrOXQvaUNQ&usqp=CAU" />
          </div>
          <div className="brandStory">
            <div className="storyFont">
              <span>돼지테리언</span>
              <span>돼지테리언스토리</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
