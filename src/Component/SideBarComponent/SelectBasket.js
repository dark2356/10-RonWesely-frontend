import React, { Component } from "react";
import SelectCart from "./SelectCart";
import PageTop from "../../Pages/PageTop/PageTop";

import "./SelectBasket.scss";

class SelectBasket extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
      totalAmount: {},
    };
  }

  componentDidMount() {
    console.log("실행");
    sessionStorage.setItem(
      "access_tokken",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nn0.HokKsyIB2_KpzLf0Q2A8n0zCII23LtIaNyfvCGNdXvk"
    );

    const token = localStorage.getItem("access_tokken");

    fetch("http://10.58.4.52:8000/order/cart-list", {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nn0.HokKsyIB2_KpzLf0Q2A8n0zCII23LtIaNyfvCGNdXvk",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cartList: res.Info,
          totalAmount: res.Info.pop(),
        });
      });
  }

  render() {
    const { cartList, totalAmount } = this.state;
    const {
      order_id,
      shipping_price,
      discount_price,
      total_price,
    } = totalAmount;

    console.log(
      cartList,
      totalAmount.order_id,
      totalAmount.shipping_price,
      totalAmount.discount_price
    );
    return (
      <div className="SelectBasket">
        <PageTop />
        {cartList.map((cart) => (
          <div key={cart.item_name}>
            <SelectCart cart={cart} />
            <div className="selected-item-price-div">
              <div className="selected-item-price-box">
                <div className="selected-item-price-text">주문금액</div>
                <div className="selected-item-price-price">{`${Number(
                  total_price
                ).toLocaleString()}원`}</div>
              </div>
              <div className="selected-item-delivery-fee-box">
                <div className="selected-item-delivery-fee-text">배송비</div>
                <div className="selected-item-delivery-fee-price">무료</div>
              </div>
              <div className="selected-item-total-price-box">
                <div className="selected-item-total-price-text">
                  최종 결제 금액
                </div>
                <div className="selected-item-total-price-price">
                  {`${Number(total_price).toLocaleString()}원`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SelectBasket;
