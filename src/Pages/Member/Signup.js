import React, { Component } from "react";
import PageTop from "../PageTop/PageTop";
import config from "../../config";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      phone_number: "",
      birthday: "",
      name: "",
      gender_type: ["male", "female"],
    };
  }

  handleSignup = (e) => {
    fetch(`${config.IP}/user/SignUp`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        phone_number: this.state.phone_number,
        birthday: this.state.birthday,
        name: this.state.name,
        gender_type: this.state.gender_type,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("access_token", res.token);
        this.props.history.push("/login");
      });
  };

  inputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  goToMain = () => {
    this.props.history.push("/main");
  };

  render() {
    const { goToMain } = this;
    return (
      <div className="Signup">
        <PageTop />
        <img
          onClick={goToMain}
          alt="logo"
          className="signup-logo"
          src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
        />
        <div className="signup-container">
          <p className="font-size">처음이시군요</p>
          <p className="font-size-bold">가입을 진행합니다.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <p className="input_header">아이디</p>
            <div className="id-container">
              <input
                name="email"
                className="input_id"
                type="text"
                placeholder="이메일"
                onChange={this.inputHandler}
              />
            </div>
            <p className="input_header">비밀번호</p>
            <div className="id-container">
              <input
                name="password"
                className="input_id"
                type="password"
                placeholder="비밀번호(6자이상)"
                onChange={this.inputHandler}
              />
            </div>
            <span
              className={
                this.state.password.length >= 1 &&
                this.state.password.length <= 6
                  ? "notice-msg"
                  : "none"
              }
            >
              6자리 이상의 비밀번호를 설정해주세요
            </span>
            <p className="input_header">휴대폰번호</p>
            <div className="id-container">
              <input
                name="phone_number"
                className="input_id"
                type="text"
                placeholder="휴대폰 번호('-'제외)"
                onChange={this.inputHandler}
              />
            </div>
            <span
              className={
                this.state.phone_number.length >= 1 &&
                this.state.phone_number.length <= 10
                  ? "notice-msg"
                  : "none"
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
            </div>
            <span
              className={
                this.state.birthday.length >= 1 &&
                this.state.birthday.length <= 5
                  ? "notice-msg"
                  : "none"
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
            </div>
            <span
              className={this.state.name.length === 1 ? "notice-msg" : "none"}
            >
              이름를 올바르게 입력해주세요.
            </span>

            <p className="input_header">성별</p>
            <div className="gender-container">
              <div className="gender-male-text">
                <label for="남자">
                  <input
                    type="radio"
                    name="gender_type"
                    onChange={this.inputHandler}
                    value="male"
                    checked={this.state.gender_type["male"]}
                  />
                  남자
                </label>
              </div>
              <div className="gender-female-text">
                <label for="여자">
                  <input
                    type="radio"
                    name="gender_type"
                    onChange={this.inputHandler}
                    value="female"
                    checked={this.state.gender_type["female"]}
                  />
                  여자
                </label>
              </div>
            </div>
            <div>
              <button
                onClick={this.handleSignup}
                className={
                  this.state.birthday.length >= 6 &&
                  this.state.phone_number.length >= 10 &&
                  this.state.password.length >= 5
                    ? "signup-btn blue"
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
