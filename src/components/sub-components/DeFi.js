import React, { Component } from "react";
import DeFiLogo from "../../assets/de-fi.svg";
export default class DeFi extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <div className="py-7">
        <div className="row">
          <div className="col">
            <h2 className={darkMode ? "text-light" : "text-dark"}>
              Build Decentralized Finance Products with Zenith
            </h2>
            <p className="text-secondary">
              Decentralized finance (DeFi)
              <br />
              A global, open alternative to the current financial system.
              <br />
              Products that let you borrow, save, invest, trade, and more.
              <br />
              Based on open-source technology that anyone can program with.
              <br />
              DeFi is an open and global financial system built for the internet
              age – an alternative to a system that's opaque, tightly
              controlled, and held together by decades-old infrastructure and
              processes. It gives you control and visibility over your money. It
              gives you exposure to global markets and alternatives to your
              local currency or banking options. DeFi products open up financial
              services to anyone with an internet connection and they're largely
              owned and maintained by their users. So far tens of billions of
              dollars worth of crypto has flowed through DeFi applications and
              it's growing every day.
              <br />
              DeFi is a collective term for financial products and services that
              are accessible to anyone who can use Ethereum – anyone with an
              internet connection. With DeFi, the markets are always open and
              there are no centralized authorities who can block payments or
              deny you access to anything. Services that were previously slow
              and at risk of human error are automatic and safer now that
              they're handled by code that anyone can inspect and scrutinize.
              <br />
              There's a booming crypto economy out there, where you can lend,
              borrow, long/short, earn interest, and more. Crypto-savvy
              Argentinians have used DeFi to escape crippling inflation.
              Companies have started streaming their employees their wages in
              real time. Some folks have even taken out and paid off loans worth
              millions of dollars without the need for any personal
              identification.
              <br />
            </p>
            <a href="https://docs.zenithchain.co/Contract" target="_blank">
              <button className="bg-primary border-0 text-light px-4 py-2 mt-2">
                <h5 className="m-0">Explore DeFi</h5>
              </button>
            </a>
          </div>
          <div className="col">
            <img className="img-full" src={DeFiLogo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
