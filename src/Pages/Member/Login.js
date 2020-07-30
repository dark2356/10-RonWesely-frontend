import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userid: "",
      password: "",
      displayActive: false,
    };
  }

  goToSign = () => {
    this.props.history.push("/signup");
  };

  handlelogin = (e) => {
    fetch("http://10.58.4.52:8000/users/SignIn", {
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
      displayActive: !this.state.displayActive,
    });
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { userid, password } = this.state;

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
                  this.state.displayActive ? "icon-right" : "icon-transform"
                }
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/arrowDownPurple.svg"
              />
            </div>
          </div>
          <div
            className={
              this.state.displayActive ? "email-box-visible" : "email-box-none"
            }
          >
            <div
              className={
                userid.includes("@") &&
                userid.includes(".co") &&
                userid.length >= 10
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
                className={
                  userid.includes("@") &&
                  userid.includes(".co") &&
                  userid.length >= 10
                    ? "check-img-visible"
                    : "check-img-none"
                }
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg"
              />
            </div>
            <div
              className={
                password.length >= 6
                  ? "pw-input-container-blue"
                  : "pw-input-container"
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
                className={
                  password.length >= 6 ? "check-img-visible" : "check-img-none"
                }
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg"
              />
            </div>
            <button
              className={
                userid.includes("@") &&
                userid.includes(".co") &&
                userid.length >= 10 &&
                password.length >= 6
                  ? "login-btn-container-blue"
                  : "login-btn-container"
              }
              onClick={this.handlelogin}
            >
              <p className="login-btn-text">로그인</p>
            </button>
            <div className="go-Signup" onClick={this.goToSign}>
              회원가입
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
