import React, { Component } from "react";
import "./SetPresent.scss";

class SetPresent extends Component {
  render() {
    return (
      <div className="SetPresent">
        <section className="container">
          <section className="first">
            <div className="span-container">
              <h3>
                <strong>건강한 면도 습관</strong>을
                <br />
                선물하세요
              </h3>
              <p>
                모든 남자들에게 유용하지만
                <br />
                뻔하지 않아 특별한 선물을 준비하세요
              </p>
              <span>*한정판매 상품입니다.</span>
            </div>
          </section>
          <section className="second">
            <img
              alt=""
              className="second-image"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/giftSet/razor_with_hand.png"
            />
            <div className="text-container">
              <div className="text-box">
                <h4>
                  국내 1위 프리미엄 면도
                  <br />
                  구독 서비스,
                  <strong>와이즐리</strong>
                  <p className="second-p">
                    지난 2년간 가장 빠르게 성장한 면도용품 브랜드.
                    <br /> 20대 10명중 1명이 쓰는 브랜드로 빠르게 성장하며,
                    <br /> 면도기 시장에 새로운 트렌드를 이끌고 있습니다.{" "}
                  </p>
                </h4>
              </div>
            </div>
          </section>
          <section className="third">
            <div className="new">
              <div className="new-item">
                <p>
                  다이아몬드 코팅된 독일산5중날로서 우수한 절삭력을 보여주는데도
                  1만원 이하다.{" "}
                </p>
                {/* 보류 나중에 작업때 필요 
                <p>
                    독점화된 면도기 시장을 '가성비'로 뚫은 브랜드, 시장을 정확히
                    파고 들었다.
                  </p>
                  <p>
                    뛰어난 절삭력, 간결한 구성과 효율적인 디자인이 만들어내는
                    만족감
                  </p> */}
              </div>
              <div className="new-icon">
                <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_1.svg" />
                <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_2.svg" />
                <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_3.svg" />
              </div>
            </div>
          </section>
          <section className="forth">
            <div className="title">
              <p className="p-first">풍성한 구성</p>{" "}
              <p className="p-second">을 특별한 가격에 담아낸 선물세트</p>
            </div>
            <div className="content">
              <span className="span-first">
                면도를 위한 모든 용품을 담아 풍성한 구성, 정직하고 특별한 가격에
                드립니다.
              </span>

              <span className="span-second">
                3개월 이상 사용할 수 있는 넉넉한 분량입니다.
              </span>
            </div>
            <div className="price">특별가 29,800원</div>
          </section>
          <section className="fifth">
            <div className="first">
              <div className="first-title">
                <p>패키지포함 내역</p>
              </div>
              <div className="first-content">
                <div className="container-first">
                  <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_shaving_gel/shaving_gel_75.png" />
                  <div className="product-info">
                    <p className="product-name">쉐이빙 젤</p>
                    <p>(여행용 75ml)</p>
                  </div>
                </div>
                <div className="container-second">
                  <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_kit/starter_navy.png" />
                  <div className="product-info">
                    <p className="product-name">면도기 세트</p>
                    <p>(면도기+날2입)</p>
                  </div>
                </div>
                <div className="container-third">
                  <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_aftershaveing/after_shaving_gel_oily_30.png" />
                  <div className="product-info">
                    <p className="product-name">애프터 쉐이브</p>
                    <p>(여행용30ml)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="second">
              <div className="second-title">
                <p> 패키지 내 상품권 포함 내역 </p>
              </div>
              <div className="first-content">
                <div className="container-first">
                  <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_shaving_gel/shaving_gel_75.png" />
                  <div className="product-info">
                    <p className="product-name">쉐이빙 젤</p>
                    <p>(여행용 75ml)</p>
                  </div>
                </div>
                <div className="container-second">
                  <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/blade/refill_blade.png" />
                  <div className="product-info">
                    <p className="product-name">리필 면도날</p>
                    <p>(4입)</p>
                  </div>
                </div>
                <div className="container-third">
                  <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_aftershaveing/after_shaving_gel_oily_30.png" />
                  <div className="product-info">
                    <p className="product-name">애프터 쉐이브</p>
                    <p>(여행용30ml)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default SetPresent;
