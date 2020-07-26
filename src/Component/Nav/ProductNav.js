import React, { Component } from "react";
import "./ProductNav.scss";

class ProductNav extends Component {
  state = {
    Info: {
      name: "",
      description: "",
      price: "",
    },
  };

  changeSideBarValidInProduct = () => {
    this.props.changeSideBarValidInProduct();
  };

  componentDidMount() {
    fetch("http://10.58.5.46:8000/product/1")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          Info: {
            name: res.Info.name,
            description: res.Info.description,
            price: res.Info.price + "원",
          },
        });
      });
  }

  render() {
    return (
      <div className="ProductNav">
        <div className="inner">
          <div className="left">
            <div className="product-name">
              {this.state.Info.name}
              <span>({this.state.Info.description})</span>
            </div>
          </div>
          <div className="right">
            <div className="detail">상세 정보</div>
            <div className="review">후기(377){/*api 연결 필요*/}</div>
            <div className="price">
              {/* 원가 보류 <span>34,900</span> */}
              {this.state.Info.price}
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
