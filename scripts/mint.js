const { ethers } = require("hardhat");
const { contractInterface } = require("./contract/interface");

async function main() {
    await contractInterface.mint(1);
}

main();
