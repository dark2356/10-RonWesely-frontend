import React, { Component } from "react";

class MethodList extends Component {
  render() {
    const { img, text, isActive, handleActive } = this.props;

    return (
      <div className="MethodList">
        <div className="list-light-index">
          <div
            className={`option-list ${isActive === text ? "active" : ""}`}
            onClick={() => handleActive(text)}
          >
            <div className="list-img-box">
              <img alt="카카오페이" src={img} />
            </div>
            <div className="option-text">{text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MethodList;
