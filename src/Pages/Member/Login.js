import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      id: "1",
      username: "Bret",
      displayactive: false,
      btnactive: false,
    };
  }

  handlelogin = (e) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        pw: this.state.pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("access_token", res.access_token);
        this.props.history.push("/");
        console.log(localStorage);
      });
  };
  displayhandler = () => {
    this.setState({
      displayactive: !this.state.displayactive,
    });
  };
  btnhandler = () => {
    this.setState({
      btnactive: !this.state.btnactive,
    });
  };
  EmailInput = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  PwInput = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };
  render() {
    const { email, pw } = this.state;
    const emails =
      email.includes("@") && email.includes(".") && email.length >= 10;
    const pwd = pw.length >= 6;
    const displayactive = !this.state.displayactive;
    return (
      <div className="Login">
        <img
          className="img_login-logo"
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
        />
        <div className="div_login-container">
          <div className="div_login-contents">
            <p>
              <strong className="div_font-bold div_font-size">
                로그인 및 회원가입
              </strong>
              <span className="div_font-bold-light div_font-size">을</span>
              <div className="div_font-bold-light div_font-size">
                시작합니다
              </div>
            </p>
            <div className="div_kakaosign-container div_sign-container">
              <img
                className="div_login-icon"
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/signIn/signInKakao.png"
              />
              <div className="div_kakao-text div_font-bold-light">
                카카오로 <span className="div_font-bold">간편시작</span>
              </div>
              <div className="div_icon-right" />
            </div>
            <div
              className="div_emailSign-container div_sign-container"
              onClick={this.displayhandler}
            >
              <img
                className="div_login-icon"
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/signIn/signInEmail.png"
              />
              <div className="div_signText div_font-bold-light">
                이메일로 시작하기
              </div>
              <img
                className={
                  displayactive ? "div_icon-right" : "div_icon-transform"
                }
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/arrowDownPurple.svg"
              />
            </div>
          </div>
          <div
            className={
              displayactive ? "div_email-box" : "div_email-box-visible"
            }
          >
            <div
              className={
                emails
                  ? "div_input-email-container-blue"
                  : "div_input-email-container"
              }
            >
              <input
                type="text"
                placeholder="이메일"
                className="div_input_email"
                onChange={this.EmailInput}
              />
              <img
                className={emails ? "img_check-visible" : "img_check"}
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg"
              />
            </div>
            <div
              className={
                !this.state.btnactive
                  ? "div_input-pw-container-visible"
                  : "div_input-pw-container"
              }
            >
              <input
                type="text"
                placeholder="비밀번호 (6자 이상)"
                className="div_input-pw"
                onChange={this.PwInput}
              />
              <img
                className={pwd ? "img_check-visible" : "img_check"}
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg"
              />
            </div>
            <button
              className={
                emails
                  ? "div_btn-Next_container-blue"
                  : "div_btn-Next-container"
              }
              onClick={this.btnhandler}
              onClick={this.handlelogin}
            >
              <p className="div_btn-Next">다음</p>
            </button>
            <div className="div_fg-email">이메일 주소가 기억나지 않아요 </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
