import React, { Component } from "react";
import "../styles/Hero.scss";
import "../styles/Mobile.scss";
import HeroImage from "../assets/heroImage.png";
import { Facebook, Twitter, YouTube, Instagram } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/styles";

class Hero extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="container" id="hero-container">
        <div className="hero-area py-7" id="hero-comp">
          <div className="col">
            <div className="get-started">
              <p class="bold text-primary">Get Started with zenith chain</p>
              <svg
                className="ps-3"
                id="arrow-svg"
                width="35"
                height="16"
                viewBox="0 0 35 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.7071 8.70711C35.0976 8.31659 35.0976 7.68342 34.7071 7.2929L28.3431 0.928935C27.9526 0.53841 27.3195 0.53841 26.9289 0.928935C26.5384 1.31946 26.5384 1.95262 26.9289 2.34315L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.70711ZM-8.74228e-08 9L34 9L34 7L8.74228e-08 7L-8.74228e-08 9Z"
                  fill="#268FF1"
                />
              </svg>
            </div>
            <h1 className="text-light">
              The Hybrid Smart Chain for Extensive Use
            </h1>

            <p className="text-secondary">
              Zenith Chain is going to offer varieties of services within the
              scope of the blockchain (cryptocurrency and digital payment
              system) industry in the United States of America.{" "}
            </p>
            <button
              className="get-started border-0 bg-primary text-light px-3 mt-5"
              style={{ margintop: "50px" }}
            >
              <h5>Explore Zenith Chain</h5>
              <svg
                className="ps-3"
                width="35"
                height="16"
                viewBox="0 0 35 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.7071 8.70711C35.0976 8.31659 35.0976 7.68342 34.7071 7.2929L28.3431 0.928935C27.9526 0.53841 27.3195 0.53841 26.9289 0.928935C26.5384 1.31946 26.5384 1.95262 26.9289 2.34315L32.5858 8L26.9289 13.6569C26.5384 14.0474 26.5384 14.6805 26.9289 15.0711C27.3195 15.4616 27.9526 15.4616 28.3431 15.0711L34.7071 8.70711ZM-8.74228e-08 9L34 9L34 7L8.74228e-08 7L-8.74228e-08 9Z" />
              </svg>
            </button>
            <div className="icons-container">
              <a href="#">
                <Facebook className="icons" />
              </a>
              <a href="#">
                <Twitter className="icons" />
              </a>
              <a href="#">
                <YouTube className="icons" />
              </a>
              <a href="#">
                <Instagram className="icons" />
              </a>
            </div>
          </div>
          <div className="col">
            <img id="hero-img" src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
