import React, { Component } from "react";
import "./NavSub.scss";

class NavSub extends Component {
  render() {
    const { subNavActive } = this.props;
    console.log();
    return (
      <div className="NavSub">
        <ul role="menu" className="product-sub-nav">
          <div className="sub-nav-wrapper">
            <li role="menuitem" className="sub-nav-item">
              <div role="menuitem" tabIndex="1" className="nav-item">
                <img
                  alt="선물세트"
                  className="gift-set"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/gift_set.png"
                />
                <span className="item-name">선물세트</span>
              </div>
            </li>
            <li role="menuitem" className="sub-nav-item">
              <div role="menuitem" tabIndex="1" className="nav-item">
                <img
                  alt="면도기세트"
                  className="others"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/starter_navy.png"
                />
                <span className="item-name">면도기세트</span>
              </div>
            </li>
            <li role="menuitem" className="sub-nav-item">
              <div role="menuitem" tabIndex="1" className="nav-item">
                <img
                  alt="리필 면도날"
                  className="others"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/refill_blade.png"
                />
                <span className="item-name">리필 면도날</span>
              </div>
            </li>
            <li role="menuitem" className="sub-nav-item">
              <div role="menuitem" tabIndex="1" className="nav-item">
                <img
                  alt="쉐이빙 젤"
                  className="others"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/shaving_gel_150.png"
                />
                <span className="item-name">쉐이빙 젤</span>
              </div>
            </li>
            <li role="menuitem" className="sub-nav-item">
              <div role="menuitem" tabIndex="1" className="nav-item">
                <img
                  alt="애프터쉐이브"
                  className="others"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/after_shaving_gel_oily_60.png"
                />
                <span className="item-name">애프터쉐이브</span>
              </div>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavSub;
