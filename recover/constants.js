const hre = require("hardhat");
const ethers = hre.ethers;
const { BigNumber } = ethers;
const { ethAccounts, usdcAccounts} = require("./addresses")

module.exports = {
  HAIRCUT_FACTOR: BigNumber.from("7235"),
  HAIRCUT_DENOM: BigNumber.from("10000"),
  USDC_RESERVE_FACTOR: BigNumber.from("800000000000000000"),
  MAX_INT: BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639935"),
  INITIAL_EXCHANGE_RATE_MANTISSA: BigNumber.from("200000000000000000000000000"),
  TIMELOCK_ADDRESS: "0x894CC200DDc79292c1BBc673706903F83Ff9d787",
  UNITROLLER_ADDRESS: "0xf47dD16553A934064509C40DC5466BBfB999528B",
  USDC_ADDRESS: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  INTEREST_RATE_MODEL_ADDRESS: "0x3F7C656C0C3F547Cb18D7a15318e98Ae44Ed8cbc",
  CERC20_DELEGATE_ADDRESS: "0xfb770c8822761790A5f41867654911c2A6261300",
  CHAINLINK_PRICE_ORACLE_PROXY_ADDRESS: "0x21A6297114853aEF193c83FC0271dEf69EA1b93d",
  USDC_CHAINLINK_AGGREGATOR_ADDRESS: "0x986b5E1e1755e3C2440e960477f25201B0a8bbD4",
  ETH_CHAINLINK_AGGREGATOR_ADDRESS: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
  PETH_ACCOUNTS: ethAccounts,
  PUSDC_ACCOUNTS: usdcAccounts,
  BRICKED_PUSDC_ADDRESS: "0x0f69f08f872f366ad8edde03dae8812619a17536",
  BRICKED_PETH_ADDRESS: "0x7b4a7FD41c688A7CB116534E341e44126eF5a0fd"
}
