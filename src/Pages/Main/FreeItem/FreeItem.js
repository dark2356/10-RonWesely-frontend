import React, { Component } from "react";
import "../Main.scss";

class FreeItem extends Component {
  render() {
    const { img, text } = this.props;
    return (
      <div className="FreeItem">
        <div className="free-item">
          <img alt="item-shave" className="item-image" src={img} />
          <p className="item-value">{text}</p>
        </div>
      </div>
    );
  }
}

export default FreeItem;
