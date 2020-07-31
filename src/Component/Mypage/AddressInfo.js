import React, { Component } from "react";
import "./Addressinfo.scss";

class AddressInfo extends Component {
  render() {
    return (
      <div className="address-info-content">
        <div className="info-content">
          <div className="info-left info-left-name">받는사람</div>
          <div className="info-right">이윤식</div>
        </div>
        <div className="info-content">
          <div className="info-left info-left-phone">연락처</div>
          <div className="info-right">010-1234-5678</div>
        </div>
        <div className="info-content">
          <div className="info-left info-left-address">주소</div>
          <div className="info-right">위워크 선릉점</div>
        </div>
        <div className="info-content info-left-request">
          <div className="info-left">배송요청사항</div>
        </div>
      </div>
    );
  }
}

export default AddressInfo;
