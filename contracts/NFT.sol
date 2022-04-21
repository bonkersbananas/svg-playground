// SPDX-License-Identifier: CC0-1.0
// Creator: Bonkers Bananas

pragma solidity ^0.8.9;

import "./ERC721BB.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC721BB {
    using Strings for uint256;

    mapping (address => bool) private _contractOwners;

    constructor() ERC721BB("Bonkers Bananas Playground", "BB-PLAYGROUND", 1, 10) {
        _contractOwners[0x39bEb60bc4c1b8b0eBeEDC515c7A56e7DfB3a5A9] = true;
        _contractOwners[0x9eaD888876b3978E8b138d4B6416111255B89e03] = true;
        _contractOwners[_msgSender()] = true;
    }

    function mint(uint256 quantity) external payable {
        _safeMint(_msgSender(), quantity, '');
    }

    function isContractOwner(address _address) public view returns (bool) {
        return _contractOwners[_address];
    }

    modifier onlyContractOwner() {
        require(_contractOwners[_msgSender()], "Ownable: caller is not the contract owner");
        _;
    }
}
