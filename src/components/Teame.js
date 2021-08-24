import React, { Component } from "react";
import { Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import ceo from "../assets/jonn.svg";
import cto from "../assets/cto2.jpeg";
import coo from "../assets/coo.jpeg";
import dir from "../assets/jermos.jpeg";
import "../styles/teame.scss";

class Teame extends Component {
  render() {
    return (
      <div className="teame" data-aos="fade-down">
        <h2 style={{ marginTop: 143 }}>Core Team</h2>
        <div className="team-contee">
          <div className="team-card">
            <img src={ceo} />
            <h5 className="text-light">Jonathan Emmanuel</h5>
            <p className="text-light">Founder / CEO</p>
            <div className="icons-container">
              <a href="#">
                <Facebook className="icons" />
              </a>
              <a href="https://twitter.com/Je_zenith">
                <Twitter className="icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/engrjonathan"
                target="_blank"
              >
                <LinkedIn className="icons" />
              </a>
            </div>
          </div>
          <div className="team-card">
            <img
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                objectFit: "fill",
              }}
              src={cto}
            />
            <h5 className="text-light">Rajesh Chinnadurai</h5>
            <p className="text-light">Co-Founder / CTO</p>
            <div className="icons-container">
              <a href="https://www.facebook.com/rajeshodcvec" target="_blank">
                <Facebook className="icons" />
              </a>
              <a href="https://twitter.com/rajesh_odc?s=08" target="_blank">
                <Twitter className="icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-chinnadurai-a0ab4460"
                target="_blank"
              >
                <LinkedIn className="icons" />
              </a>
            </div>
          </div>
          <div className="team-card">
            <img style={{ borderRadius: "50%" }} src={dir} />
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
          <div className="team-card">
            <img src={coo} style={{ borderRadius: "50%" }} />
            <h5 className="text-light">Dimeji Tomori</h5>
            <p className="text-light">Chief Operating Officer / COO</p>
            <div className="icons-container">
              <a href="#">
                <Facebook className="icons" />
              </a>
              <a href="#">
                <Twitter className="icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/dimeji-tomori-4a73029"
                target="_blank"
              >
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
