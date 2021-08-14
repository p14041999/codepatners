// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract GLDToken {

constructor(uint256 initialSupply, address[] memory defaultOperators)

ZRC777("Gold", "GLD", defaultOperators)
{
_mint(msg.sender, initialSupply, "", "");
}
}





// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract GameItem {
    
    Counters.Counter private _tokenIds;

    constructor() ERC721("GameItem", "ITM") {}

    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}