import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
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
      sideBarValid: !this.state.sideBarValid,
    });
  };

  render() {
    console.log(this.state.sideBarValid);
    return (
      <>
        <Nav changeSideBarValidInProduct={this.changeSideBarValidInProduct} />

        <div className="Product">
          <SideBar
            sideBarValid={this.state.sideBarValid}
            changeSideBarValid={this.changeSideBarValidInSideBar}
          />
          <SetPresent />

          {/* <SideBar
            sideBarValid={this.state.sideBarValid}
            changeSideBarValid={this.changeSideBarValidInSideBar}
          /> */}
          {/* <div
            className={
              this.state.sideBarValid ? "Product-fix" : "Product-relative"
            }
          >
            <SetPresent />
          </div> */}
        </div>

        {this.state.sideBarValid ? <div className="Product-none"></div> : null}
      </>
    );
  }
}

export default Product;
