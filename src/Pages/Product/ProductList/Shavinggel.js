import React, { Component } from "react";
import "./Shavinggel.scss";
class Shavinggel extends Component {
  constructor() {
    super();
    this.state = {};
  }
  state;
  render() {
    console.log(this.state);
    return (
      <div className="Shavinggel">
        <div className="shaving-main-container">
          <div className="shaving-content-container">
            <div className="main-title">
              <p className="bold">자극없이 부드러운</p>
              <p>면도를 원한다면</p>
            </div>
            <p className="main-title-paragraph">
              바르고 10초만 기다리면 면도가 부드러워져요
            </p>
            <div>
              <label className="product-radio-container">
                <input type="radio" name="product" value="150" />
                <span className="product-radio-text">
                  스탠다드 150ml | 4,500원
                </span>
              </label>
              <label className="product-radio-container">
                <input type="radio" name="product" value="75" />
                <span className="product-radio-text">
                  여행용 75ml | 2,900원
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="hope-container">
          <div className="hope-text-container">
            <p className="hope-main-title">
              더 많은 사람들이
              <br />
              <span className="bold">자극적인 면도</span>
              에서 벗어날 수 있도록
            </p>
            <p className="hope-paragraph">
              쉐이빙젤은 부드러운 면도를 위한 필수품입니다.
              <br />
              수염을 부드럽게 불려주는 보습제이자, 피부 자극을 줄여주는 윤활제로
              탁월한 성능을 보여주죠.
              <br />
              비누나 클렌징 폼과는 차원이 다르게 부드러운 면도를 느낄 수
              있습니다.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Shavinggel;
