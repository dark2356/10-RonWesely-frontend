import React, { Component } from "react";
import Nav from "../../../Component/Nav/Nav";
import Deliverylist from "../../../Component/Mypage/Deliverylist";
import Subscription from "../../../Component/Mypage/Subscription";
import Footer from "../../../Component/Footer/Footer";
import config from "../../../config";
import "./Mypage.scss";

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      btnvalid: false,
    };
  }
  componentDidMount() {
    let token = localStorage.getItem("access_token");
    console.log(token);
    fetch(`${config.IP}/user/MyPage`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ email: res.email, name: res.name });
      });
  }

  subscriptionChangeHandler = () => {
    this.setState({ btnvalid: true });
  };
  diliveryChangeHandler = () => {
    this.setState({ btnvalid: false });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="Mypage">
          <div className="flex-container">
            <div className="sidebar">
              <div className="main-user-info-box">
                <div className="main-user-info-text">
                  <p>안녕하세요</p>
                  <strong className="bold">{this.state.name}</strong>님
                </div>
                <div className="user-email">{this.state.email}</div>
                <button className="account-edit-btn">회원 정보 수정</button>
              </div>
              <div
                className="my-page-main-menu-title"
                name="btnvalid3"
                onClick={this.subscriptionChangeHandler}
              >
                와이즐리 클럽
              </div>
              <div
                className="my-page-main-menu-title"
                name="btnvalid2"
                onClick={this.diliveryChangeHandler}
              >
                주문조회
              </div>
              <div className="sign-out">로그아웃</div>
            </div>
            {this.state.btnvalid ? (
              <Subscription />
            ) : (
              <Deliverylist name={this.state.name} />
            )}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Mypage;
