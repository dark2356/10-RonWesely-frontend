import React, { Component } from "react";
import "./reviewitem.scss";
class Reviewitem extends Component {
  render() {
    const { rate, name, writed_at, ages, review_text } = this.props;
    return (
      <div className="review-item-box">
        <div className="star-box">
          <span>
            <img
              className="star"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
            />
          </span>
          <span>
            <img
              className="star"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
            />
          </span>
          <span>
            <img
              className="star"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
            />
          </span>
          <span>
            <img
              className="star"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
            />
          </span>
          <span>
            <img
              className="star"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/ratingStarFront.png"
            />
          </span>
        </div>
        <div className="review-contents">{review_text}</div>
        <div className="review-contets-flexbox">
          <div className="review-name-age">
            {name} | {ages}
          </div>
          <div className="review-date">{writed_at}</div>
        </div>
      </div>
    );
  }
}

export default Reviewitem;
