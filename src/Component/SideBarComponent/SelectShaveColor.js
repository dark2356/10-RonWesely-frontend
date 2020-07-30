import React, { Component } from "react";
import PageTop from "../../Pages/PageTop/PageTop";
import "./SelectShaveColor.scss";

class SelectShaveColor extends Component {
  state = {
    colorList: [
      {
        color_id: 0,
        back_groundColor: "",
        color_name: "",
        color_url: "",
      },
    ],

    colorNow: "",
  };

  handleSelect = (index) => {
    this.props.handleChangeSideBar(index);
  };

  handleChangeColor = (color) => {
    this.setState({
      colorNow: color,
    });
  };

  componentDidMount() {
    console.log("컬러 선택 시작 : ", this.props.index);
    fetch("http://10.58.4.52:8000/product/color-detail", {
      method: "GET",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.kQ_f8bwKpIAuexiG9yCcdMc1SY_uKfcJCwxiRpI6GWU",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          colorList: res.Info,
        });
      });
  }

  render() {
    const { index } = this.props;
    console.log(this.props);

    const { colorList } = this.state;
    console.log(colorList);

    const color =
      this.state.colorNow === ""
        ? colorList[0].color_name
        : this.state.colorNow;

    return (
      <div className="SelectShaveColor">
        <PageTop />
        <div className="shaver-img">
          <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/razor_lie_navy.png" />
        </div>
        <div className="product-color">
          {colorList.map((data) => (
            <div key={data.backgroundColor}>
              <div
                className="select-btn"
                onClick={() => this.handleChangeColor(data.color_name)}
              >
                <div
                  className={
                    color === data.color_name ? data.backgroundColor : null
                  }
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
          <button onClick={() => this.handleSelect(5)}>선택하기</button>
        </div>
      </div>
    );
  }
}

export default SelectShaveColor;
