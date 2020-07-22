import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="ProductNav">
        <div className="inner">
          <div className="left">
            <div className="product-name">
              선물세트<span>(면도용품+기프트 카드)</span>
            </div>
          </div>
          <div className="right">
            <div className="detail">상세 정보</div>
            <div className="review">후기(377){/*api 연결 필요*/}</div>
            <div className="price">
              <span>34,900</span>
              29,800원
              {/*api 연결 필요*/}
            </div>
            <div className="buy-button">
              <button>구매하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
