import React, { Component } from "react";
import "../styles/Footer.scss";
import Logo from "../assets/logo-primary.svg";
export default class Footer extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <>
        {darkMode ? (
          <div id="footer" className="container py-8 text-dark ">
            <div className="footer-row tab">
              <div className="footer-col-1">
                <div className="footer-logo-group text-primary">
                  <img src={Logo} alt="" />
                  <h2 className="ps-3" style={{ fontWeight: "normal" }}>
                    Zenith Chain
                  </h2>
                </div>
                <p>
                  Contact Zenith Chain Limited. regarding product and its
                  distribution.
                </p>
                <p>Email: info@zenithchain.co</p>
                <p>Address: vytauto str33, Vilnius Lithuania</p>
              </div>
              <div className="footer-col-2">
                <div className="footer-link-col">
                  <h5>Products</h5>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="https://zenithchain.net" 
                    target="_blank"
                     
                  >
                    <p>Zenith Coin</p>
                  </a>
                  {/* <a style={{textDecoration:"none",color:"black"}}target="_blank" href="https://docs.zenithchain.co">
                <p>Zenith Wallet</p>
              </a> */}
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co"
                  >
                    <p>Zenith Exchange</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co/Wallet"
                  >
                    <p>Zenith Pay</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://explorer.zenithchain.co/"
                  >
                    <p>Block Explorer</p>
                  </a>
                </div>
                <div className="footer-link-col">
                  <h5>For Businesses</h5>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co"
                  >
                    <p>Zenith Exchange API</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co/Wallet"
                  >
                    <p>Zenith Wallet API</p>
                  </a>
                </div>
                <div className="footer-link-col">
                  <h5>For Developer</h5>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co"
                  >
                    <p>Zenith Chain API</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co"
                  >
                    <p>Documentation</p>
                  </a>
                  <a
                    target="_blank"
                    href="https://docs.zenithchain.co/Contract"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p>Smart Contract Specs.</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co/Wallet"
                  >
                    <p>Connect to Metamask</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co/Token"
                  >
                    <p>ZRC Token Specifications</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-8 pt-6">
              <hr />
            </div>
            <p className="bold text-center pt-4 m-0" id="copyrights">
              &copy; 2021 All right researved by Zenith Chain and its owner
              Zenith Chain Limited.
            </p>

            {/*
             *
             * Absolute Items
             *
             *  */}
            <svg
              className="red-block"
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
                fill="#FF7171"
              />
              <path
                d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
                fill="#FF7171"
              />
              <path
                d="M9.69656 30.4092L0.639512 16.064L17.4632 15.3263L26.6517 29.6657L9.69656 30.4092Z"
                fill="#D32F2F"
              />
              <path
                d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
                fill="#FF7171"
              />
              <path
                d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
                fill="white"
              />
            </svg>
            <svg
              className="pink-block"
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
                fill="#E842CD"
              />
              <path
                d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
                fill="#E842CD"
              />
              <path
                d="M9.69656 30.4092L0.639512 16.064L17.4632 15.3263L26.6517 29.6657L9.69656 30.4092Z"
                fill="#D02FD3"
              />
              <path
                d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
                fill="#E842CD"
              />
              <path
                d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
                fill="white"
              />
            </svg>
            <svg
              className="green-block"
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
                fill="#65FF74"
              />
              <path
                d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
                fill="#65FF74"
              />
              <path
                d="M9.69644 30.4092L0.63939 16.064L17.4631 15.3263L26.6516 29.6657L9.69644 30.4092Z"
                fill="#27A242"
              />
              <path
                d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
                fill="#65FF74"
              />
              <path
                d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
                fill="white"
              />
            </svg>
            <svg
              className="blue-block"
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
                fill="#42E8E0"
              />
              <path
                d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
                fill="#42E8E0"
              />
              <path
                d="M9.69644 30.4092L0.63939 16.064L17.4631 15.3263L26.6516 29.6657L9.69644 30.4092Z"
                fill="#2FD3C7"
              />
              <path
                d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
                fill="#42E8E0"
              />
              <path
                d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
                fill="white"
              />
            </svg>
          </div>
        ) : (
          <div id="footer" className="container py-8 text-light darkBack">
            <div className="footer-row">
              <div className="footer-col-1">
                <div className="footer-logo-group text-primary">
                  <img src={Logo} alt="" />
                  <h2 className="ps-3" style={{ fontWeight: "normal" }}>
                    Zenith Chain
                  </h2>
                </div>
                <p>
                  Contact Zenith Chain Limited. regarding product and its
                  distribution.
                </p>
                <p>Email: info@zenithchain.co</p>
                <p>Address: vytauto str33, Vilnius Lithuania</p>
              </div>
              <div className="footer-col-2">
                <div className="footer-link-col">
                  <h5>Individuals</h5>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://zenithchain.co"
                  >
                    <p>Zenith Chain (ZTC)</p>
                  </a>
                  {/* <a style={{textDecoration:"none",color:"black"}}target="_blank" href="https://docs.zenithchain.co">
                <p>Zenith Wallet</p>
              </a> */}
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co"
                  >
                    <p>Zenith Exchange</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co/Wallet"
                  >
                    <p>Connect to Metamask</p>
                  </a>
                </div>
                <div className="footer-link-col">
                  <h5>For Businesses</h5>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co"
                  >
                    <p>Zenith Exchange API</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co/Wallet"
                  >
                    <p>Zenith Wallet API</p>
                  </a>
                </div>
                <div className="footer-link-col">
                  <h5>For Developer</h5>

                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co"
                  >
                    <p>Zenith Chain API</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co"
                  >
                    <p>Documentation</p>
                  </a>
                  <a
                    target="_blank"
                    href="https://docs.zenithchain.co/Contract"
                  >
                    <p>Smart Contract Specs.</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co/Wallet"
                  >
                    <p>Connect to Metamask</p>
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    target="_blank"
                    href="https://docs.zenithchain.co/Token"
                  >
                    <p>ZRC Token Specifications</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-8 pt-6">
              <hr />
            </div>
            <p className="bold text-center pt-4 m-0" id="copyrights">
              &copy; 2021 All right researved by Zenith Chain and its owner
              Zenith Chain Limited.
            </p>

            {/*
             *
             * Absolute Items
             *
             *  */}
            <svg
              className="red-block"
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
                fill="#FF7171"
              />
              <path
                d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
                fill="#FF7171"
              />
              <path
                d="M9.69656 30.4092L0.639512 16.064L17.4632 15.3263L26.6517 29.6657L9.69656 30.4092Z"
                fill="#D32F2F"
              />
              <path
                d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
                fill="#FF7171"
              />
              <path
                d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
                fill="white"
              />
            </svg>
            <svg
              className="pink-block"
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
                fill="#E842CD"
              />
              <path
                d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
                fill="#E842CD"
              />
              <path
                d="M9.69656 30.4092L0.639512 16.064L17.4632 15.3263L26.6517 29.6657L9.69656 30.4092Z"
                fill="#D02FD3"
              />
              <path
                d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
                fill="#E842CD"
              />
              <path
                d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
                fill="white"
              />
            </svg>
            <svg
              className="green-block"
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
                fill="#65FF74"
              />
              <path
                d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
                fill="#65FF74"
              />
              <path
                d="M9.69644 30.4092L0.63939 16.064L17.4631 15.3263L26.6516 29.6657L9.69644 30.4092Z"
                fill="#27A242"
              />
              <path
                d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
                fill="#65FF74"
              />
              <path
                d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
                fill="white"
              />
            </svg>
            <svg
              className="blue-block"
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
                fill="#42E8E0"
              />
              <path
                d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
                fill="#42E8E0"
              />
              <path
                d="M9.69644 30.4092L0.63939 16.064L17.4631 15.3263L26.6516 29.6657L9.69644 30.4092Z"
                fill="#2FD3C7"
              />
              <path
                d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
                fill="#42E8E0"
              />
              <path
                d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </>
    );
  }
}
