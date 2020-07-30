import React, { Component } from "react";
import "./SelectCart.scss";

class SelectCart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="SelectCart">
        <div className="selected-item-box-wrapper">
          <div className="item-image-box">
            <img
              alt="goodsImg"
              className="selected-image"
              src={cart.image_url}
            />
          </div>
          <div className="item-info-box">
            <div className="item-info-left">
              <div className="item-info-title">
                {`${cart.item_name}-`}
                <span className="item-info-quantity">
                  {`${cart.quantity}개`}
                </span>
              </div>
              <div className="item-info-description">
                <span className="item-info-option-value-navy">
                  {cart.color}
                </span>
                <span className="inserted">{cart.description}</span>{" "}
              </div>
              <div className="item-info-count">
                <button>+</button>
                <div className="count-value">
                  <p>1</p>
                </div>
                <button>-</button>
              </div>
            </div>
            <div className="item-info-price">
              {`${Number(cart.price).toLocaleString()}원`}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectCart;
