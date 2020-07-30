import React, { Component } from "react";
import PageTop from "../../Pages/PageTop/PageTop";
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
    colorNowId: 0,
    colorNowsrc: "",
  };

  handleSelect = (sideBarIndex, prodIndex, colorNowId) => {
    console.log(prodIndex + 1, 1);
    console.log("장바구니 api 연결 : ");
    fetch("http://10.58.4.52:8000/order/color-select", {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.DbCRvyvj5ai7zxm8dwLI_zb-CNNI5jvEA9j43cWkovc",
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
          colorNowsrc: res.Info[0].color_url,
        });
      });
  }

  render() {
    const { index } = this.props;
    console.log(this.props);

    const { colorList, colorNowId, colorNowsrc } = this.state;
    console.log(colorList, colorNowId);

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
