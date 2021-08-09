import React, { Component } from "react";
import "../styles/Timeline.scss";

class Timeline extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <>
        <div id="pc">
          <h2
            id={darkMode ? "timeline-title" : "timeline-titleLight"}
            style={{ textAlign: "center", fontSize: 45 }}
          >
            Roadmap
          </h2>
          <div className="py-3 px-3" id="timeline-cont">
            <div className="vertical-line"></div>
            <div className="timeline-comp " id="box1">
              <div
                className={
                  darkMode ? "timeline-box left" : "timeline-boxLight left"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  July 2020
                </p>
                <p className="m-0 tlh5">
                  Meetup and R&D and Concept Development
                </p>
                {/* <p className="tlp">R&D and Concept Development</p> */}
              </div>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
            </div>

            <div className="timeline-comp" id="box2">
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <div
                className={
                  darkMode ? "timeline-box right" : "timeline-boxLight right"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  January 2021
                </p>
                <p className="m-0 tlh5">Zenith Blockchain Development</p>
                {/* <p className="tlp" id="api1">
                  ICO & Hybrid Blockchain Centralised Exchange
                </p> */}
              </div>
            </div>
            <div className="timeline-comp" id="box3">
              <div
                className={
                  darkMode ? "timeline-box left" : "timeline-boxLight left"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  April 2021
                </p>
                <p className="m-0 tlh5">Zenith Coin Development</p>
                {/* <p className="tlp">Zenith pay -Digital Crypto Bank</p> */}
              </div>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
            </div>
            <div className="timeline-comp" id="box4">
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <div
                className={
                  darkMode ? "timeline-box right" : "timeline-boxLight right"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  June 2021
                </p>
                <p className="m-0 tlh5">
                  Zenith chain Incorporation in Lithuania
                </p>
                {/* <p className="tlp">Zenith Stay - Explore as a Realtor</p> */}
              </div>
            </div>
            <div className="timeline-comp" id="box3">
              <div
                className={
                  darkMode ? "timeline-box left" : "timeline-boxLight left"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  July 2021
                </p>
                <p className="m-0 tlh5">
                  Round up of zenith Chain Development.
                </p>
                {/* <p className="tlp">Zenith pay -Digital Crypto Bank</p> */}
              </div>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
            </div>
            <div className="timeline-comp" id="box4">
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <div
                className={
                  darkMode ? "timeline-box right" : "timeline-boxLight right"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  August 2021
                </p>
                <p className="m-0 tlh5 end">
                  Beginning Certik Audit and lease Authority{" "}
                </p>
                {/* <p className="tlp">Zenith Stay - Explore as a Realtor</p> */}
              </div>
            </div>
            <div className="timeline-comp" id="box3">
              <div
                className={
                  darkMode ? "timeline-box left" : "timeline-boxLight left"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  September
                </p>
                <p className="m-0 tlh5">
                  Crypto Launch for Public Sale, Listing On Bitmart exchange,
                  p2pb2b Exchange, Coinmarketcap listing, coin gecko listing.
                </p>
                {/* <p className="tlp">Zenith pay -Digital Crypto Bank</p> */}
              </div>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
            </div>
            <div className="timeline-comp" id="box4">
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <div
                className={
                  darkMode ? "timeline-box right" : "timeline-boxLight right"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  October 2021
                </p>
                <p className="m-0 tlh5 end">
                  Listing on more exchanges, Binance Exchange, ZBG exchange,
                  Kucoin exchange, Gate.io, MXC exchange.
                </p>
                {/* <p className="tlp">Zenith Stay - Explore as a Realtor</p> */}
              </div>
            </div>
            <div className="timeline-comp" id="box3">
              <div
                className={
                  darkMode ? "timeline-box left" : "timeline-boxLight left"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  December 2021
                </p>
                <p className="m-0 tlh5">
                  Zenith Centralised Exchange Beta Version testing and Launch of
                  main Version.
                </p>
                {/* <p className="tlp">Zenith pay -Digital Crypto Bank</p> */}
              </div>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
            </div>
            <div className="timeline-comp" id="box4">
              <div
                className={
                  darkMode ? "timeline-box hide" : "timeline-box lightHide"
                }
              ></div>
              <span
                className={darkMode ? "hrline hide" : "hrline lightHide"}
              ></span>
              <span className={darkMode ? "bluedot" : "bluedotLight"}>
                &nbsp;
              </span>
              <span className={darkMode ? "hrline" : "hrlineLight"}></span>
              <div
                className={
                  darkMode ? "timeline-box right" : "timeline-boxLight right"
                }
              >
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  March 2022{" "}
                </p>
                <p className="m-0 tlh5 end">
                  Launch of the Zenith Pay, the Crypto digital bank/visa Cards
                </p>
                {/* <p className="tlp">Zenith Stay - Explore as a Realtor</p> */}
              </div>
            </div>
          </div>
        </div>
        <div id="mobileTimeline">
          <h3 class="py-3 px-3" id="timeline-title">
            Roadmap
          </h3>
          <div className="py-3 px-3" id="timeline-cont">
            <div className="timeline-comp">
              <div className="timeline-box">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  July 2020
                </p>
                {/* <p className="m-0 tlh5">Presales</p> */}
                <p className="tlp ">Meet Up and R&D and Concept Development</p>
              </div>
            </div>

            <div className="timeline-comp">
              <div className="timeline-box bux2">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  January 2021
                </p>
                {/* <p className="m-0 tlh5">Crypto Launch</p> */}
                <p className="tlp">Zenith Blockchain Development</p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  April 2021
                </p>
                {/* <p className="m-0 tlh5">Digital Step-in</p> */}
                <p className="tlp">Zenith Coin Development</p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  June 2021
                </p>
                {/* <p className="m-0 tlh5">Tokenized Realtor</p> */}
                <p className="tlp">Zenith chain Incorporation in Lithuania</p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  July 2021
                </p>
                {/* <p className="m-0 tlh5">Tokenized Realtor</p> */}
                <p className="tlp">Round up of zenith Chain Development.</p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  August 2021
                </p>
                {/* <p className="m-0 tlh5">Tokenized Realtor</p> */}
                <p className="tlp">
                  Beginning Certik Audit and lease Authority
                </p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  August 2021
                </p>
                {/* <p className="m-0 tlh5">Tokenized Realtor</p> */}
                <p className="tlp">
                  Private Presale (ICO) expected Goal $2,500,000
                </p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  September
                </p>
                {/* <p className="m-0 tlh5">Tokenized Realtor</p> */}
                <p className="tlp">
                  Crypto Launch for Public Sale, Listing On Bitmart exchange,
                  p2pb2b Exchange, Coinmarketcap listing, coin gecko listing.
                </p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  October 2021
                </p>
                {/* <p className="m-0 tlh5">Tokenized Realtor</p> */}
                <p className="tlp">
                  Listing on more exchanges, Binance Exchange, ZBG exchange,
                  Kucoin exchange, Gate.io, MXC exchange.
                </p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  December 2021
                </p>
                {/* <p className="m-0 tlh5">Tokenized Realtor</p> */}
                <p className="tlp">
                  Zenith Centralised Exchange Beta Version testing and Launch of
                  main Version.
                </p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  March 2022{" "}
                </p>
                {/* <p className="m-0 tlh5">Tokenized Realtor</p> */}
                <p className="tlp">
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
