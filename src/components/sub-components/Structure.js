import { dark } from "@material-ui/core/styles/createPalette";
import React, { Component } from "react";

export default class Structure extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <div className="px-4 py-2">
        <h2 className={darkMode ? "about-h2" : "about-h2 text-dark"}>
          Business Structure
        </h2>
        <p className="text-secondary">
          Ordinarily we would have settled for two or three staff members, but
          as part of our plan to build a standard blockchain platform &
          technology company in Silicon Valley – California, we have perfected
          plans to get it right from the beginning which is why we are going the
          extra mile to ensure that we have competent, honest and hardworking
          employees to occupy all the available positions in our firm. The kind
          of blockchain platform & technology company we intend building and the
          business goals we want to achieve is what informed the amount we are
          ready to pay for the best hands available in and around Silicon Valley
          – California as long as they are willing and ready to work with us to
          achieve our business goals and objectives.
        </p>
      </div>
    );
  }
}
