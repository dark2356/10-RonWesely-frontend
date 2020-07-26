import React, { Component } from "react";
import SelectShaveColor from "./SideBarComponent/SelectShaveColor";
import SelectBasket from "./SideBarComponent/SelectBasket";
import "./SideBar.scss";

class SideBar extends Component {
  state = {
    changeSideBarValid: this.props.changeSideBarValid,
    category: [
      { index: 0, title: "면도기 색상 선택" },
      { index: 1, title: "장바구니" },
    ],
    nowCateIndex: 1,
  };
  handleCancelSideBar = () => {
    this.state.changeSideBarValid(this.props.sideBarValid);
    this.setState({ nowCateIndex: 0 });
  };

  handleChangeColor = (color) => {
    this.setState({
      colorNow: color,
    });
  };
  handleChangeSideBar = (index) => {
    this.setState({
      nowCateIndex: index + 1,
    });
  };

  render() {
    const { sideBarValid } = this.props;
    const nowCatecory =
      this.state.nowCateIndex === 0
        ? this.state.category[0]
        : this.state.category[this.state.nowCateIndex];
    return (
      <>
        <div className={sideBarValid ? "SideBar" : "SideBar-none"}>
          {/* <div className="SideBar"> */}
          <div className="top">
            <img
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/backArrow.svg"
              onClick={this.handleCancelSideBar}
            />
            <p>{nowCatecory.title}</p>
          </div>

          <div className="center">
            {/* 면도기 색상 선택 컴포넌트 */}
            {/* {this.state.nowCateIndex === 0 && (
              <SelectShaveColor
                index={this.state.nowCateIndex}
                handleChangeSideBar={this.handleChangeSideBar}
              />
            )} */}

            {/* 장바구니 컴포넌트 */}
            <SelectBasket />
            {/* {this.state.nowCateIndex === 1 && <div></div>} */}
          </div>
        </div>
      </>
    );
  }
}

export default SideBar;
