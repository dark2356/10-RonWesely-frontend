import React, { Component } from "react";
import "./Deliverycartbox.scss";

class DeliveryCartBox extends Component {
  render() {
    const {
      item_name,
      color,
      price,
      description,
      quantity,
      image_url,
      totalprice,
    } = this.props;

    return (
      <div className="CartBox">
        <div className="selected-item-box-wrapper">
          <div className="item-image-box">
            <img alt="goodsImg" className="selected-image" src={image_url} />
          </div>
          <div className="item-info-box">
            <div className="item-info-left">
              <div className="item-info-title">
                {`${item_name}-`}
                <span className="item-info-quantity"> {`${quantity}개`}</span>
              </div>
              <div className="item-info-description">
                <span className="item-info-option-value-navy">{color}</span>
                <span className="inserted">{description}</span>
              </div>
            </div>
            <div className="item-info-price">{`${Number(
              price
            ).toLocaleString()}원`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeliveryCartBox;
