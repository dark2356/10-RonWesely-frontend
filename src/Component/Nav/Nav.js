import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavSub from "./NavSub";
import ProductNav from "./ProductNav";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subNavActive: false,
      sideBarValid: false,
      changeSideBarValidInProduct: this.props.changeSideBarValidInProduct,
    };
  }

  handleProductNav = (index) => {
    this.setState({
      subNavActive: !this.state.subNavActive,
    });
    this.props.history.push(`/product/${index}`);
  };

  goToMain = (id) => {
    if (id === 1) {
      this.props.history.push("/main");
    } else if (id === 2) {
      this.props.history.push("/bulkpackagesale");
    } else if (id === 3) {
      this.props.history.push("/login");
    }
  };

  render() {
    const { goToMain, handleProductNav } = this;
    return (
      <div className="Nav">
        <div className="header-wrapper-subscription-bg-active">
          <div className="scroll-wrapper-inserted">
            <header className="padding">
              <div className="contain-wrapper">
                <h1 className="wesely-logo">
                  <span role="link" tabIndex="0" className="home-link">
                    <img
                      onClick={() => goToMain(1)}
                      alt="wesely-logo"
                      className="logo"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
                    />
                  </span>
                </h1>
                <nav className="inserted">
                  <div className="contents-wrapper">
                    <ul role="menubar" className="contents">
                      <li className="items-inserted">
                        <h2 className="item">
                          <span
                            role="link"
                            tabIndex="0"
                            className="link-active"
                            onClick={() => goToMain(1)}
                          >
                            시작하기
                          </span>
                        </h2>
                      </li>
                      <li className="items">
                        <h2 className="item">
                          <span role="menuitem" tabIndex="0" className="link">
                            <span
                              className="arrow-wrapper"
                              onClick={handleProductNav}
                            >
                              상품보기
                            </span>
                          </span>
                        </h2>
                      </li>
                      <li className="items-inserted">
                        <h2 className="item">
                          <span
                            role="link"
                            tabIndex="0"
                            className="link-limited-purchase"
                            onClick={() => goToMain(2)}
                          >
                            대용량 팩 할인
                            <span className="limited-purchase">최대 20%</span>
                          </span>
                        </h2>
                      </li>
                      <li className="items">
                        <h2 className="item">
                          <span role="menuitem" tabIndex="0" className="link">
                            <span className="arrow-wrapper">
                              론위즐리 이야기
                            </span>
                          </span>
                        </h2>
                      </li>
                      <li className="items">
                        <h2 className="item">
                          <span role="menuitem" tabIndex="0" className="link">
                            <span className="arrow-wrapper">고객센터</span>
                          </span>
                        </h2>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="user-info-wrapper">
                  <span
                    role="link"
                    className="login"
                    onClick={() => goToMain(3)}
                  >
                    로그인
                  </span>
                  <div className="basket-wrapper">
                    <span className="basket">장바구니</span>
                    <div className="basket-quantity-wrapper">
                      <span className="quantity-count">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div
            className={
              this.state.subNavActive
                ? "NabSubContainer"
                : "NabSubContainer none"
            }
          >
            {this.state.subNavActive && (
              <NavSub handleProductNav={handleProductNav} />
            )}
          </div>
        </div>

        {this.props.productNum && (
          <ProductNav
            productNum={this.props.productNum}
            changeSideBarValidInProduct={this.props.changeSideBarValidInProduct}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
