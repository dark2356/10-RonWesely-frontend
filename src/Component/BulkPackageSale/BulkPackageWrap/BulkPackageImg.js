import React, { Component } from "react";

class BulkPackageImg extends Component {
  render() {
    const { img } = this.props;
    return (
      <>
        {/*className을 주면 Scss가 안먹어서 빈값으로 줬습니다 .. }*/}
        <img alt="리필면도날" className="product-image" src={img} />
      </>
    );
  }
}

export default BulkPackageImg;
