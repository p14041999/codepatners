import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Sub3Img from "../assets/sub3.svg";
import play from "../assets/play.svg";
import apple from "../assets/apple.svg";
import Rectangle2 from "../assets/Rectangle2.svg";
import Home from "../assets/Home.svg";
import Home2 from "../assets/Home2.svg";
import Transfer from "../assets/Transfer.svg";

import "../styles/Sub3.scss";

class Sub3 extends Component {
  render() {
    return (
      <div id="sub3" data-aos="fade-down">
        <div id="sub3-child1">
          <Carousel>
            <div>
              <img style={{ width: "45%" }} src={Home} />
            </div>
            <div>
              <img style={{ width: "45%" }} src={Home2} />
            </div>
            <div>
              <img style={{ width: "45%" }} src={Transfer} />
            </div>
          </Carousel>
        </div>
        <div id="sub3-child2">
          <h1>Securely store Zenith Coin with Zenith Wallet.</h1>
          <img id="rect" src={Rectangle2} />
          {/* <p>
            The highly the not having with lively. Our up with ran go her it
            gloomy the back, though however projected not for six with then,
            trusted as concepts belt.
          </p> */}
          <div id="sub3-btn-cont">
            <div className="sub3Btn">
              <img src={play} />
              <button>Play Store</button>
            </div>
            <div className="sub3Btn">
              <img src={apple} />
              <button>App Store</button>
            </div>
            {/* <h3>Wallet Coming Soon...</h3> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Sub3;
