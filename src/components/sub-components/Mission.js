import React, { Component } from "react";

export default class Mission extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <div className="px-4 py-2">
        <h2 className={darkMode ? "about-h2" : "about-h2 text-dark"}>
          Mission & Vision
        </h2>
        <p className="text-secondary">
          Our vision is to build a blockchain company that will be among the
          largest blockchain ecosystem in the world; a business where everyone
          can transact directly and privately with confidence. Our mission is as
          a blockchain startup is to provide an incorruptible digital ledger of
          economic transactions that can be programmed to record not just
          financial transactions but virtually everything of value for clients
          from across the cyberspace.
        </p>
      </div>
    );
  }
}
