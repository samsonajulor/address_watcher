import {Alchemy, AlchemySubscription, Network} from 'alchemy-sdk';
import {Txns} from '../types.ts';
import {utils} from 'web3';

import {decodeCalldata, fallbackDecoder} from '../utils/decodeKnownAbi.ts';
import {ERC20ABI} from '../abis/erc20.ts';
import {ERC721ABI} from '../abis/erc721.ts';
import {getUsers} from '../app';
import {sendEmail} from '../utils/nodemailer';

const alchemy = new Alchemy({
  apiKey: '3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay',
  network: Network.ETH_SEPOLIA,
});

const renderHTML = (value, others) => {
  return (`<div>
    <h1>${value}</h1>
    <p>${others}</p>
  </div>`);
};

let current: any;

setInterval(async () => {

  const data = (await getUsers());
  const addresses = data.map((user: {address: any;}) => user.address);
  const addressToEmail = data.reduce((acc: any, user: {address: string, email: string;}) => {
    acc[user.address.toLowerCase()] = user.email;
    return acc;
  }, {});

  if (JSON.stringify(current) !== JSON.stringify(addressToEmail)) {
    current = addressToEmail;
    console.log({addressToEmail});
  }

  const inspectTransaction = async (tx: Txns, origin: 'from' | 'to') => {
    console.log('awaiting');
    // console.log(tx);
    console.log(readValue(tx, origin));
    const ctx = await inspectContractInteraction(tx);

    const recipient = (origin === 'from' ? tx.from : tx.to).toLowerCase();

    const msg = renderHTML(readValue(tx, origin), ctx);

    await sendEmail(
      addressToEmail[recipient],
      "Address Notification", msg
    );
  };

  alchemy.ws.on(
    {
      method: AlchemySubscription.PENDING_TRANSACTIONS,
      toAddress: addresses, // separate the from and to.
    },
    (tx: Txns) => inspectTransaction(tx, 'to')
  );
  alchemy.ws.on(
    {
      method: AlchemySubscription.PENDING_TRANSACTIONS,
      fromAddress: addresses, // separate the from and to.
    },
    (tx: Txns) => inspectTransaction(tx, 'from')
  );

  setTimeout(() => {
    alchemy.ws.removeAllListeners();
  }, 4000);
}, 5000);

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

  return (decoded);
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
