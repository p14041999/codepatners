import React, { Component } from "react";
import logo from "../assets/logo.svg";
import logoblue from "../assets/logoblue.svg";
import "../styles/Navbar.scss";
import { FormControlLabel, Switch } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import CastConnectedIcon from "@material-ui/icons/CastConnected";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default class Navabar extends Component {
  constructor() {
    super();
    this.state = {
      NavMenu: false,
      darkMode: true,
      button: false,
      navDrop: false,
    };
  }

  handleNavDrop = () => {
    this.setState({ navDrop: !this.state.navDrop });
  };

  handleMenuBtnClick = () => {
    // console.log(this.props);
    const { handleChangeState, NavMenu } = this.props;
    this.setState({ NavMenu: !this.state.NavMenu });
    handleChangeState(!this.state.NavMenu);
  };
  handleDarkMode = async () => {
    const { darkModeFunc } = this.props;
    // console.log("hehe");
    await this.setState({ darkMode: !this.state.darkMode });
    darkModeFunc(this.state.darkMode);
  };
  handleRightArrow = () => {
    this.setState({ button: !this.state.button });
  };
  render() {
    const { darkModeFunc, darkMode } = this.props;
    return (
      <>
        <div className="container py-3" id="navbar-cont">
          <div className="nav-top" id="navbar">
            <div onClick={this.handleMenuBtnClick}>
              {darkMode ? (
                <div id="menubtn">
                  {/* <span
                  className={this.state.NavMenu ? "blue" : "hamburger"}
                ></span> */}
                  <MenuIcon
                    id="ase"
                    className={this.state.NavMenu ? "blue" : "hamburger"}
                    style={{ fontSize: 45 }}
                  />
                </div>
              ) : (
                <div id="menubtn">
                  {/* <span
                  className={this.state.NavMenu ? "hamburger" : "blue"}
                ></span> */}
                  <MenuIcon
                    style={{ fontSize: 45 }}
                    className={this.state.NavMenu ? "hamburger" : "blue"}
                  />
                </div>
              )}
            </div>
            {darkMode ? (
              <div id="logo-cont" style={{ marginLeft: 213 }}>
                {this.state.NavMenu ? (
                  <img src={logoblue} id="company-logoblue" alt="" />
                ) : (
                  <img src={logo} id="company-logo" alt="" />
                )}
              </div>
            ) : (
              <div id="logo-cont" style={{ marginLeft: 213 }}>
                {this.state.NavMenu ? (
                  <img src={logo} id="company-logoblue" alt="" />
                ) : (
                  <img src={logoblue} id="company-logo" alt="" />
                )}
              </div>
            )}
            <ArrowForwardIcon
              onClick={this.handleRightArrow}
              className="text-light px-3 errow"
              style={{ display: "none" }}
            />
            {/* <span class="fal"></span> */}

            {/* <div>
            <FormControlLabel
              style={
                this.state.darkMode
                  ? { color: "white", fontFamily: "Rubik" }
                  : { color: "#171429", fontFamily: "Rubik" }
              }
              control={
                <Switch
                  checked={this.state.darkMode}
                  onChange={this.handleDarkMode}
                  color="primary"
                />
              }
              label="Dark Mode"
            />
          </div> */}
            {/* id="pop" */}
            <div className="nav-btn" style={{ display: "flex" }}>
              <button className="btn-nav" style={{ height: 45, width: 150 }}>
                Zenith Wallet
              </button>
              <div>
                <button
                  className="btn-nav"
                  onClick={this.handleNavDrop}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 45,
                    width: 200,
                    marginRight: 40,
                  }}
                >
                  Connect With Wallet
                  <ArrowDropDownIcon />
                </button>
                {this.state.navDrop ? (
                  <ul
                    className="backGrad navdrop"
                    style={{ listStyle: "none", position: "absolute" }}
                  >
                    <li
                      className="text-light"
                      onClick={this.handleMetamaskClick}
                    >
                      Connect With MetaMask
                    </li>
                    <li className="text-light">Connect With Zenith Wallet</li>
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {this.state.button ? (
          <div className="py-2" style={{ backgroundColor: "#1f1c35" }}>
            <ul>
              <li
                style={{ listStyle: "none" }}
                className="text-light py-1 row-center"
              >
                <AccountBalanceWalletIcon />
                <span className="px-2">Zenith Wallet</span>
              </li>
              <li
                style={{ listStyle: "none" }}
                className="text-light py-1 row-center"
              >
                <CastConnectedIcon />
                <span className="px-2">Connect With Metamask</span>
              </li>
            </ul>
          </div>
        ) : null}
      </>
    );
  }
}
