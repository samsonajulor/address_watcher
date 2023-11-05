import { Alchemy, AlchemySubscription, Network } from "alchemy-sdk";
import { Txns } from "../types.ts";
import { utils } from "web3";

import { decodeCalldata, fallbackDecoder } from "../utils/decodeKnownAbi.ts";
import { ERC20ABI } from "../abis/erc20.ts";
import { ERC721ABI } from "../abis/erc721.ts";

const alchemy = new Alchemy({
  apiKey: "3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay",
  network: Network.ETH_SEPOLIA,
});

const mySepoliaAddress = '0xe24d295154c2d78a7a860e809d57598e551813bd';
// const mySepoliaAddress = '0xB51019Da91d8d8e0ee85f4644bB21C7982EF7C06';
// const mySepoliaAddress = "0x5CB700c9Dc5771Ff57f44858E66007EC722976da";

alchemy.ws.on(
  {
    method: AlchemySubscription.PENDING_TRANSACTIONS,
    // toAddress: mySepoliaAddress,
    fromAddress: mySepoliaAddress, // separate the from and to.
  },
  async (tx: Txns) => {
    console.log("awaiting");
    // console.log(tx);
    console.log(readValue(tx, "from"));
    inspectContractInteraction(tx);
  }
);

const inspectContractInteraction = async (tx: Txns) => {
  // Ensure it's a contract
  if (!(await isContract(tx.to))) return;
  const calldata = tx.input;
  if (calldata === "0x") return;

  console.log(calldata);

  // Check if it matches ERC20 Txns, ERC721txns, or any other
  const decoded =
    decodeCalldata(ERC20ABI, calldata) ??
    decodeCalldata(ERC721ABI, calldata) ??
    fallbackDecoder(calldata);

  console.log(decoded);
};

const isContract = async (address: string) => {
  const code = await alchemy.core.getCode(address, "latest");
  return code !== "0x";
};

const readValue = (tx: Txns, origin: "from" | "to") => {
  const weiValue = utils.toDecimal(tx.value);

  if (weiValue === utils.toDecimal("0x0")) return "Nothing to see here";

  // Now convert wei to ether
  const etherValue = utils.fromWei(weiValue, "ether");

  if (origin == "from") {
    return `${etherValue} ETH is about to be sent to ${tx.to}`;
  } else {
    return `You're about to receive ${etherValue} ETH from ${tx.from}`;
  }
};

// {
//   blockHash: null,
//   blockNumber: null,
//   from: '0xe24d295154c2d78a7a860e809d57598e551813bd',
//   gas: '0x5208',
//   gasPrice: '0x59682f0b',
//   maxFeePerGas: '0x59682f0b',
//   maxPriorityFeePerGas: '0x59682f00',
//   hash: '0x097df8c9342d44ab001e05e680380503936dae652bbc26b3179947fe0e499051',
//   input: '0x',
//   nonce: '0x36',
//   to: '0x3cfdd170cd6118abc8da1ece20efbe598b3a97b4',
//   transactionIndex: null,
//   value: '0x38d7ea4c68000',
//   type: '0x2',
//   accessList: [],
//   chainId: '0xaa36a7',
//   v: '0x0',
//   r: '0x5129e8bde72d4317db0f9c3ab6de7e05b00fe79c11d248ebdcf75b9bb94c26a1',
//   s: '0x75dd75d411e0250fb51eed74197f825d21b9183e8a377e0dcaa9b7a961946a50',
//   yParity: '0x0'
// }

// Subscription for new blocks on Eth Mainnet.
// alchemy.ws.on("block", (blockNumber) =>
//   console.log("The latest block number is", blockNumber)
// );
