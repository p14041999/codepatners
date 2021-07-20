import React, { Component } from "react";
import { Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import ceo from "../assets/ceo.svg";
import cto from "../assets/cto.svg";
import dir from "../assets/director.svg";
import "../styles/teame.scss";

class Teame extends Component {
  render() {
    return (
      <div className="teame">
        <h2>Core Team</h2>
        <div className="team-contee">
          <div className="team-card">
            <img src={ceo} />
            <h5 className="text-light">Jonathan Emmanuel</h5>
            <p className="text-light">Founder / CEO</p>
            <div className="icons-container">
              <a href="#">
                <Facebook className="icons" />
              </a>
              <a href="#">
                <Twitter className="icons" />
              </a>
              <a href="#">
                <LinkedIn className="icons" />
              </a>
            </div>
          </div>
          <div className="team-card">
            <img src={cto} />
            <h5 className="text-light">Rajesh Chinnadurai</h5>
            <p className="text-light">Co-Founder / CTO</p>
            <div className="icons-container">
              <a href="#">
                <Facebook className="icons" />
              </a>
              <a href="#">
                <Twitter className="icons" />
              </a>
              <a href="#">
                <LinkedIn className="icons" />
              </a>
            </div>
          </div>
          <div className="team-card">
            <img src={dir} />
            <h5 className="text-light">Jerome Jones</h5>
            <p className="text-light">Director</p>
            <div className="icons-container">
              <a href="#">
                <Facebook className="icons" />
              </a>
              <a href="#">
                <Twitter className="icons" />
              </a>
              <a href="#">
                <LinkedIn className="icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teame;
