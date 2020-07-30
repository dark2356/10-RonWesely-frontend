import React, { Component } from "react";
import MethodList from "./MethodList";
import CartBox from "./CartBox";
import Footer from "../../../Component/Footer/Footer";
import "./Payment.scss";

class Payment extends Component {
  state = {
    id: "",
    light: true,
    cart: {
      Info: [],
    },
    totalAmount: {},

    method: [
      {
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/kakaoPay.svg",
        text: "카카오페이",
        index: "1",
      },
      {
        img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/card.svg",
        text: "신용/체크카드",
        index: "2",
      },
      {
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/accountPay.svg",
        text: "무통장 입금/가상 계좌",
        index: "3",
      },
      {
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/cellphonePay.svg",
        text: "휴대폰 소액결제",
        index: "4",
      },
      {
        img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/payco.svg",
        text: "페이코",
        index: "5",
      },
    ],
  };

  componentDidMount() {
    // let token = localStorage.getItem("access-token");
    fetch("http://10.58.4.52:8000/order/cart-list", {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.kQ_f8bwKpIAuexiG9yCcdMc1SY_uKfcJCwxiRpI6GWU",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          cart: res,
          totalAmount: res.Info.pop(),
        });
      });
  }

  // donePayment = () => {
  //   fetch("http://10.58.4.120:8000/user/SignIn", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: this.state.id,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       localStorage.setItem("access_token", res.access_token);
  //       this.props.history.push("/mypage");
  //     });
  // };

  paymentLight = () => {
    console.log("index number:", this.state.index);
    this.setState({
      light: false,
    });
  };

  render() {
    const { light, cart, method, totalAmount } = this.state;
    let totalPrice = totalAmount.total_price;
    const { paymentLight, donePayment } = this;

    return (
      <div className="Payment">
        <div className="nav-logo">
          <div className="logo-wrapper">
            <img
              alt="logo"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
              className="logo"
            />
          </div>
        </div>
        <div className="option-wrapper">
          <div className="option-list-wrapper">
            <div className="option-header">
              <div className="user-info">
                <div className="first-delivery-info">
                  이병훈 (010-1234-5678)
                </div>
                <div className="second-delivery-info">경기 용인시 기흥구</div>
              </div>
              <div className="info-modify">{"수정 >"}</div>
            </div>
            <div className="option-content">
              <div className="option-title">
                <p>
                  <strong className="title-regular">결제 수단</strong>
                  <span className="title-light">을</span>
                </p>
                <p className="title-light">선택해주세요</p>
              </div>
              <div className="option-list-box" onClick={paymentLight}>
                {method.map((data, index) => (
                  <MethodList
                    light={this.state.light}
                    img={data.img}
                    text={data.text}
                    index={index.index}
                  />
                ))}
              </div>
              <div className="option-bottom">
                <button
                  onClick={donePayment}
                  className={
                    light === true ? "payment-button" : "payment-button-light "
                  }
                >
                  <span className="payment-text">결제하기</span>
                </button>
              </div>
            </div>
          </div>
          <div className="center-dividebar"></div>
          <div className="right-wrapper">
            <div className="cart-box">
              {cart.Info.map((item) => (
                <CartBox
                  item_name={item.item_name}
                  color={item.color}
                  price={item.price}
                  description={item.description}
                  quantity={item.quantity}
                  image_url={item.image_url}
                />
              ))}
              <div className="selected-item-price-div">
                <div className="selected-item-price-box">
                  <div className="selected-item-price-text">주문금액</div>
                  <div className="selected-item-price-price">{`${Number(
                    totalPrice
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
                    {`${Number(totalPrice).toLocaleString()}원`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Payment;
