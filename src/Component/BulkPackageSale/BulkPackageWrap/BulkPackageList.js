import React, { Component } from "react";
import "./BulkPackageList.scss";

class BulkPackageList extends Component {
  render() {
    const { product, handleActive, index } = this.props;

    console.log("결과 :", product);
    return (
      <div className="BulkPackageList">
        <li
          className={
            product.active === true ? "option-item-active" : "option-item"
          }
        >
          <div
            className="item-text-wrapper"
            onClick={() => handleActive(product, index)}
          >
            <div className="flex-left">
              <div
                className={
                  product.active === true
                    ? "product-option-radio-active"
                    : "product-option-radio"
                }
              ></div>
              <span className="item-title">{product.ea} </span>
              <div className="discount-rate-wrapper">
                <span className="discount-rate">{product.discount}</span>
              </div>
            </div>
            <div className="flex-right">
              <span className="item-discount-price">{product.price}</span>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default BulkPackageList;

// option-item 리스트 테두리 (border:1px solid #0055b8;)
// product-option-radio 동그라미 (border: 7px solid #0055b8;)
