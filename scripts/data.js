const { ethers } = require("hardhat");
const { contractInterface } = require("./contract/interface");

async function main() {
    let address = ethers.utils.getAddress("0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199");
    await contractInterface.balanceOf(address);
}

main();
