import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userid: "",
      password: "",
      displayactive: false,
    };
  }
  goToSign = () => {
    this.props.history.push("/signup");
  };

  handlelogin = (e) => {
    fetch("http://10.58.6.255:8000/users/SignIn", {
      method: "POST",
      body: JSON.stringify({
        userid: this.state.userid,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.access_token);
        this.props.history.push("/main");
      });
  };
  displayhandler = () => {
    this.setState({
      displayactive: !this.state.displayactive,
    });
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { userid, password } = this.state;
    const emailvalid =
      userid.includes("@") && userid.includes(".co") && userid.length >= 10;
    const pwdvalid = password.length >= 6;
    return (
      <div className="Login">
        <img
          className="login-logo"
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
        />
        <div className="login-container">
          <div className="login-contents">
            <p>
              <strong className="font-bold font-size-46">
                로그인 및 회원가입
              </strong>
              <span className="font-bold-light font-size-46">을</span>
              <div className="font-bold-light font-size-46">시작합니다</div>
            </p>
            <div className="kaka-start-btn start-btn">
              <img
                className="login-icon"
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/signIn/signInKakao.png"
              />
              <div className="kakao-start-btn-text font-bold-light">
                카카오로 <span className="font-bold">간편시작</span>
              </div>
              <div className="icon-right" />
            </div>
            <div
              className="email-start-btn start-btn"
              onClick={this.displayhandler}
            >
              <img
                className="login-icon"
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/signIn/signInEmail.png"
              />
              <div className="email-start-btn-text font-bold-light">
                이메일로 시작하기
              </div>
              <img
                className={
                  this.state.displayactive ? "icon-right" : "icon-transform"
                }
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/arrowDownPurple.svg"
              />
            </div>
          </div>
          <div
            className={
              this.state.displayactive ? "email-box-none" : "email-box-visible"
            }
          >
            <div
              className={
                emailvalid
                  ? "email-input-container-blue"
                  : "email-input-container"
              }
            >
              <input
                type="text"
                placeholder="이메일"
                className="email-input"
                name="userid"
                onChange={this.inputHandler}
              />
              <img
                className={emailvalid ? "check-img-visible" : "check-img-none"}
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg"
              />
            </div>
            <div
              className={
                pwdvalid ? "pw-input-container-blue" : "pw-input-container"
              }
            >
              <input
                type="text"
                placeholder="비밀번호 (6자 이상)"
                className="pw-input"
                name="password"
                onChange={this.inputHandler}
              />
              <img
                className={pwdvalid ? "check-img-visible" : "check-img-none"}
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg"
              />
            </div>
            <button
              className={
                emailvalid && pwdvalid
                  ? "login-btn-container-blue"
                  : "login-btn-container"
              }
              onClick={this.handlelogin}
            >
              <p className="login-btn-text">로그인</p>
            </button>
            <div className="goto-Signup" onClick={this.goToSign}>
              회원가입
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
