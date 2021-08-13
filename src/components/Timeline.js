import React, { Component } from "react";
import timeline from "../assets/timeline.png";
import "../styles/Mobile.scss";

class Timeline extends Component {
  render() {
    return (
      <>
        <div id="temi">
          <div id="pc">
            <h1 style={{ textAlign: "center" }} className="text-light">
              Timeline
            </h1>
            <img style={{ width: "100%" }} src={timeline} />
          </div>
          <div id="mobileTimeline" style={{ display: "none" }}>
            <h1 style={{ textAlign: "center" }} className="text-light">
              Timeline
            </h1>
            <div className="hrline">
              <span className="round r1">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r2">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r3">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r4">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r5">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r6">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r7">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r8">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r9">&nbsp; &nbsp; &nbsp; </span>
              <span className="round r10">&nbsp; &nbsp; &nbsp; </span>
            </div>
            <div className="text-light timeline-cont">
              <div>
                <h3>July 2020</h3>
                <p>Meet Up and R&D and Concept Development</p>
              </div>
              <div>
                <h3>January 2021</h3>
                <p> Zenith Blockchain Development</p>
              </div>
              <div>
                <h3>April 2021</h3>
                <p> Zenith Coin Development</p>
              </div>
              <div>
                <h3>June 2021</h3>
                <p>Zenith chain Incorporation in Lithuania</p>
              </div>
              <div>
                <h3>July 2021</h3>
                <p>Round up of zenith Chain Development.</p>
              </div>
              <div>
                <h3>August 2021</h3>
                <p>Private Presale (ICO) expected Goal $2,500,000</p>
              </div>
              <div>
                <h3>September 2021</h3>
                <p>
                  Crypto Launch for Public Sale, Listing On Bitmart exchange,
                  p2pb2b Exchange, Coinmarketcap listing, coin gecko listing.
                </p>
              </div>
              <div>
                <h3>October 2021</h3>
                <p>
                  listing on more exchanges, Binance Exchange, ZBG exchange,
                  Kucoin exchange, Gate.io, MXC exchange.
                </p>
              </div>
              <div>
                <h3>December 2021</h3>
                <p>
                  Zenith Centralised Exchange Beta Version testing and Launch of
                  main Version.
                </p>
              </div>
              <div>
                <h3>March 2022</h3>
                <p>
                  Launch of the Zenith Pay, the Crypto digital bank/visa Cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Timeline;
