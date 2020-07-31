import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import config from "../../config";
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
    console.log(localStorage.getItem("access_token"));
    fetch(`${config.IP}/order/cart-list`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cartList: res.Info,
          totalAmount: res.Info.pop(),
        });
      })
      .catch((e) => console.log("aa"));
  }

  handlePurchase = () => {
    this.props.history.push("/payment");
  };

  handleonChangeCout = (calMethod, changeCart) => {
    const { cartList } = this.state;

    const newCartList = cartList.map((cart) => {
      if (
        changeCart.item_name === cart.item_name &&
        changeCart.color === cart.color
      ) {
        let cartObj = {};
        switch (calMethod) {
          case "+":
            cartObj = {
              ...cart,
              quantity: cart.quantity + 1,
            };

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

  componentDidUpdate(prevProps, prepState) {
    if (prepState.cartList !== this.state.cartList) {
      const { cartList, totalAmount } = this.state;
      let totalAmountVal = 0;
      let discardVal = 0;
      for (let i = 0; i < cartList.length; i++) {
        let price = parseInt(cartList[i].item_price) * cartList[i].quantity;
        totalAmountVal = totalAmountVal + price;
        discardVal = discardVal + parseInt(cartList[i].discount_price);
      }

      totalAmountVal = totalAmountVal - discardVal;

      this.setState({
        totalAmount: {
          order_id: totalAmount.order_id,
          shipping_price: totalAmount.shipping_price,
          discount_price: discardVal,
          total_price: totalAmountVal,
        },
      });
    }
  }

  render() {
    const { cartList, totalAmount } = this.state;
    const { total_price } = totalAmount;

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
          <div className="selected-item-delivery-fee-box">
            <div className="selected-item-delivery-fee-text">배송비</div>
            <div className="selected-item-delivery-fee-price">무료</div>
          </div>
          <div className="selected-item-delivery-fee-box">
            <div className="selected-item-delivery-fee-text">할인 금액</div>
            <div className="selected-item-delivery-fee-price">
              {totalAmount
                ? `-${Number(totalAmount.discount_price).toLocaleString()}원`
                : 0}
            </div>
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
