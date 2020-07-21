import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pw: "",
      displayactive: false,
      btnactive: false,
    };
  }

  // handlelogin = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.email,
  //       password: this.state.pw,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       localStorage.setItem("access_token", res.access_token);
  //       this.props.history.push("/");
  //     });
  // };
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
          className="Login-logo"
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
        />
        <div className="LoginContainer">
          <div className="LoginContents">
            <p>
              <strong className="font-bold font-size">
                로그인 및 회원가입
              </strong>
              <span className="font-bold-light font-size">을</span>
              <div className="font-bold-light font-size">시작합니다</div>
            </p>
            <div className="kakaoSignContainer signContainer">
              <img
                className="loginIcon"
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/signIn/signInKakao.png"
              />
              <div className="KakaoText font-bold-light">
                카카오로 <span className="font-bold">간편시작</span>
              </div>
              <div className="iconRight" />
            </div>
            <div
              className="emailSignContainer signContainer"
              onClick={this.displayhandler}
            >
              <img
                className="loginIcon"
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/signIn/signInEmail.png"
              />
              <div className="signText font-bold-light">이메일로 시작하기</div>
              <img
                className={displayactive ? "iconRight" : "icon-transform"}
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/arrowDownPurple.svg"
              />
            </div>
          </div>
          <div className={displayactive ? "email-box" : "email-box-visible"}>
            <div
              className={emails ? "div_input-email_blue" : "div_input-email"}
            >
              <input
                type="text"
                placeholder="이메일"
                className="input-email"
                onChange={this.EmailInput}
              />
              <img
                className={emails ? "Check-visible" : "Check"}
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg"
              />
            </div>
            <div
              className={
                !this.state.btnactive ? "div_input-pw_visible" : "div_input-pw"
              }
            >
              <input
                type="text"
                placeholder="비밀번호 (6자 이상)"
                className="input-pw"
                onChange={this.PwInput}
              />
              <img
                className={pwd ? "Check-visible" : "Check"}
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg"
              />
            </div>
            <button
              className={emails ? "div_btn-Next_blue" : "div_btn-Next"}
              onClick={this.btnhandler}
            >
              <p className="btn-Next">다음</p>
            </button>
            <div className="fg-email">이메일 주소가 기억나지 않아요 </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
