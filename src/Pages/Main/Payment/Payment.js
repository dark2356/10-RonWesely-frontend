import React, { Component } from "react";
import MethodList from "./MethodList";
import CartBox from "./CartBox";
import Footer from "../../../Component/Footer/Footer";
import PaymentData from "./PaymentData";
import Config from "./config";
import PageTop from "../../PageTop/PageTop";
import "./Payment.scss";

class Payment extends Component {
  state = {
    active: true,
    cart: {
      Info: [],
    },
    totalAmount: {},
  };

  componentDidMount() {
    // IP 상시 확인
    fetch(Config.GETIP, {
      method: "GET",
      headers: {
        Authorization: Config.GET,
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

  donePayment = () => {
    const { totalAmount } = this.state;
    //ip 상시 확인
    fetch(Config.POSTIP, {
      method: "POST",
      headers: {
        Authorization: Config.POST,
      },
      body: JSON.stringify({
        order_id: totalAmount.order_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("access_token", res.access_token);
        alert("결제가 완료 됐습니다.");
        this.props.history.push("/main");
      });
  };

  paymentLight = () => {
    this.setState({
      active: false,
    });
  };

  goToMain = () => {
    this.props.history.push("/main");
  };

  render() {
    const { active, cart, totalAmount } = this.state;
    let totalPrice = totalAmount.total_price;
    const { paymentLight, donePayment, goToMain } = this;

    return (
      <div className="Payment">
        <PageTop />
        <div className="nav-logo">
          <div className="logo-wrapper">
            <img
              alt="logo"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
              className="logo"
              onClick={goToMain}
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
                {PaymentData.map((data, index) => (
                  <MethodList
                    key={index}
                    img={data.img}
                    text={data.text}
                    index={index}
                  />
                ))}
              </div>
              <div className="option-bottom">
                <button
                  onClick={donePayment}
                  onClickCapture={paymentLight}
                  className={`payment-button ${!active ? "active" : ""}`}
                >
                  <span className="payment-text">결제하기</span>
                </button>
              </div>
            </div>
          </div>
          <div className="center-dividebar"></div>
          <div className="right-wrapper">
            <div className="cart-box">
              {cart.Info.map((item, idx) => (
                <CartBox
                  key={idx}
                  item_name={item.item_name}
                  color={item.color}
                  price={item.price}
                  description={item.description}
                  quantity={item.quantity}
                  image_url={item.image_url}
                />
              ))}
              <div className="selected-item-price-div">
                <div className="price-box">
                  <div className="price-text">주문금액</div>
                  <div className="price-price">{`${Number(
                    totalPrice
                  ).toLocaleString()}원`}</div>
                </div>
                <div className="delivery-fee-box">
                  <div className="delivery-fee-text">배송비</div>
                  <div className="delivery-fee-price">무료</div>
                </div>
                <div className="total-price-box">
                  <div className="total-price-text">최종 결제 금액</div>
                  <div className="total-price-price">
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
