
const { network } = require("hardhat")
const {verify} = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy,log } = deployments
  const { deployer } = await getNamedAccounts()  // in hardhat.config we can insert different accounts, in the networks part 
                                                // or create a namedAccounts part
  //const chainId = network.config.chainId

  //when we work for localhost or hardhatnetwork we want to use a mock

  const soulboundToken = await deploy ("NFTToken",{
    from: deployer,
    args: [],
    log: true,
    args: [""], // 
    waitConfirmations: network.config.blockConfirmations || 1,
  }) 
  verify

  const verify = async (contractAddress, args) => {
    console.log("Verifying contract...");
    try {
      await run("verify:verify", {  // in this way we are verifing the contract in etherscan
        address: contractAddress,
        constructorArguments: args,
      });
    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log("Already Verified!");
      } else {
        console.log(e);
      }
    }
  }
}

module.exports.tags = ["all", "soul"] 

//yarn hardhat deploy --network rinkeby --tags chainfy