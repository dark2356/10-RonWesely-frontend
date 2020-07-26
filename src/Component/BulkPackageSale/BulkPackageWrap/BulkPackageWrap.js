import React, { Component } from "react";
import BulkPackageList from "./BulkPackageList";
import BulkPackageTitle from "./BulkPackageTitle";
import BulkPackageImg from "./BulkPackageImg";
import "./BulkPackageWrap.scss";

class BulkPackageWrap extends Component {
  render() {
    const {
      key,
      index,
      img,
      title,
      subtitle,
      volume,
      list,
      handleActive,
    } = this.props;

    return (
      <div className="BulkPackgeWrap">
        <div className="product-wrapper">
          <BulkPackageImg img={img} />
          <div className="product-text-wrapper">
            <BulkPackageTitle
              key={index}
              title={title}
              subtitle={subtitle}
              volume={volume}
            />

            <ul className="option-list-wrapper">
              {list.map((data) => (
                <BulkPackageList
                  product={data}
                  handleActive={handleActive}
                  key={index}
                  index={index}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BulkPackageWrap;
