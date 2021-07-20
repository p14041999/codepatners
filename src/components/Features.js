import React, { Component } from "react";
import "../styles/Feature.scss";

class Features extends Component {
  render() {
    return (
      <>
        <div className="feat-cont">
          <h1>Features</h1>
          <p style={{ color: "gray", textAlign: "center", fontSize: 20 }}>
            Zenith Chian combines the best of Ethereum and sovereign blockchains
            into an attractive feature set. Built by developers, for developers.
          </p>
          <div className="carduu-cont">
            <div className="top-cont">
              <div className="carduu">
                <img
                  style={{ width: 45 }}
                  alt=""
                  src="https://polygon.technology/wp-content/uploads/2021/01/icon-eth-compatibility.svg"
                />
                <h4>ETH Compatibility</h4>
                <p>
                  Industry dominance, established tech stack, tools, languages,
                  standards, enterprise adoption
                </p>
              </div>
              <div className="carduu">
                <img
                  alt=""
                  src="	https://polygon.technology/wp-content/uploads/2021/01/icon-scalability.svg"
                />
                <h4 style={{ marginTop: 20 }}>Scalability</h4>
                <p>
                  Dedicated blockchains, scalable consensus algorithms, custom
                  Wasm execution environments
                </p>
              </div>
              <div className="carduu">
                <img
                  alt=""
                  src="https://polygon.technology/wp-content/uploads/2021/01/icon-security.svg"
                />
                <h4>Security</h4>
                <p>
                  Modular ''security as a service'', provided either by Ethereum
                  or by a pool of professional validators
                </p>
              </div>
              <div className="carduu">
                <img
                  alt=""
                  style={{ marginTop: -10 }}
                  src="	https://polygon.technology/wp-content/uploads/2021/01/icon-sovereignity.svg"
                />
                <h4>Sovereignty</h4>
                <p>
                  Dedicated throughput/resources, fully customizable tech stack,
                  sovereign governance
                </p>
              </div>
            </div>
            <div className="top-cont">
              <div className="carduu">
                <img
                  alt=""
                  src="https://polygon.technology/wp-content/uploads/2021/01/icon-interoperability.svg"
                />
                <h4>Interoperability</h4>
                <p>
                  Native support for arbitrary message passing (tokens, contract
                  calls etc), bridges to external systems
                </p>
              </div>
              <div className="carduu">
                <img
                  alt=""
                  src="https://polygon.technology/wp-content/uploads/2021/01/icon-ux.svg"
                />
                <h4>User Experience</h4>
                <p>
                  Comparable to Web2, “zero-gas” transactions, instant
                  (deterministic) transaction finality
                </p>
              </div>
              <div className="carduu">
                <img
                  alt=""
                  src="https://polygon.technology/wp-content/uploads/2021/01/icon-devx.svg"
                  style={{
                    paddingTop: 40,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                />
                <h4 style={{ marginTop: 80 }}>Developer Experience</h4>
                <p>
                  Equivalent to Ethereum, no protocol level knowledge required,
                  no token deposits, fees or permissions
                </p>
              </div>
              <div className="carduu">
                <img
                  alt=""
                  src="https://polygon.technology/wp-content/uploads/2021/01/icon-modularity.svg"
                />
                <h4>Modularity</h4>
                <p>
                  High customizability, extensibility and upgradeability, short
                  time-to-market, community collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Features;
