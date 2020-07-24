import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  // title: "선물세트",
  // titleSub: "(면도용품+기프트 카드)",
  // price: "8,900원",
  render() {
    const { changeSideBarValid, data } = this.props;

    return (
      <div className="ProductNav">
        <div className="inner">
          <div className="left">
            <div className="product-name">
              {data.title}
              <span>({data.titleSub})</span>
            </div>
          </div>
          <div className="right">
            <div className="detail">상세 정보</div>
            <div className="review">후기(377){/*api 연결 필요*/}</div>
            <div className="price">
              <span>34,900</span>
              {data.price}
              {/*api 연결 필요*/}
            </div>
            <div className="buy-button">
              <button onClick={changeSideBarValid}>구매하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
