import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { Component } from "react";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import Usage from "./components/Usage";
import About from "./components/About";
import Footer from "./components/Footer";
import NavMenu from "./components/NavbarMenu";
import Timeline from "./components/Timeline";
import TeamView from "./components/sub-components/TeamView";
import Features from "./components/Features";
import Partner from "./components/Partner";
import Teame from "./components/Teame";
import Sub1 from "./components/Sub1";
import Sub6 from "./components/Sub6";
import Sub5 from "./components/Sub5";
import Sub3 from "./components/Sub3";
import "./styles/mobile2.scss";
import video from "./assets/video.mp4";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      NavMenu: false,
      Team: false,
      data: {},
      darkMode: true,
    };
  }
  componentDidMount() {
    let cursor = window.document.querySelector(".cursor");
    let pointer = window.document.querySelector(".pointer");
    window.document.addEventListener("mousemove", (e) => {
      // console.log(e.pageY,e.pageX)
      cursor.setAttribute(
        "style",
        `top:${e.pageY - 25}px;left:${e.pageX - 25}px`
      );
      pointer.setAttribute(
        "style",
        `top:${e.pageY - 2.5}px;left:${e.pageX - 2.5}px`
      );
    });
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  handleChangeState = (val) => {
    this.setState({ ...this.state, NavMenu: val });
  };
  handleDarkModeChangeState = async (val) => {
    await this.setState({ ...this.state, darkMode: val });
    console.log(this.state.darkMode);
  };
  handleTeamChangeState = async (val, data) => {
    // console.log(data);
    await this.setState({ ...this.state, Team: val, data: data });
    console.log(this.state);
  };

  handleMetamaskClick = async () => {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x4F",
          chainName: "Zenith Chian",
          rpcUrls: ["https://dataserver-1.zenithchain.co/"],
          nativeCurrency: {
            name: "Zenith Coin",
            decimals: 18,
            symbol: "ZTC",
          },
          // blockExplorerUrls: ["https://goerli.etherscan.io"],
        },
      ],
    });
  };
  render() {
    const { darkMode } = this.state;
    return (
      <>
        <div
          className={darkMode ? "max-width bg-dark" : "max-width bg-light"}
          id="desktop"
        >
          {this.state.NavMenu && (
            <NavMenu
              handleChangeState={this.handleChangeState}
              darkMode={darkMode}
            />
          )}

          <Navbar
            NavMenu={this.state}
            darkMode={darkMode}
            darkModeFunc={this.handleDarkModeChangeState}
            handleChangeState={this.handleChangeState}
          />
          <div id="pop">
            <button className="btn-nav">Zenith Wallet</button>
            <button className="btn-nav" onClick={this.handleMetamaskClick}>
              Connect With MetaMask
            </button>
          </div>
          <Hero darkMode={darkMode} />
          <Usage darkMode={darkMode} />
          {/* <About darkMode={darkMode} team={this.handleTeamChangeState} /> */}
          {/* {this.state.Team ? (
            <TeamView
              team={this.handleTeamChangeState}
              data={this.state.data}
            />
          ) : null} */}
          <Features />
          <Sub1 />
          <Sub6 />
          <div id="videocont" data-aos="fade-down">
            <div id="videodiv">
              <h2>Zenith Chain</h2>
              <p>
                Zenith Chain is an innovative solution to bring programmability
                and interoperability. Zenith Chain relies on a system of 21
                validators with Proof of Staked Authority (PoSA) consensus that
                can support short block time and lower fees. The most bonded
                validator candidates of staking will become validators and
                produce blocks. The double-sign detection and other slashing
                logic guarantee security, stability, and chain finality
              </p>
            </div>
            <video id="video" controls loop autoPlay muted>
              <source src={video} type="video/mp4" />

              <source src="movie.ogg" type="video/ogg" />
            </video>
          </div>
          <Timeline />
          <Sub3 />
          <Sub5 />
          <Teame />
          <Partner />
        </div>

        <div
          className={
            darkMode ? "max-width pos-rel" : "max-width pos-rel darkBack"
          }
        >
          <Footer darkMode={darkMode} />
        </div>
        <span className="cursor"></span>
        <span className="pointer"></span>
      </>
    );
  }
}
