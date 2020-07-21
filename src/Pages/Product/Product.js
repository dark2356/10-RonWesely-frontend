import React, { Component } from "react";
import Nav from "./Nav/Nav";
import SetPresent from "./ProductList/SetPresent";
import "./Product.scss";

class Product extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="Product">
          <SetPresent />

          {/* 면도기 세트 컴포넌트 */}
        </div>
      </>
    );
  }
}

export default Product;
