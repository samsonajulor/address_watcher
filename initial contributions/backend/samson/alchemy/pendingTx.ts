import { Alchemy, AlchemySubscription, Network } from 'alchemy-sdk';
import { Txns } from '../types.ts';
import { utils } from 'web3';

import { decodeCalldata, fallbackDecoder } from '../utils/decodeKnownAbi.ts';
import { ERC20ABI } from '../abis/erc20.ts';
import { ERC721ABI } from '../abis/erc721.ts';

const alchemy = new Alchemy({
  apiKey: '3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay',
  network: Network.ETH_SEPOLIA,
});

const mySepoliaAddress = '0xe24d295154c2d78a7a860e809d57598e551813bd';
// const mySepoliaAddress = '0xB51019Da91d8d8e0ee85f4644bB21C7982EF7C06';
// const mySepoliaAddress = "0x5CB700c9Dc5771Ff57f44858E66007EC722976da";

const inspectTransaction = async (tx: Txns, origin: 'from' | 'to') => {
  console.log('awaiting');
    // console.log(tx);
    console.log(readValue(tx, origin));
    inspectContractInteraction(tx);
}

alchemy.ws.on(
  {
    method: AlchemySubscription.PENDING_TRANSACTIONS,
    toAddress: mySepoliaAddress, // separate the from and to.
  },
  (tx: Txns) => inspectTransaction(tx, 'to')
);
alchemy.ws.on(
  {
    method: AlchemySubscription.PENDING_TRANSACTIONS,
    fromAddress: mySepoliaAddress, // separate the from and to.
  },
  (tx: Txns) => inspectTransaction(tx, 'from')
)

const inspectContractInteraction = async (tx: Txns) => {
  // Ensure it's a contract
  if (!(await isContract(tx.to))) return;
  const calldata = tx.input;
  if (calldata === '0x') return;

  console.log(calldata);

  // Check if it matches ERC20 Txns, ERC721txns, or any other
  const decoded =
    decodeCalldata(ERC20ABI, calldata) ??
    decodeCalldata(ERC721ABI, calldata) ??
    fallbackDecoder(calldata);

  console.log(decoded);
};

const isContract = async (address: string) => {
  const code = await alchemy.core.getCode(address, 'latest');
  return code !== '0x';
};

const readValue = (tx: Txns, origin: 'from' | 'to') => {
  const weiValue = utils.toDecimal(tx.value);

  if (weiValue === utils.toDecimal('0x0')) return 'No Ether transfer';

  // Now convert wei to ether
  const etherValue = utils.fromWei(weiValue, 'ether');

  if (origin == 'from') {
    return `${etherValue} ETH is about to be sent to ${tx.to}`;
  } else {
    return `You're about to receive ${etherValue} ETH from ${tx.from}`;
  }
};

// Subscription for new blocks on Eth Mainnet.
// alchemy.ws.on("block", (blockNumber) =>
//   console.log("The latest block number is", blockNumber)
// );
