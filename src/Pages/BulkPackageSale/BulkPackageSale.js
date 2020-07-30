import React, { Component } from "react";
import BulkPackageWrap from "./BulkPackageWrap/BulkPackageWrap";
import Footer from "../../Component/Footer/Footer";
import Nav from "../../Component/Nav/Nav";
import bulkPackageProdut from "./BulkPackageProduct";
import "./BulkPackageSale.scss";

class BulkPackageSale extends Component {
  constructor() {
    super();

    this.state = {
      product: bulkPackageProdut.product,
    };
  }

  handleActive = (ListIndex, ProductId) => {
    let dataList = this.state.product[ProductId - 1].list.map((data) => {
      if (ListIndex === data.index) {
        data.active = !data.active;
        return data;
      } else {
        data.active = false;
        return data;
      }
    });

    let index = ProductId;

    this.setState({
      ...this.state.product,
      product: this.state.product.map((product) => {
        if (product.key === index) {
          return {
            ...product,
            list: dataList,
          };
        } else {
          return {
            ...product,
          };
        }
      }),
    });
  };

  render() {
    const { product } = this.state;
    return (
      <div className="BulkPackageSale">
        <Nav BulkPackageSale={true} productNum={6} />

        <div className="bulk-purchase-main">
          <div className="bulk-purchase-text-wrapper">
            <h2 className="bulk-purchase-title">대용량 팩 한정판매!</h2>
            <p className="bulk-purchase-value">
              최대 20% 저렴한 가격,
              <br />다 떨어질 일 없이 미리 구매해두세요
            </p>
            <span className="bulk-purchase-sub">*한정 수량 소진 시 종료</span>
          </div>
        </div>

        {product.map((data) => (
          <div key={data.id}>
            <BulkPackageWrap
              key={data.id}
              id={data.id}
              img={data.img}
              title={data.title}
              subtitle={data.subtitle}
              volume={data.volume}
              list={data.list}
              handleActive={this.handleActive}
            />
          </div>
        ))}

        <Footer />
      </div>
    );
  }
}

export default BulkPackageSale;
