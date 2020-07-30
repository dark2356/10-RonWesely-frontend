import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import SetPresent from "./ProductList/SetPresent";
import SideBar from "../../Component/SideBar/SideBar";
import BulkPackageSale from "../BulkPackageSale/BulkPackageSale";
import Shavinggel from "./ProductList/Shavinggel";
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

  componentDidUpdate(Preprops, prevState) {
    console.log("컴포넌트 업데이트 :" + Preprops.match.params.id);
    if (this.props.match.params.id !== Preprops.match.params.id) {
      this.setState({
        index: this.props.match.params.id,
      });
    }
  }

  setComponent = (index) => {
    console.log(index);
    switch (index) {
      case "1":
        return <SetPresent />;
      case "2":
        return <BulkPackageSale />;
      case "3":
        return <BulkPackageSale />;
      case "4":
        return <Shavinggel />;
      case "5":
        return <BulkPackageSale />;
      default:
        return <SetPresent />;
    }
  };
  render() {
    const { index, sideBarValid, component } = this.state;
    console.log(index);

    return (
      <>
        <div className={sideBarValid ? "Product-fixed" : ""}></div>
        <SideBar
          productIndex={index}
          sideBarValid={sideBarValid}
          changeSideBarValid={this.changeSideBarValidInSideBar}
        />

        <Nav
          changeSideBarValidInProduct={this.changeSideBarValidInProduct}
          productNum={index}
        />

        <div className={sideBarValid ? "Product-none" : "Product"}>
          {this.setComponent(index)}
        </div>
      </>
    );
  }
}

export default Product;
