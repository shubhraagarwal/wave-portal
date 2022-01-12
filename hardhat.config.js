require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    // rinkeby: {
    //   url: process.env.ALCHEMY_URL,
    //   accounts: [process.env.PRIVATE_NETWORK_KEY],
    // },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/VDKu7rOvu-gZeD2YJSGdH2TN0I6wKp1I",
      accounts: [
        "76e9c76c7f0a4b8e8f91cab8fd6d3b9f5be83a49b69e33f701e31cf676191137",
      ],
    },
  },
};
