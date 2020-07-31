import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import config from "../../config";
import "./ProductNav.scss";

class ProductNav extends Component {
  state = {
    Info: [
      {
        product_name: "",
        product_size: "",
        product_description: "",
        size_description: "",
        product_price: "",
      },
    ],
    showProduct: {
      index: 0,
      product_name: "",
      product_size: "",
      product_price: "",
    },
    unshowProduct: {
      index: 1,
      product_name: "",
      product_size: "",
      product_price: "",
    },
    activeDrop: false,
  };

  componentDidMount() {
    fetch(`${config.IP}/product/${this.props.productNum}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.Info.length > 1) {
          this.setState({
            Info: res.Info,
            showProduct: {
              index: 0,
              product_name: res.Info[0].product_name,
              product_size: res.Info[0].product_size,
              product_price: res.Info[0].product_price,
            },
            unshowProduct: {
              index: 0,
              product_name: res.Info[1].product_name,
              product_size: res.Info[1].product_size,
              product_price: res.Info[1].product_price,
            },
          });
        } else {
          this.setState({
            Info: res.Info,
          });
        }
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productNum !== this.props.productNum) {
      fetch(`${config.IP}/product/${this.props.productNum}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.Info.length > 1) {
            this.setState({
              Info: res.Info,
              showProduct: {
                index: 0,
                product_name: res.Info[0].product_name,
                product_size: res.Info[0].product_size,
                product_price: res.Info[0].product_price,
              },
              unshowProduct: {
                index: 0,
                product_name: res.Info[1].product_name,
                product_size: res.Info[1].product_size,
                product_price: res.Info[1].product_price,
              },
            });
          } else {
            this.setState({
              Info: res.Info,
            });
          }
        });
    }
  }

  changeSideBarValidInProduct = () => {
    // if (localStorage.getItem("access_token") === null) {
    //   alert("로그인 페이지로 이동하겠습니다.");
    //   this.props.history.push("/login");
    //   return;
    // }
    if (this.props.productNum === 6) {
      fetch(`${config.IP}/order/bulk-order`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
        body: JSON.stringify({
          Info: [
            {
              product_id: "3",
              quantity: "1",
            },
            {
              product_id: "4",
              quantity: "1",
            },
          ],
        }),
      })
        .then((res) => res.json())
        .then((res) =>
          res.Info.length > 0
            ? this.props.history.push("/payment")
            : alert("에러가 발생했습니다.")
        );
    }
    this.props.changeSideBarValidInProduct();
  };

  render() {
    const { Info, activeDrop, showProduct, unshowProduct } = this.state;
    return (
      <div className="ProductNav">
        <div className="inner">
          <div className="left">
            {this.props.BulkPackageSale ? (
              <div className="product-name">대량구매</div>
            ) : (
              <div className="product-name">
                {Info.length === 1 ? (
                  <div>
                    {Info[0].product_name}
                    <span>({Info[0].product_description})</span>
                  </div>
                ) : (
                  <>
                    <div
                      className="product-origin"
                      onClick={() =>
                        this.setState({
                          activeDrop: !this.state.activeDrop,
                        })
                      }
                    >
                      {showProduct.product_name}
                      <span>({showProduct.product_size})</span>
                    </div>
                    <div
                      className={activeDrop ? "drop-show" : "drop-unshow"}
                      onClick={() =>
                        this.setState({
                          ...this.state.Info,
                          showProduct: this.state.unshowProduct,
                          unshowProduct: this.state.showProduct,
                          activeDrop: !this.state.activeDrop,
                        })
                      }
                    >
                      {unshowProduct.product_name}
                      <span>({unshowProduct.product_size})</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="right">
            <div className="detail">
              {Info[0].product_name === "" ? "" : "상세 정보"}
            </div>
            <div className="review">
              {Info[0].product_name === "" ? "" : "후기(377)"}
            </div>

            {Info[0].product_name !== "" && (
              <div className="price">
                {Info.length === 1 ? (
                  <>{Info[0].product_price}</>
                ) : (
                  <>{showProduct.product_price}</>
                )}
                원
              </div>
            )}

            <div className="buy-button">
              <button onClick={this.changeSideBarValidInProduct}>
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductNav);
