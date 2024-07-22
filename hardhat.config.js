require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24"
      }
    ]
  },
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", // URL of the RPC node for Swisstronik.
      accounts: ["0xbee5794df85249da1527a37245d344169f0a3ed04de009ba4900230cb2234769"] // Your private key starting with "0x"
      // Make sure you have enough funds in this wallet to deploy the smart contract
    }
  }
};