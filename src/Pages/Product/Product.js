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
    return (
      <>
        <SideBar
          sideBarValid={this.state.sideBarValid}
          changeSideBarValid={this.changeSideBarValidInSideBar}
        />
        <div className="Product">
          <Nav changeSideBarValid={this.changeSideBarValidInProduct} />
          <SetPresent />
        </div>
        {this.state.sideBarValid ? <div className="Product-none"></div> : null}
      </>
    );
  }
}

export default Product;
