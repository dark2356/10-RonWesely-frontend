import React, { Component } from "react";
import BulkPackageList from "./BulkPackageList";
import BulkPackageTitle from "./BulkPackageTitle";
import BulkPackageImg from "./BulkPackageImg";
import "./BulkPackageWrap.scss";

class BulkPackageWrap extends Component {
  render() {
    const { id, img, title, subtitle, volume, list, handleActive } = this.props;

    return (
      <div className="BulkPackgeWrap">
        <div className="product-wrapper">
          <BulkPackageImg img={img} />
          <div className="product-text-wrapper">
            <BulkPackageTitle
              key={id}
              title={title}
              subtitle={subtitle}
              volume={volume}
            />

            <ul className="option-list-wrapper">
              {list.map((data, idx) => (
                <BulkPackageList
                  key={idx}
                  id={id}
                  index={data.index}
                  product={data}
                  handleActive={handleActive}
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
