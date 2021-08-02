import { dark } from "@material-ui/core/styles/createPalette";
import React, { Component } from "react";
import P2Plogo from "../../assets/p2p.svg";
export default class P2P extends Component {
  constructor() {
    super();
    this.state = {
      readMore: false,
    };
  }
  handleReadMoreBtn = () => {
    this.setState({ readMore: true });
  };
  handleLessBtn = () => {
    this.setState({ readMore: false });
  };
  render() {
    const { darkMode } = this.props;
    // console.log(darkMode);
    return (
      <div className="py-7">
        <div className="row">
          <div className="col">
            <h2 className={darkMode ? "text-light" : "text-dark"}>
              Tokenized BNB
            </h2>
            <p className="text-secondary">
              A tokenized BNB property would offer middle ground between these
              two options. Investors who would rather capture rental cash flow
              distributions than hold shares of corporate stock BUT prefer the
              ease of real-time trading are best suited for security tokens.
              <br />
              Property Owner (Token Issuer)
              <br />
              Can sell off as many tokens as the owner deems fit, in exchange
              for immediate liquid capital
              <br />
              The owner would collect a lump sum from the initial token sale and
              partial cash flows from the remaining ownership
              <br />
              Useful for owners with other capital intensive projects in need of
              liquidity
              <br />
              Can structure the tokens to be retired at a certain date (with a
              premium, for example) to recoup full ownership down the road
              <br />
              Investor (Token Holder)
              <br />
              A more seamless method of crowdsourcing for the rental property,
              especially for those unable to acquire a full investment property
              <br />
              Diversified investment opportunity that can be used to target
              geographic areas, trends, and hedge against traditional investment
              drawdowns
              <br />
              Tokens have the capability of daily cash flow distributions; great
              for frequent dividend-seeking investors
              {/* {this.state.readMore ? (
                <>
                  <p>
                    Trading with a P2P exchange
                    <br /> As the types of trading got diversified, the methods
                    of exchange too changed. Earlier, if someone needs to
                    exchange cryptocurrencies, they used to post an order,
                    containing the amount of and price of cryptocurrencies. A
                    common ledger used to collect all such orders, and thus, got
                    termed as an order book. Then, users would select an order
                    suitable to their budget. The trading process used to begin
                    as soon as the buying and selling order is matched. The
                    entire process was (is) time-consuming, while it also
                    involved intermediaries. Consequently, the p2p
                    cryptocurrency exchange script came into the role and made
                    the cryptocurrency exchange development process easier.
                    <br /> In a p2p exchange model, when users trade their
                    cryptocurrencies, the trade settlement happens instantly.
                    Although here the physical currency process remains in
                    process, the trade settlement between users come to a
                    closure. The p2p crypto trading software analyzes orders and
                    connects people with similar interests. Further, they get
                    into negotiation and complete the trade within themselves
                    only. The trade does not get into the hands of any third
                    party. However, for security purposes, they involve
                    third-parties as arbitrators. P2P cryptocurrency trading
                    software enables users to find orders quickly around the
                    world.
                    <br /> Benefits of Peer-to-Peer Exchange
                    <br /> If you want to develop a p2p cryptocurrency exchange
                    platform, knowing the benefits is crucial. The followings
                    are a few significant benefits of developing and launching a
                    p2p cryptocurrency exchange platform. Robust Platform
                    Security  In a p2p exchange, every transaction happens on
                    the blockchain’s public ledger. It eliminates the need to
                    worry about the counterparties’ authenticity. In addition,
                    their KYC details remain in sync with the blockchain
                    database. It means that there are nominal chances of
                    identity and other types of fraud.
                    <br /> Censorship in transactions
                    <br />
                    All transactions happen on the blockchain’s public ledger,
                    which means there almost no chance of fraud or detail hack.
                    Every information and transaction on blockchain’s ledger
                    remains distributed across the network with the embedded
                    encryption mechanism. Thereby, it enables the traceability
                    of information when only authentic parties need access.
                    <br /> Provision for Global Transactions
                    <br /> When we go to exchange fiat money, it takes days to
                    weeks for international transactions. P2P exchange models
                    enable fast, global, efficient, and cost-effective
                    transactions. They enable any person around the world to
                    conduct transactions on the platform. Even the countries
                    that don’t allow the use of cryptocurrency can make
                    transactions in this mode. It is also the factor why crypto
                    buyers and sellers are preferring this mode.
                    <br />
                    Cost-Effective Operations
                    <br />  When a transaction involves multiple intermediaries,
                    its operational fee increases. However, the p2p exchanges
                    are based on software that has blockchain as the underlying
                    technology. It reduces the operational costs to almost zero.
                    Sometimes, there is some fee levied which remains
                    comparatively low to other exchanges.
                    <br /> Strengthened Privacy
                    <br /> P2P cryptocurrency exchanges don’t require a third
                    party operator to execute transactions, thereby, ensuring
                    complete privacy. They directly connect buyers with sellers
                    and the transactions take place only b
                  </p>
                  <button className="btnp" onClick={this.handleLessBtn}>
                    Less
                  </button>
                </>
              ) : (
                <button className="btnp" onClick={this.handleReadMoreBtn}>
                  Read More
                </button>
              )} */}
            </p>
            <button className="bg-primary border-0 text-light px-4 py-2 mt-2">
              <h5 className="m-0">Explore Tokenized BNB</h5>
            </button>
          </div>
          <div className="col">
            <img className="img-full" src={P2Plogo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
