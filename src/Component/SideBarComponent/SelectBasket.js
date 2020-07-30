import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SelectCart from "./SelectCart";
import PageTop from "../../Pages/PageTop/PageTop";

import "./SelectBasket.scss";

class SelectBasket extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [
        // {
        //   id: 1,
        //   item_name: "선물세트",
        //   color: "슬레이트 그레이",
        //   price: "29800.00",
        //   description: "면도용품 + 기프트 카드",
        //   quantity: 1,
        // },
        // {
        //   id: 2,
        //   item_name: "면도기 세트",
        //   color: "슬레이트 그레이",
        //   price: "8900.00",
        //   description: "면도기 + 날 2입",
        //   quantity: 4,
        // },
        // {
        //   id: 3,
        //   item_name: "면도기 세트",
        //   color: "미드나이트 네이비",
        //   price: "8900.00",
        //   description: "면도기 + 날 2입",
        //   quantity: 3,
        // },
        // {
        //   id: 4,
        //   item_name: "면도기 세트",
        //   color: "사파이어 블루",
        //   price: "8900.00",
        //   description: "면도기 + 날 2입",
        //   quantity: 3,
        // },
      ],
      totalAmount: {},
    };
  }

  componentDidMount() {
    console.log("실행");
    sessionStorage.setItem(
      "access_tokken",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.DbCRvyvj5ai7zxm8dwLI_zb-CNNI5jvEA9j43cWkovc"
    );

    const token = sessionStorage.getItem("access_tokken");

    console.log(token);

    fetch("http://10.58.4.52:8000/order/cart-list", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          cartList: res.Info,
          totalAmount: res.Info.pop(),
        });
      });
  }

  handlePurchase = () => {
    this.props.history.push("/payment");
  };

  handleonChangeCout = (calMethod, changeCart) => {
    console.log(changeCart);
    const { cartList } = this.state;

    const newCartList = cartList.map((cart) => {
      if (
        changeCart.item_name === cart.item_name &&
        changeCart.color === cart.color
      ) {
        let cartObj = {};
        switch (calMethod) {
          case "+":
            cartObj = { ...cart, quantity: cart.quantity + 1 };
            return cartObj;

          case "-":
            if (cart.quantity !== 1) {
              cartObj = { ...cart, quantity: cart.quantity - 1 };
            } else {
              cartObj = cart;
            }
            return cartObj;
          default:
            return cart;
        }
      } else {
        return cart;
      }
    });

    this.setState({
      cartList: newCartList,
    });
  };

  render() {
    const { cartList, totalAmount } = this.state;
    const { total_price } = totalAmount;

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
          <div key={cart.item_id}>
            <SelectCart
              cart={cart}
              handleonChangeCout={this.handleonChangeCout}
            />
          </div>
        ))}
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
            <div className="selected-item-total-price-text">최종 결제 금액</div>
            <div className="selected-item-total-price-price">
              {`${Number(total_price).toLocaleString()}원`}
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={this.handlePurchase}>구매하기</button>
        </div>
      </div>
    );
  }
}

export default withRouter(SelectBasket);
