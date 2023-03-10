require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/7ce04ca962b6484b8513f27d9f53537c",
      accounts: ["2c6d590af172ce5606e3a0f5718a83a06f595fc92d553417cb745a524c4f5dd6"],
    },
  },
  etherscan: {
    apiKey: "CPF3UWIGYTD8WAQD7UXUV5ZRMRAXYUECIB"
  }
};
