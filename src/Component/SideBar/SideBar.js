import React, { Component } from "react";
import SelectShaveColor from "../SideBarComponent/SelectShaveColor";
import SelectBasket from "../SideBarComponent/SelectBasket";
import "./SideBar.scss";

class SideBar extends Component {
  state = {
    changeSideBarValid: this.props.changeSideBarValid,

    categorySideBar: [
      { index: 0, category: "선물세트", title: "면도기 색상 선택", sideBar: 0 },
      {
        index: 1,
        category: "면도기세트",
        title: "면도기 색상 선택",
        sideBar: 0,
      },
      { index: 2, category: "리필 면도날", title: "장바구니", sideBar: 4 },
      { index: 3, category: "쉐이빙 젤", title: "장바구니", sideBar: 4 },
      { index: 4, category: "애프터쉐이브", title: "장바구니", sideBar: 4 },
    ],
  };

  handleCancelSideBar = (nowCatecory) => {
    const newCate = this.state.categorySideBar.map((data) => {
      if (nowCatecory.index === data.index) {
        if ((data.index === 0 || data.index === 1) && data.sideBar === 4) {
          return { index: data.index, title: "면도기 색상 선택", sideBar: 0 };
        } else {
          console.log(data);
          return data;
        }
      } else {
        console.log(data);
        return data;
      }
    });
    this.setState({
      categorySideBar: newCate,
    });

    this.state.changeSideBarValid(this.props.sideBarValid);
  };

  handleChangeSideBar = (sideBar, index) => {
    const newCate = this.state.categorySideBar.map((data) => {
      if (index === data.index) {
        if ((data.index === 0 || data.index === 1) && data.sideBar === 0) {
          return { index: data.index, title: "장바구니", sideBar: 4 };
        }
      } else {
        return data;
      }
    });

    this.setState({
      categorySideBar: newCate,
    });
  };

  setSideBarComponent = (nowCatecory) => {
    console.log(nowCatecory.sideBar);
    switch (nowCatecory.sideBar) {
      case 0:
      case 1:
        return (
          <SelectShaveColor
            index={nowCatecory.sideBar}
            handleChangeColor={this.handleChangeColor}
            handleChangeSideBar={() =>
              this.handleChangeSideBar(nowCatecory.sideBar, nowCatecory.index)
            }
          />
        );
      case 3:
      case 4:
        return <SelectBasket />;

      default:
        return <SelectShaveColor />;
    }
  };

  setSideBarIndex = (index) => {
    this.setState({ SideBarIndex: index });
  };

  render() {
    const { sideBarValid, productIndex } = this.props;
    const { categorySideBar } = this.state;

    const nowCatecory = categorySideBar[parseInt(productIndex) - 1];

    return (
      <div className={sideBarValid ? "SideBar" : "SideBar-none"}>
        <div className="top">
          <img
            src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/backArrow.svg"
            onClick={() => this.handleCancelSideBar(nowCatecory)}
          />
          <p>{nowCatecory.title}</p>
        </div>
        <div className="center">{this.setSideBarComponent(nowCatecory)}</div>
      </div>
    );
  }
}

export default SideBar;
