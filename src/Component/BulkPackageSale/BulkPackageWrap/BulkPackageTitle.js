import React, { Component } from "react";
import "./BulkPackageWrap.scss";

class BulkPackageTitle extends Component {
  render() {
    const { title, subtitle, volume } = this.props;

    return (
      <div className="BulkPackageTitle">
        <div className="title-wrapper">
          <h2 className="product-title">{title}</h2>
          <span className="product-sub-title">{subtitle}</span>
          <span className="product-volume">{volume}</span>
        </div>
      </div>
    );
  }
}

export default BulkPackageTitle;
