import React, { Component } from "react";
import Nav from "./Nav/Nav";
import SetPresent from "./ProductList/SetPresent";
import SideBar from "../../Component/SideBar";
import "./Product.scss";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      sideBarValid: false,
      list: [
        {
          title: "선물세트",
          titleSub: "면도용품+기프트 카드",
          price: "8,900원",
        },
      ],
    };
  }
  changeSideBarValidInSideBar = (check) => {
    console.log(check);
    this.setState({
      sideBarValid: !check,
    });
  };
  changeSideBarValidInProduct = () => {
    console.log();
    this.setState({
      sideBarValid: !this.state.changeSideBarValid,
    });
  };
  render() {
    const position = { position: "fixed" };
    return (
      <>
        <SideBar
          sideBarValid={this.state.sideBarValid}
          changeSideBarValid={this.changeSideBarValidInSideBar}
        />
        <div
          className={
            this.state.sideBarValid ? "Product-fix" : "Product-relative"
          }
        >
          {this.state.list.map((data) => (
            <Nav
              key={data.title}
              data={data}
              changeSideBarValid={this.changeSideBarValidInProduct}
            />
          ))}

          <SetPresent />
        </div>
        {this.state.sideBarValid ? <div className="Product-none"></div> : null}
      </>
    );
  }
}

export default Product;
