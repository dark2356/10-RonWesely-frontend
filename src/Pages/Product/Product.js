import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import SetPresent from "./ProductList/SetPresent";
import Review from "../../Component/Review/review";
import SideBar from "../../Component/SideBar/SideBar";

import "./Product.scss";

class Product extends Component {
  constructor() {
    super();

    this.state = {
      sideBarValid: false,
      index: 1,
    };
  }

  changeSideBarValidInSideBar = (check) => {
    this.setState({
      sideBarValid: !check,
    });
  };

  changeSideBarValidInProduct = () => {
    this.setState({
      sideBarValid: !this.state.sideBarValid,
    });
  };

  componentDidUpdate(Preprops) {
    if (this.props.match.params.id !== Preprops.match.params.id) {
      console.log("componentDidUpdate");
      this.setState({ index: this.props.match.params.id });
    }
  }
  setComponent = (index) => {
    switch (index) {
      case 1:
        return <SetPresent />;
      default:
        return <SetPresent />;
    }
  };
  render() {
    console.log("render");
    const index = this.state.index;
    console.log(index);

    return (
      <>
        <div className={this.state.sideBarValid ? "Product-fixed" : ""}></div>
        <SideBar
          productIndex={index}
          sideBarValid={this.state.sideBarValid}
          changeSideBarValid={this.changeSideBarValidInSideBar}
        />

        <Nav
          changeSideBarValidInProduct={this.changeSideBarValidInProduct}
          productNum={index}
        />

        <div className={this.state.sideBarValid ? "Product-none" : "Product"}>
          {this.setComponent(this.state.index)}
          <Review />
        </div>
      </>
    );
  }
}

export default Product;
