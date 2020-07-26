import React, { Component } from "react";
import BulkPackageWrap from "./BulkPackageWrap/BulkPackageWrap";
import Footer from "../Footer/Footer";
import Nav from "../../Pages/Main/Nav/Nav";
import "./BulkPackageSale.scss";

class BulkPackageSale extends Component {
  constructor() {
    super();

    this.state = {
      product: [
        {
          key: 0,
          img:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/bulkLanding/bulk_blade.png",
          title: "리필면도날",
          subtitle: "독일산 5중 날",
          volume: "",
          list: [
            {
              active: false,
              ea: "4개입",
              discount: "할인 없음",
              price: "9,600원",
            },
            {
              active: false,
              ea: "8개입",
              discount: "7% 할인",
              price: "17,800원",
            },
            {
              active: false,
              ea: "12개입",
              discount: "15% 할인",
              price: "24,400원",
            },
            {
              active: false,
              ea: "16개입",
              discount: "20% 할인",
              price: "30,700원",
            },
          ],
        },
        {
          key: 1,
          img:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/bulkLanding/bulk_shaving_gel.png",
          title: "쉐이빙젤",
          subtitle: "부드럽고 풍성한 거품",
          volume: "150ml",
          list: [
            {
              active: false,
              ea: "1개",
              discount: "할인 없음",
              price: "4,500원",
            },
            {
              active: false,
              ea: "2개",
              discount: "10% 할인",
              price: "8,100원",
            },
            {
              active: false,
              ea: "3개",
              discount: "15% 할인",
              price: "11,400원",
            },
            {
              active: false,
              ea: "4개",
              discount: "20% 할인",
              price: "14,400원",
            },
          ],
        },
        {
          key: 2,
          img:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/bulkLanding/bulk_after_shave.png",
          title: "리페어 애프터쉐이브",
          subtitle: "면도 후 진정과 보습",
          volume: "60ml",
          list: [
            {
              active: false,
              ea: "1개",
              discount: "할인 없음",
              price: "6,500원",
            },
            {
              active: false,
              ea: "2개",
              discount: "10% 할인",
              price: "11,700원",
            },
            {
              active: false,
              ea: "3개",
              discount: "15% 할인",
              price: "16,500원",
            },
            {
              active: false,
              ea: "4개",
              discount: "20% 할인",
              price: "20,800원",
            },
          ],
        },
      ],
    };
  }
  handleActive = (changeProduct, key) => {
    console.log(this.state.product[key]);
    let dataList = this.state.product[key].list.map((data) => {
      if (
        changeProduct.ea === data.ea &&
        changeProduct.discount === data.discount &&
        data.price === changeProduct.price
      ) {
        data.active = true;
        return data;
      } else {
        data.active = false;
        return data;
      }
    });

    let index = key;

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
    console.log("너뭐야 ", product);

    return (
      <div className="BulkPackageSale">
        <Nav />
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
          <BulkPackageWrap
            key={data.key}
            index={data.key}
            img={data.img}
            title={data.title}
            subtitle={data.subtitle}
            volume={data.volume}
            list={data.list}
            handleActive={this.handleActive}
          />
        ))}

        <Footer />
      </div>
    );
  }
}

export default BulkPackageSale;
