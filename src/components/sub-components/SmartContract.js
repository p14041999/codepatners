import React, { Component } from "react";
import SmartContractLogo from "../../assets/smart-contract.svg";
export default class SmartContract extends Component {
  state = {
    readMore: false,
  };
  handleReadMoreBtn = () => {
    this.setState({ readMore: true });
  };
  handleLessBtn = () => {
    this.setState({ readMore: false });
  };
  render() {
    const { darkMode } = this.props;
    return (
      <div className="py-7">
        <div className="row">
          <div className="col">
            <h2 className={darkMode ? "text-light" : "text-dark"}>
              Time to prove that Code can rule with smart contracts
            </h2>
            <p className="text-secondary">
              A smart contract is a piece of code programmed onto a blockchain,
              which defines the terms of a particular transaction. Upon the
              receipt of a given trigger or input, the smart contract will
              execute and perform its assigned tasks.
              <br />
              All smart contracts share some common properties.
              <br />
              · Because they exist on the blockchain, they have a state, like
              RAM in a computer does, and this state is shared across the entire
              network. So, each node running this blockchain has a copy of the
              state of the smart contract.
              <br />
              · They cannot be altered. Although there are ways to extend them
              or replace parts — if such action has been foreseen by the
              developers — there is no way to covertly manipulate their content
              without drawing the attention of the network.
              <br />
              {this.state.readMore ? (
                <>
                  <p>
                    The logic of a smart contract cannot be distorted, so there
                    is no room for interpretation[1]. That is why they’re
                    referred to as a “contract”. They act like an agreement
                    between parties, but one which needs no judge, because the
                    output is produced from the input deterministically.
                    <br />
                    Smart contracts gave us the opportunity to create any kind
                    of token without having to launch an entirely new
                    blockchain. With the emergence of Ethereum, a token became
                    just a piece of code — a smart contract — with certain
                    functions including enabling the “transfer” of digital
                    assets and the ability to “read” the account content of
                    token holders.
                    <br />
                    It is possible to create escrow agreements or futures, which
                    are based on the occurrence of certain conditions in order
                    to be released. For example, a smart contract could be
                    programmed to release funds for someone’s birthday each
                    year. It could also be programmed to release payment once
                    someone confirms receipt of delivered goods. It could be
                    used to enforce particular rights for holders of digital
                    assets. Some of these ideas will be explored in a later
                    section of this article covering applications of smart
                    contracts.
                    <br />
                    Benefits and Challenges of Smart Contracts
                    <br />
                    Smart contracts offer several benefits when they’re deployed
                    appropriately. They can allow people from around the globe
                    to transact with one another without needing an
                    intermediary, reducing the costs of middlemen and brokers.
                    <br />
                    Because there is no third party involved, there is no risk
                    of manipulation. Smart contracts can reduce administration,
                    saving time. They offer complete autonomy, and because
                    everything is backed up on to the blockchain, smart
                    contracts are completely safe against loss of data.
                    <br />
                    One significant challenge with smart contracts is that
                    they’re irreversible. If the code has bugs, then it could be
                    that unwanted transactions occur and there is currently no
                    way to undo them.
                    <br />
                    Evolution of Smart Contracts
                    <br />
                    The idea of smart contracts was put forward by Nick Szabo in
                    a 1997 paper. Szabo recognized that smart contracts could be
                    deployed on a distributed ledger, which would be supervised
                    by the machines running the network.
                    <br />
                    Bitcoin, as the very first implementation of blockchain,
                    offered a basic functionality to execute some logic, though
                    it was not capable of running complex algorithms. Therefore,
                    one did not refer to it as a “smart contract” at that time.
                    What Bitcoin essentially does is accounting. If someone
                    sends a bitcoin payment, then their wallet address is
                    updated with the new balance and the amount is attributed to
                    the payee.
                    <br />
                    However, it was only in 2014 that smart contracts really
                    started to take off. Once Ethereum launched, anyone with a
                    reasonable understanding of coding could learn the Solidity
                    programming language and start writing smart contracts for
                    the Ethereum Virtual Machine, which is the central piece
                    that interprets them.
                    <br />
                    Now, five years later after the idea has been adopted by
                    several other blockchain projects and even Bitcoin has
                    launched its own version of smart contract interpreters[2],
                    developers now have a choice of blockchain platforms on
                    which they can code smart contracts, build distributed
                    applications (dApps), and issue digital tokens.
                    <br />
                    Practical Applications of Smart Contracts
                    <br />
                    Insurance
                    <br />
                    Smart contracts offer significant potential across the
                    insurance sector, in speeding up and streamlining the claims
                    process. A simple example could be in the case of life
                    insurance. The policy terms would be encoded into the smart
                    contract. In the event of a passing, the notarized death
                    certificate would be provided as the input trigger for the
                    smart contract to release the payment to the named
                    beneficiaries.
                    <br />
                    This can be extended across different types of insurance,
                    providing that the insurer can find a suitable oracle for
                    the input of external data in the event of a claim. For
                    example, in the case of travel disruption, an insurer could
                    use flight data provided by the airlines to serve as a smart
                    contract trigger.
                    <br />
                    Supply Chain and Logistics
                    <br />
                    The use of smart contracts is revolutionizing the supply
                    chain and logistics sector. By itself, blockchain can
                    provide a transparent and permanent record of the transit of
                    goods between multiple handlers. With smart contracts in
                    play, payments can be executed automatically upon the
                    receipt of delivery, and inventory levels updated
                    automatically in real-time.
                    <br />
                    There are further benefits to be had by integrating
                    blockchain and smart contracts with other technologies. For
                    example, quality checks could be performed by artificial
                    intelligence robots and then payments executed according to
                    the outcome. Internet-of-Things (IoT) enabled smart
                    containers could send data instructing a smart contract to
                    hold back payment. This could happen, for example, if
                    temperatures weren’t maintained throughout the transport of
                    perishable goods, or if containers have been opened by an
                    unauthorized individual.
                    <br />
                    Rights for Digital Token Holders
                    <br />
                    Tokenization of real-world assets may mean individual
                    token-holders also have particular rights. These rights can
                    be coded onto a smart contract. For example, if company
                    stocks are tokenized, shareholders have voting rights. With
                    a smart contract, the person’s right to vote is granted when
                    any given ballot is opened up. The smart contract allows
                    them to cast their vote and records everything in a
                    transparent way. Thus, it allows voting from remote,
                    relieving shareholders from the need to be physically
                    present or name a power of attorney.
                    <br />
                    Conclusion
                    <br />
                    These are just a few examples. Smart contracts have opened
                    up a world of possibility for the many use cases of
                    blockchain that we see today. As the technology develops,
                    it’s beyond doubt that smart contracts will become as much a
                    part of our everyday lives as the internet
                  </p>
                  <button className="btnp" onClick={this.handleLessBtn}>
                    Less
                  </button>
                </>
              ) : (
                <button className="btnp" onClick={this.handleReadMoreBtn}>
                  Read More
                </button>
              )}
            </p>
            <button className="bg-primary border-0 text-light px-4 py-2 mt-2">
              <h5 className="m-0">Explore Smart Contract</h5>
            </button>
          </div>
          <div className="col">
            <img className="img-full" src={SmartContractLogo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
