import React, { Component } from "react";
import navSubInfo from "./NavSubInfo";
import "./NavSub.scss";

class NavSub extends Component {
  constructor(props) {
    super(props);
    this.state = { info: navSubInfo.info };
  }

  handleInfoState = () => {};

  handleProductComponent = (category) => {
    console.log(category.index);
    this.props.handleProductNav(category.index);
    this.props.handleSubNav();
  };

  render() {
    const { subNavActive, data } = this.props;

    return (
      <div className="NavSub">
        <ul role="menu" className="product-sub-nav">
          <div className="sub-nav-wrapper">
            {this.state.info.map((category) => (
              <li
                key={category.index}
                name={category.index}
                role="menuitem"
                className="sub-nav-item"
              >
                <div role="menuitem" tabIndex="1" className="nav-item">
                  <img
                    alt={category.alt}
                    className={category.className}
                    src={category.src}
                    onClick={() => this.handleProductComponent(category)}
                  />
                  <span className="item-name">{category.alt}</span>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default NavSub;
