import React, { Component } from "react";
import "./SelectShaveColor.scss";

class SelectShaveColor extends Component {
  state = {
    colorList: [
      {
        backgroundColor: "black",
        value: "미드나이트 세이버",
      },
      {
        backgroundColor: "blue",
        value: "사파이어 블루",
      },
      { backgroundColor: "grey", value: "슬레이트 그레이" },
    ],
    colorNow: "",
  };

  handleSelect = () => {
    this.props.handleChangeSideBar(this.props.index);
  };
  render() {
    const { index } = this.props;
    const { colorList } = this.state;
    const color =
      this.state.colorNow === "" ? colorList[0].value : this.state.colorNow;

    return (
      <div className="SelectShaveColor">
        <div className="shaver-img">
          <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razor_lie_navy.png" />
        </div>
        <div className="product-color">
          {colorList.map((data) => (
            <div key={data.backgroundColor}>
              <div
                className="select-btn"
                onClick={() => this.handleChangeColor(data.value)}
              >
                <div
                  className={color === data.value ? data.backgroundColor : null}
                >
                  <div className="select-btn-color">
                    <div className={data.backgroundColor} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="product-color-value">
          <p>{color}</p>
        </div>
        <div className="btn-container">
          <button onClick={this.handleSelect}>선택하기</button>
        </div>
      </div>
    );
  }
}

export default SelectShaveColor;
