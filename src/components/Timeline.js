import React, { Component } from "react";
import "../styles/Timeline.scss";

class Timeline extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <>
        <div id="pc">
          <h3 id={darkMode ? "timeline-title" : "timeline-titleLight"}>
            Roadmap
          </h3>
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
                  2020
                </p>
                <h5 className="m-0 tlh5">Presales</h5>
                <p className="tlp">R&D and Concept Development</p>
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
                  2021
                </p>
                <h5 className="m-0 tlh5">Crypto Launch</h5>
                <p className="tlp">ICO & Hybrid Blockchain</p>
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
                  2022
                </p>
                <h5 className="m-0 tlh5">Digital Step-in</h5>
                <p className="tlp">Zenith pay -Digital Crypto Bank</p>
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
                  2023
                </p>
                <h5 className="m-0 tlh5">Tokenized Realtor</h5>
                <p className="tlp">Zenith Stay - Explore as a Realtor</p>
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
                  2020
                </p>
                <h5 className="m-0 tlh5">Presales</h5>
                <p className="tlp">R&D and Concept Development</p>
              </div>
            </div>

            <div className="timeline-comp">
              <div className="timeline-box bux2">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  2021
                </p>
                <h5 className="m-0 tlh5">Crypto Launch</h5>
                <p className="tlp">ICO & Hybrid Blockchain</p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  2022
                </p>
                <h5 className="m-0 tlh5">Digital Step-in</h5>
                <p className="tlp">Zenith pay -Digital Crypto Bank</p>
              </div>
            </div>
            <div className="timeline-comp">
              <div className="timeline-box ">
                <p
                  className="p-big bold tlHead"
                  style={{ textTransform: "uppercase" }}
                >
                  2023
                </p>
                <h5 className="m-0 tlh5">Tokenized Realtor</h5>
                <p className="tlp">Zenith Stay - Explore as a Realtor</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Timeline;
