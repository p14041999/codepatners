import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <div className="px-4 py-2">
        <h2 className={darkMode ? "about-h2" : "about-h2 text-dark"}>
          About Us
        </h2>
        <p className="text-secondary">
          Zenith Chain is going to offer varieties of services within the scope
          of the blockchain (cryptocurrency and digital payment system) industry
          in the United States of America. Our intention of starting our
          blockchain technology company is to work with different exchange and
          trading companies cum bitcoin traders and people and organizations
          that make online transactions in our immediate community and people on
          the cyber space who make online transactions from all over the world.
          We are prepared to make profits from the industry, and we will do all
          that is permitted by the law in the United States to achieve our
          business goals, aim and ambition.
        </p>
      </div>
    );
  }
}
