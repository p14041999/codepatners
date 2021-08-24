import React, { Component } from "react";
import transakSDK from "@transak/transak-sdk";
import AOS from "aos";
// import sub1 from "../assets/sub1.svg";
import sub1 from "../assets/sub1.svg";
import key from "../assets/key.svg";
import clock from "../assets/speed.svg";
import hand from "../assets/clocke.svg";

import "../styles/Sub1.scss";

class Sub1 extends Component {
  handleBuyCoinBtn = () => {
    console.log("fff");
    let transak = new transakSDK({
      apiKey: "f6d61984-9cc4-4b7b-b000-e9b53c3176ea", // Your API Key
      environment: "STAGING", // STAGING/PRODUCTION
      defaultCryptoCurrency: "USDT[",
      walletAddress: "", // Your customer's wallet address
      themeColor: "000000", // App theme color
      fiatCurrency: "", // INR/GBP
      email: "", // Your customer's email address
      redirectURL: "",
      hostURL: window.location.origin,
      widgetHeight: "600px",
      widgetWidth: "350px",
    });
    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
      console.log(data);
    });

    // This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      transak.close();
    });
  };
  init = () => {
    AOS.init();
  };
  render() {
    // this.init();
    return (
      <div
        className="containerSub1"
        id="containerSub1"
        data-aos="fade-down"
        // data-aos="fade-zoom-in"
        // data-aos-offset="200"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="1500"
      >
        <div className="child1">
          <h1>Introducing Zenith Coin </h1>
          <p>
            Zenith Coin provides an easy-to-use digital money experience, with
            low fees and fast transactions, which confirms faster than the swipe
            of your credit card.
          </p>
          <div id="btn-cont">
            <div>
              <img src={key} />
              <span>Access</span>
            </div>
            <div>
              <img src={clock} />
              <span>Speed</span>
            </div>
            <div>
              <img src={hand} />
              <span>Certainty</span>
            </div>
          </div>
          <button className="btn btne1" disabled>
              Buy Zenith Coin Now
          </button>
        </div>
        <div className="child2 floating">
          <img src={sub1} />
        </div>
      </div>
    );
  }
}

export default Sub1;
