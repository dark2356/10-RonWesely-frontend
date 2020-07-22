import React, { Component } from "react";
import "./SideBar.scss";

class SideBar extends Component {
  state = {
    changeSideBarValid: this.props.changeSideBarValid,
  };
  handle = () => {
    this.state.changeSideBarValid(this.props.sideBarValid);
  };
  render() {
    const { sideBarValid } = this.props;
    return (
      <>
        <div className={sideBarValid ? "SideBar" : "SideBar-none"}>
          <button onClick={this.handle}>취소</button>
        </div>
      </>
    );
  }
}

export default SideBar;
