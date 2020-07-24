import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userid: "",
      password: "",
      phone_no: "",
      birthday: "",
      name: "",
      gender: "",
    };
  }

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

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="Signup">
        <img
          className="signup-logo"
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
        />
        <div className="signup-container">
          <p className="font-size">처음이시군요</p>
          <p className="font-size-bold">가입을 진행합니다.</p>
          <form>
            <p className="input_header">아이디</p>
            <div className="id-container">
              <input
                name="userid"
                className="input_id"
                type="text"
                placeholder="이메일"
                onChange={this.inputHandler}
              />
              <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg" />
            </div>
            <p className="input_header">비밀번호</p>
            <div className="id-container">
              <input
                name="password"
                className="input_id"
                type="text"
                placeholder="비밀번호(6자이상)"
                onChange={this.inputHandler}
              />
              <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg" />
            </div>
            <span
              class={
                this.state.password.length >= 1 &&
                this.state.password.length <= 6
                  ? "notice-msg-visible"
                  : "notice-msg-none"
              }
            >
              6자리 이상의 비밀번호를 설정해주세요
            </span>
            <p className="input_header">휴대폰번호</p>
            <div className="id-container">
              <input
                name="phone_no"
                className="input_id"
                type="text"
                placeholder="휴대폰 번호('-'제외)"
                onChange={this.inputHandler}
              />
              <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg" />
            </div>
            <span
              class={
                this.state.phone_no.length >= 1 &&
                this.state.phone_no.length <= 10
                  ? "notice-msg-visible"
                  : "notice-msg-none"
              }
            >
              휴대폰 번호를 올바르게 입력해주세요
            </span>
            <p className="input_header">생년월일 6자리</p>
            <div className="id-container">
              <input
                name="birthday"
                className="input_id"
                type="text"
                placeholder="예: 930422"
                onChange={this.inputHandler}
              />
              <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg" />
            </div>
            <span
              class={
                this.state.birthday.length >= 1 &&
                this.state.birthday.length <= 6
                  ? "notice-msg-visible"
                  : "notice-msg-none"
              }
            >
              생년월일을 올바르게 입력해주세요.
            </span>
            <p className="input_header">이름</p>
            <div className="id-container">
              <input
                name="name"
                className="input_id"
                type="text"
                placeholder="이름"
                onChange={this.inputHandler}
              />
              <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/checkBlue.svg" />
            </div>
            <span
              class={
                this.state.name.length === 1
                  ? "notice-msg-visible"
                  : "notice-msg-none"
              }
            >
              나이를 올바르게 입력해주세요.
            </span>
            <p className="input_header">성별</p>
            <div className="gender-container">
              <div class="gender-male-text">
                <input
                  type="radio"
                  name="gender"
                  onChange={this.inputHandler}
                  checked
                />
                <label for="male">남성</label>
              </div>
              <div class="gender-female-text">
                <input
                  type="radio"
                  name="gender"
                  onChange={this.inputHandler}
                />
                <label for="female">여성</label>
              </div>
            </div>
            <div>
              <button
                onClick={this.handlelogin}
                className={
                  this.state.birthday.length >= 6 &&
                  this.state.phone_no.length >= 10 &&
                  this.state.password.length >= 6
                    ? "signup-btn-blue"
                    : "signup-btn"
                }
              >
                <p className="signup-btn-text">가입완료</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
