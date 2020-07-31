import React, { Component } from "react";
import PageTop from "../../Pages/PageTop/PageTop";
import config from "../../config";
import "./SelectShaveColor.scss";

class SelectShaveColor extends Component {
  state = {
    colorList: [
      {
        color_id: 0,
        color_eng_name: "",
        color_name: "",
        color_url: "",
      },
    ],

    colorNow: "",
    colorNowId: 1,
    colorNowsrc: "",
  };

  handleSelect = (sideBarIndex, prodIndex, colorNowId) => {
    fetch(`${config.IP}/order/color-select`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ product_id: prodIndex + 1, color_id: "1" }),
    });

    this.props.handleChangeSideBar(sideBarIndex);
  };

  handleChangeColor = (data) => {
    this.setState({
      colorNow: data.color_name,
      colorNowId: data.color_id,
      colorNowsrc: data.color_url,
    });
  };

  componentDidMount() {
    fetch(`${config.IP}/product/color-detail`, {
      method: "GET",
      headers: {
        Authorization: "",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          colorList: res.Info,
          colorNowsrc: res.Info[0].color_url,
        });
      });
  }

  render() {
    const { index } = this.props;

    const { colorList, colorNowId, colorNowsrc } = this.state;

    const color =
      this.state.colorNow === ""
        ? colorList[0].color_name
        : this.state.colorNow;

    return (
      <div className="SelectShaveColor">
        <PageTop />
        <div className="shaver-img">
          <img src={colorNowsrc} />
        </div>
        <div className="product-color">
          {colorList.map((data) => (
            <div key={data.color_eng_name}>
              <div
                className="select-btn"
                onClick={() => this.handleChangeColor(data)}
              >
                <div
                  className={
                    colorNowId === data.color_id ? data.color_eng_name : null
                  }
                >
                  <div className="select-btn-color">
                    <div className={data.color_eng_name} />
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
          <button onClick={() => this.handleSelect(5, index, colorNowId)}>
            선택하기
          </button>
        </div>
      </div>
    );
  }
}

export default SelectShaveColor;
