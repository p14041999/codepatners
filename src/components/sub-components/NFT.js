import React, { Component } from "react";
import NFTLogo from "../../assets/nft.svg";
export default class NFT extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <div className="py-7">
        <div className="row">
          <div className="col">
            <h2 className={darkMode ? "text-light" : "text-dark"}>
              NFT Collectibles are much more easier to deploy
            </h2>
            <p className="text-secondary">
              An NFT is a Non-Fungible Token (a unique digital token), which
              many see as a certificate of authenticity, or a deed or proof
              confirming you own the right to display the above art on your wall
              or in your wallet (digital wallet). It might give you the right of
              ownership of the copy you bought (for your private use) but not
              necessarily over the ownership of the original artwork. Production
              rights and copyright are automatically retained by the artist
              unless otherwise specified in the contract. Regardless,
              non-fungible means ‘irreplaceable’ since each token is unique. And
              ‘Unique’ creates scarcity which, in turn, increases the market
              value for NFTs. An NFT is technically an ERC-721 token on the
              Ethereum Blockchain. Another meaning of ERC is a ‘collectable’.
              The artwork is minted into the ERC-721 token. This token contains:
              <br />
              <br />
              (1) the historical information of any transactions plus artist
              information (including the artist’s public key) plus the number of
              likes (see the tiny ‘heart’ symbol above the image in the NFT).
              <br />
              (2) a unique identifiable number = the token ID (click ‘chain
              info’)
              <br />
              (3) a picture of the art
              <br />
              (4) a smart contract (the NFT is effectively a smart contract –
              you don’t need humans to sign signatures). Standard copyright law
              applies and more specific conditions can be added to the
              description section.
              <br />
              (5) a list of unlockables (additional optional extras e.g. a table
              mat or even a jigsaw with the art printed on it accessible via a
              link in the description.
              <br />
            </p>
            <a href="https://docs.zenithchain.co/ZRC-721" target="_blank">
              <button className="bg-primary border-0 text-light px-4 py-2 mt-2">
                <h5 className="m-0">Explore NFT</h5>
              </button>
            </a>
          </div>
          <div className="col">
            <img className="img-full" src={NFTLogo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
