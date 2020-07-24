import React, { Component } from "react";
import "./BulkPackageWrap.scss";

class BulkPackageList extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="BulkPackageList">
        <li className="option-item">
          <div className="item-text-wrapper">
            <div className="flex-left">
              <div className="product-option-radio"></div>
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
