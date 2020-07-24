import React, { Component } from "react";
import BulkPackageList from "./BulkPackageList";
import BulkPackageTitle from "./BulkPackageTitle";
import BulkPackageImg from "./BulkPackageImg";
import "./BulkPackageWrap.scss";

class BulkPackageWrap extends Component {
  render() {
    const { key, img, title, subtitle, volume, list } = this.props;

    return (
      <div className="BulkPackgeWrap">
        <div className="product-wrapper">
          <BulkPackageImg img={img} />
          <div className="product-text-wrapper">
            <BulkPackageTitle
              key={key}
              title={title}
              subtitle={subtitle}
              volume={volume}
            />

            <ul className="option-list-wrapper">
              {list.map((data) => (
                <BulkPackageList product={data} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BulkPackageWrap;
