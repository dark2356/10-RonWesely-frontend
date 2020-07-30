import React, { Component } from "react";
import "./ProductNav.scss";

class ProductNav extends Component {
  // 데이터 테스트 중
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
    fetch("http://10.58.4.52:8000/product/" + this.props.productNum)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
          console.log("실행1");
          this.setState({
            Info: res.Info,
          });
        }
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productNum !== this.props.productNum) {
      fetch("http://10.58.4.52:8000/product/" + this.props.productNum)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
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
            console.log("실행2" + this.props.productNum);
            this.setState({
              Info: res.Info,
            });
          }
        });
    }
  }

  changeSideBarValidInProduct = () => {
    this.props.changeSideBarValidInProduct();
  };

  render() {
    console.log(this.state.Info.length);
    return (
      <div className="ProductNav">
        <div className="inner">
          <div className="left">
            <div className="product-name">
              {this.state.Info.length === 1 ? (
                <div>
                  {this.state.Info[0].product_name}
                  <span>({this.state.Info[0].product_description})</span>
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
                    {this.state.showProduct.product_name}
                    <span>({this.state.showProduct.product_size})</span>
                  </div>
                  <div
                    className={
                      this.state.activeDrop ? "drop-show" : "drop-unshow"
                    }
                    onClick={() =>
                      this.setState({
                        ...this.state.Info,
                        showProduct: this.state.unshowProduct,
                        unshowProduct: this.state.showProduct,
                        activeDrop: !this.state.activeDrop,
                      })
                    }
                  >
                    {this.state.unshowProduct.product_name}
                    <span>({this.state.unshowProduct.product_size})</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="right">
            <div className="detail">상세 정보</div>
            <div className="review">후기(377)</div>
            <div className="price">
              {this.state.Info.length === 1 ? (
                <>{this.state.Info[0].product_price}</>
              ) : (
                <>{this.state.showProduct.product_price}</>
              )}
              원
            </div>
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

export default ProductNav;
