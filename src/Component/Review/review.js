import React, { Component } from "react";
import ReviewContainer from "./ReviewContainer";
import Footer from "../Footer/Footer";
import "./review.scss";
class Review extends Component {
  render() {
    return (
      <>
        <div className="show-review-wrapper">
          <div className="show-review-header">
            <img
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/review/reviewPcFace.svg"
              className="show-review-face-img"
            />
            <p className="review-title-text">
              <p>실제 구매한 고객님께서 작성해주셨어요</p>
              <p className="bold">숨김 없이 날 것 그대로!</p>
            </p>
            <div className="raiting-box flex-center">
              <div className="star-raiting flex-center">
                <div className="rating-num">
                  <span className="raiting-big">4.6</span>
                  <span className="raiting-short"> / 5</span>
                </div>
                <div className="rating-star-box">
                  <span>
                    <img
                      className="star-img"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
                    />
                  </span>
                  <span>
                    <img
                      className="star-img"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
                    />
                  </span>
                  <span>
                    <img
                      className="star-img"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
                    />
                  </span>
                  <span>
                    <img
                      className="star-img"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
                    />
                  </span>
                  <span>
                    <img
                      className="star-img"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
                    />
                  </span>
                </div>
                <p className="bold-light">
                  <span className="bold">5개</span>의 후기
                </p>
              </div>
              <div className="graph-rating flex-center">
                <div className="graph-rating-item-star">
                  <div className="percent-text blue-color">77%</div>
                  <span className="point-bar">
                    <span className="point-bar-front point-heigt-77"></span>
                  </span>
                  <div className="point-big-text">
                    5<span className="point-text">점</span>
                  </div>
                </div>
                <div className="graph-rating-item-star">
                  <div className="percent-text">15%</div>
                  <span className="point-bar">
                    <span className="point-bar-front point-heigt-15"></span>
                  </span>
                  <div className="point-big-text">
                    4<span className="point-text">점</span>
                  </div>
                </div>
                <div className="graph-rating-item-star">
                  <div className="percent-text">5%</div>
                  <span className="point-bar">
                    <span className="point-bar-front point-heigt-5"></span>
                  </span>
                  <div className="point-big-text">
                    3<span className="point-text">점</span>
                  </div>
                </div>
                <div className="graph-rating-item-star">
                  <div className="percent-text">1%</div>
                  <span className="point-bar">
                    <span className="point-bar-front point-heigt-2"></span>
                  </span>
                  <div className="point-big-text">
                    2<span className="point-text">점</span>
                  </div>
                </div>
                <div className="graph-rating-item-star">
                  <div className="percent-text">2%</div>
                  <span className="point-bar">
                    <span className="point-bar-front"></span>
                  </span>
                  <div className="point-big-text">
                    1<span className="point-text">점</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ReviewContainer />
        </div>
        <Footer />
      </>
    );
  }
}

export default Review;
