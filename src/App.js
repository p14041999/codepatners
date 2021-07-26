import "./App.scss";
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
import Teame from "./components/Teame";
import Sub1 from "./components/Sub1";
import Sub6 from "./components/Sub6";
import Sub3 from "./components/Sub3";
import "./styles/mobile2.scss"

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
          <Timeline darkMode={darkMode} />
          <Sub3 />
          <Teame />
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
