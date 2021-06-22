import React, { Component } from "react";
import "../styles/Usage.scss";
import SmartContract from "./sub-components/SmartContract";
import NFT from "./sub-components/NFT";
import P2P from "./sub-components/P2P";
import DeFi from "./sub-components/DeFi";
export default class Usage extends Component {
  state = {
    defi: false,
    smartContract: false,
    p2p: true,
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
    return (
      <div className="container py-7 text-light " id="useCase">
        <h4>Use cases</h4>
        <div className="usage-content">
          <div className="usage-col">
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
              <p className="p-big">P2P Payments</p>
              <span className="active" id="usage-span1"></span>
            </div>
          </div>
          <div className="usage-col">
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
          </div>
          <div className="usage-col">
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
          </div>
          <div className="usage-col">
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
          </div>
        </div>
        {this.state.p2p && <P2P />}
        {this.state.smartContract && <SmartContract />}
        {this.state.defi && <DeFi />}
        {this.state.nft && <NFT />}
      </div>
    );
  }
}
