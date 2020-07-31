import React, { Component } from "react";
import Reviewitem from "./reviewitem";
import "./ReviewContainer.scss";
import Config from "../../config";

class ReviewContainer extends Component {
  constructor() {
    super();
    this.state = {
      review_result: [],
    };
  }

  componentDidMount() {
    fetch(`${Config.Review}/order/Review`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ review_result: res.review_result });
      });
  }

  render() {
    const { review_result } = this.state;
    return (
      <>
        <div className="show-review-content">
          {review_result.map((item) => {
            return (
              <Reviewitem
                rate={item.rate}
                name={item.name}
                ages={item.ages}
                writed_at={item.writed_at}
                review_text={item.review_text}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default ReviewContainer;
