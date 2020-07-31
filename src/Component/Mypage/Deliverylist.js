import React, { Component } from "react";
import Deliverycartbox from "./Deliverycartbox";
import Addressinfo from "./AddressInfo";
import config from "../../config";
import "./Deliverylist.scss";

class Deliverylist extends Component {
  state = {
    cart: {
      Info: [],
    },
    totalAmount: [],
  };
  componentDidMount() {
    fetch(`${config.IP}/order/cart-list`, {
      method: "GET",
      headers: {
        Authorization: config.GET,
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
  render() {
    const { cart, totalAmount } = this.state;
    let totalPrice = totalAmount.total_price;
    return (
      <div className="delivery">
        <div className="delivery-box">
          <div className="box-haeder">
            <span className="Deliverytext">배송완료</span>
            <span className="Deliverydate">8월 31일</span>
          </div>
          <div className="address-info">
            <div className="address-info-title">
              <div className="title-text">배송지정보</div>
              <button className="address-info-btn">배송조회</button>
            </div>
            <Addressinfo />
            <div className="order-list">
              <div className="order-info-title">
                <div className="title-left">주문상품정보</div>
                <div>
                  <button className="review-btn">후기 작성</button>
                  <button className="change-btn">교환 / 반품 신청</button>
                </div>
              </div>
              <div className="cart-box">
                {cart.Info.map((item) => (
                  <Deliverycartbox
                    item_name={item.item_name}
                    color={item.color}
                    price={item.price}
                    total={item.totalprice}
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
                    <div className="selected-item-delivery-fee-text">
                      배송비
                    </div>
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
        </div>
      </div>
    );
  }
}

export default Deliverylist;
