import React, { Component } from "react";
import "../styles/About.scss";
import AboutUs from "./sub-components/AboutUs";
import Mission from "./sub-components/Mission";
import Structure from "./sub-components/Structure";
import Team from "./sub-components/Team";

export default class About extends Component {
  state = {
    about: true,
    mission: false,
    structure: false,
    team: false,
  };
  constructor(props) {
    super(props);
    const { team } = this.props;
    this.clearState = this.clearState.bind(this);
    // console.log(team);
  }
  clearState() {
    this.setState({
      about: false,
      mission: false,
      structure: false,
      team: false,
    });
  }
  render() {
    const { team, darkMode } = this.props;
    // console.log(team);
    return (
      <>
        <div className="container text-light py-7 desktop" id="aboutus">
          <h4 className={darkMode ? "text-light" : "text-dark"}>
            About Zenith
          </h4>
          <div className="about-row">
            <div className="about-sidebar">
              {/* {darkMode ? (
                <div
                  className={
                    this.state.about
                      ? "about-card active text-info"
                      : "about-card"
                  }
                  onClick={(e) => {
                    this.clearState();
                    this.setState({ about: true });
                  }}
                >
                  <p className="p-big m-0 px-3 py-4">About Us</p>
                </div>
              ) : (
                <div
                  className={
                    this.state.about
                      ? "about-cardLight activeLight text-info"
                      : "about-cardLight"
                  }
                  onClick={(e) => {
                    this.clearState();
                    this.setState({ about: true });
                  }}
                >
                  <p className="p-big m-0 px-3 py-4">About Us</p>
                </div>
              )} */}
              {/* {darkMode ? (
                <div
                  className={
                    this.state.mission
                      ? "about-card active text-info"
                      : "about-card"
                  }
                  onClick={(e) => {
                    this.clearState();
                    this.setState({ mission: true });
                  }}
                >
                  <p className="p-big m-0 px-3 py-4">Mission & Vision</p>
                </div>
              ) : (
                <div
                  className={
                    this.state.mission
                      ? "about-cardLight activeLight text-info"
                      : "about-cardLight"
                  }
                  onClick={(e) => {
                    this.clearState();
                    this.setState({ mission: true });
                  }}
                >
                  <p className="p-big m-0 px-3 py-4">Mission & Vision</p>
                </div>
              )} */}
              {/* {darkMode ? (
                <div
                  className={
                    this.state.structure
                      ? "about-card active text-info"
                      : "about-card"
                  }
                  onClick={(e) => {
                    this.clearState();
                    this.setState({ structure: true });
                  }}
                >
                  <p className="p-big m-0 px-3 py-4">Business Structure</p>
                </div>
              ) : (
                <div
                  className={
                    this.state.structure
                      ? "about-cardLight activeLight text-info"
                      : "about-cardLight"
                  }
                  onClick={(e) => {
                    this.clearState();
                    this.setState({ structure: true });
                  }}
                >
                  <p className="p-big m-0 px-3 py-4">Business Structure</p>
                </div>
              )} */}
              {darkMode ? (
                <div
                  className={
                    this.state.team
                      ? "about-card active text-info"
                      : "about-card"
                  }
                  onClick={(e) => {
                    this.clearState();
                    this.setState({ team: true });
                  }}
                >
                  <p className="p-big m-0 px-3 py-4">Team</p>
                </div>
              ) : (
                <div
                  className={
                    this.state.team
                      ? "about-cardLight activeLight text-info"
                      : "about-cardLight"
                  }
                  onClick={(e) => {
                    this.clearState();
                    this.setState({ team: true });
                  }}
                >
                  <p className="p-big m-0 px-3 py-4">Team</p>
                </div>
              )}
            </div>
            <div className={darkMode ? "about-content" : "about-contentLight"}>
              {this.state.about && <AboutUs darkMode={darkMode} />}
              {this.state.mission && <Mission darkMode={darkMode} />}
              {this.state.structure && <Structure darkMode={darkMode} />}
              {this.state.team && <Team team={team} darkMode={darkMode} />}
            </div>
          </div>
        </div>
        <div className="container text-light py-7 mobile">
          <h4 className={darkMode ? "text-light" : "text-dark"}>
            About Zenith
          </h4>
          <div className="about-row">
            <div className="about-sidebar">
              <div className="about-carde">
                <p
                  className={
                    darkMode
                      ? "p-big m-0 px-3 py-4 about-card-title active text-info"
                      : "p-big m-0 px-3 py-4 about-card-title activeLight text-info"
                  }
                >
                  About Us
                </p>
                <div
                  className={
                    darkMode
                      ? "about-card active text-info"
                      : "about-cardLight activeLight text-info"
                  }
                >
                  <AboutUs />
                </div>
              </div>
              <div className="about-carde">
                <p
                  className={
                    darkMode
                      ? "p-big m-0 px-3 py-4 about-card-title active text-info"
                      : "p-big m-0 px-3 py-4 about-card-title activeLight text-info"
                  }
                >
                  Mission & Vision
                </p>
                <div
                  className={
                    darkMode
                      ? "about-card active text-info"
                      : "about-cardLight activeLight text-info"
                  }
                >
                  <Mission />
                </div>
              </div>
              <div className="about-carde">
                <p
                  className={
                    darkMode
                      ? "p-big m-0 px-3 py-4 about-card-title active text-info"
                      : "p-big m-0 px-3 py-4 about-card-title activeLight text-info"
                  }
                >
                  Business Structure
                </p>

                <div
                  className={
                    darkMode
                      ? "about-card active text-info"
                      : "about-cardLight activeLight text-light"
                  }
                >
                  <Structure />
                </div>
              </div>
              <div className="about-carde">
                <p
                  className={
                    darkMode
                      ? "p-big m-0 px-3 py-4 about-card-title active text-info"
                      : "p-big m-0 px-3 py-4 about-card-title activeLight text-info"
                  }
                >
                  Team
                </p>
                <div
                  className={
                    darkMode
                      ? "about-card active text-info"
                      : "about-cardLight activeLight text-info"
                  }
                >
                  <Team team={team} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
