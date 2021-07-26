import React, { Component } from "react";
import "../styles/Sub6.scss";

class Sub6 extends Component {
  render() {
    return (
      <div className="father" data-aos="fade-down">
        <div className="son">
          <h4>1$</h4>
          <p>Current Price</p>
        </div>
        <div className="son">
          <h4>1005</h4>
          <p>Holders</p>
        </div>
        <div className="son">
          <h4>1000000</h4>
          <p>Supply</p>
        </div>
        <div className="son">
          <h4>1000000</h4>
          <p>Market Cap</p>
        </div>
      </div>
    );
  }
}

export default Sub6;
