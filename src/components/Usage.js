import React, { Component } from "react";
import "../styles/Usage.scss";
import SmartContract from "./sub-components/SmartContract";
import NFT from "./sub-components/NFT";
import P2P from "./sub-components/P2P";
import DeFi from "./sub-components/DeFi";
export default class Usage extends Component {
  state = {
    defi: false,
    smartContract: true,
    p2p: false,
    nft: false,
  };
  constructor(props) {
    super(props);
    this.resetAll = this.resetAll.bind(this);
  }
  resetAll() {
    this.setState({
      defi: false,
      smartContract: false,
      p2p: false,
      nft: false,
    });
  }
  render() {
    const { darkMode } = this.props;
    return (
      <div
        className="container py-7 text-light "
        id="useCase"
        data-aos="fade-down"
      >
        <h4 className={darkMode ? "text-light" : "text-dark"}>Use cases</h4>
        <div className="usage-content">
          <div className="usage-col">
            {darkMode ? (
              <div
                className={
                  this.state.smartContract
                    ? "usage-card px-5 py-2 active"
                    : "usage-card px-5 py-2"
                }
                onClick={(e) => {
                  this.resetAll();
                  this.setState({ smartContract: true });
                }}
              >
                <p className="p-big">Smart Contracts</p>
                <span className="active" id="usage-span2"></span>
              </div>
            ) : (
              <div
                className={
                  this.state.smartContract
                    ? "usage-cardLight px-5 py-2 activeLight"
                    : "usage-cardLight px-5 py-2"
                }
                onClick={(e) => {
                  this.resetAll();
                  this.setState({ smartContract: true });
                }}
              >
                <p className="p-bigLight">Smart Contracts</p>
                <span className="active" id="usage-span2"></span>
              </div>
            )}
          </div>
          <div className="usage-col">
            {darkMode ? (
              <div
                className={
                  this.state.nft
                    ? "usage-card px-5 py-2 active"
                    : "usage-card px-5 py-2"
                }
                onClick={(e) => {
                  this.resetAll();
                  this.setState({ nft: true });
                }}
                id="usagebtn"
              >
                <p className="p-big">NFT's</p>
                <span className="active" id="usage-span3"></span>
              </div>
            ) : (
              <div
                className={
                  this.state.nft
                    ? "usage-cardLight px-5 py-2 activeLight"
                    : "usage-cardLight px-5 py-2"
                }
                onClick={(e) => {
                  this.resetAll();
                  this.setState({ nft: true });
                }}
                id="usagebtn"
              >
                <p className="p-bigLight">NFT's</p>
                <span className="active" id="usage-span3"></span>
              </div>
            )}
          </div>
          <div className="usage-col">
            {darkMode ? (
              <div
                className={
                  this.state.defi
                    ? "usage-card px-5 py-2 active"
                    : "usage-card px-5 py-2"
                }
                onClick={(e) => {
                  this.resetAll();
                  this.setState({ defi: true });
                }}
              >
                <p className="p-big">De-Finance</p>
                <span className="active" id="usage-span4"></span>
              </div>
            ) : (
              <div
                className={
                  this.state.defi
                    ? "usage-cardLight px-5 py-2 activeLight"
                    : "usage-cardLight px-5 py-2"
                }
                onClick={(e) => {
                  this.resetAll();
                  this.setState({ defi: true });
                }}
              >
                <p className="p-bigLight">De-Finance</p>
                <span className="active" id="usage-span4"></span>
              </div>
            )}
          </div>

          <div className="usage-col">
            {darkMode ? (
              <div
                className={
                  this.state.p2p
                    ? "usage-card px-5 py-2 active"
                    : "usage-card px-5 py-2"
                }
                onClick={(e) => {
                  this.resetAll();
                  this.setState({ p2p: true });
                }}
              >
                <p className="p-big">Tokenized BNB</p>
                <span className="active" id="usage-span1"></span>
              </div>
            ) : (
              <div
                className={
                  this.state.p2p
                    ? "usage-cardLight px-5 py-2 activeLight"
                    : "usage-cardLight px-5 py-2"
                }
                onClick={(e) => {
                  this.resetAll();
                  this.setState({ p2p: true });
                }}
              >
                <p className="p-bigLight">Tokenized BNB</p>
                <span className="active" id="usage-span1"></span>
              </div>
            )}
          </div>
        </div>
        {this.state.p2p && <P2P darkMode={darkMode} />}
        {this.state.smartContract && <SmartContract darkMode={darkMode} />}
        {this.state.defi && <DeFi darkMode={darkMode} />}
        {this.state.nft && <NFT darkMode={darkMode} />}
      </div>
    );
  }
}
