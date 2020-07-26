import React, { Component } from "react";
import Footer from "../../Component/Footer/Footer";
import Nav from "./Nav/Nav";
import FreeItem from "./FreeItem/FreeItem";
import "./Main.scss";

class Main extends Component {
  state = {
    freeItem: [
      {
        key: 1,
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/subscription_free_icon_1.svg",
        text: "부담없는 가격의 \n 3-STEP 프리미엄 면도용품",
      },
      {
        key: 2,
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/subscription_free_icon_2.svg",
        text:
          "건강한 주기에 맞춰\n 교체 알림을 드리고 배송해드려요.\n 배송비는 언제나무료",
      },
      {
        key: 3,
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/subscription_free_icon_3.svg",
        text: "언제나 변경,해지할 수 있어요.\n 카톡 하나만 보내면 끝!",
      },
    ],
  };

  render() {
    const { freeItem } = this.state;
    return (
      <div className="Main">
        <Nav />
        <div>
          <div className="subscription-main">
            <h2 className="subscription-main-title">
              <strong>부담없이 시작해보세요.</strong>
              <br />첫 구독시 면도기 무료
            </h2>
            <span className="subscription-main-sub-title">
              면도기는 써봐야 아니까. 배송비는 언제나 무료에요.
            </span>
            <div className="btn-start">
              <button className="start">시작하기</button>
            </div>
          </div>
          <div className="free">
            <h2 className="free-title">
              낡은 면도날과 자극적인 면도로부터
              <br />
              <strong>자유로워지세요</strong>
            </h2>
            <div className="free-item-group">
              {freeItem.map((data) => (
                <FreeItem img={data.img} text={data.text} />
              ))}
            </div>
          </div>
          <div className="smooth">
            <h2 className="smooth-title">
              <strong>부드럽고 정교한 면도</strong>
              <br />
              독일산 5중 면도날
            </h2>
            <img
              alt="shave"
              className="smooth-image"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/razor_navy.png"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
