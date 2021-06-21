import React, { Component } from 'react'
import NFTLogo from '../../assets/nft.svg';
export default class NFT extends Component {
    render() {
        return (
            <div className="py-7">
                <div className="row">
                    <div className="col">
                        <h2>NFT Collectibles are much more easier to deploy</h2>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
                        vitae nisl posuere, ultrices dui vitae, porta erat. Proin ut mauris vel sem porta iaculis at in ex. 
                        Vivamus aliquam nisl ut neque dictum pretium. Aliquam erat volutpat. Duis lacus lacus, dignissim quis
                         metus a, viverra scelerisque justo. Nulla tristique congue imperdiet. </p>
                        <button className="bg-primary border-0 text-light px-4 py-2 mt-2">
                            <h5 className="m-0">Explore NFT</h5>
                        </button>
                    </div>
                    <div className="col">
                        <img className="img-full" src={NFTLogo} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
