/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

const alchemyApiUrl = process.env.ALCHEMY_API_URL || process.env.API_URL;
const privateKey = process.env.TESTNET_PRIVATE_KEY || process.env.PRIVATE_KEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || process.env.POLYGONSCAN_API_KEY;

let defaultNetwork = process.env.DEPLOY_NETWORK || 'localhost';

const networkList = !privateKey || !alchemyApiUrl
    ? {} :
    {
        matic: {
            url: alchemyApiUrl,
            accounts: [`${privateKey}`],
        },
        maticmum: {
            url: alchemyApiUrl,
            accounts: [`${privateKey}`],
        },
        optimism: {
            url: alchemyApiUrl,
            accounts: [`${privateKey}`],
        },
        optimism_kovan: {
            url: alchemyApiUrl,
            accounts: [`${privateKey}`],
        },
        optimism: {
            url: alchemyApiUrl,
            accounts: [`${privateKey}`],
        },
        mainnet: {
            url: alchemyApiUrl,
            accounts: [`${privateKey}`],
        },
    };

module.exports = {
    solidity: "0.8.13",
    defaultNetwork: defaultNetwork,
    networks: { ...networkList,
        hardhat: {},
        localhost: {
            url: "http://127.0.0.1:8545",
            accounts: [`0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e`],
        },
    },
    etherscan: {
        apiKey: etherscanApiKey,
    },
}
