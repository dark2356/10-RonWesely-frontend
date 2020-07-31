import React, { Component } from "react";
import "./Subscription.scss";
class Subscription extends Component {
  render() {
    return (
      <div className="Subscription">
        <div className="menu-box">
          <div className="title-text">
            <p>시간과 돈을 아끼는 </p>
            <p>현명한 선택</p>
          </div>
          <div className="subscription-contents">
            <div className="contents-flex-box">
              <div className="contents-box">
                <img
                  className="contents-img"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/myPageMainEmpty1.svg"
                />
                <div className="contents-img-text">
                  <span className="bold">결제 3일전</span>에<p>알려드려요</p>
                </div>
              </div>
              <div className="contents-box">
                <img
                  className="contents-img"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/myPageMainEmpty3.svg"
                />
                <div className="contents-img-text">
                  <span className="bold">면도날 교체 시기</span>에
                  <p>문자로 알려드려요.</p>
                </div>
              </div>
              <div className="contents-box">
                <img
                  className="contents-img"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/myPageMainEmpty2.svg"
                />
                <div className="contents-img-text">
                  언제나 <span className="bold">10% 할인,</span>
                  <p className="bold">배송비 무료</p>
                </div>
              </div>
            </div>
          </div>
          <div className="subscription-btn-box">
            <button className="subscription-btn">더 알아보기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscription;
