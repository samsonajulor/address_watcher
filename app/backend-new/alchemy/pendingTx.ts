import { Alchemy, AlchemySubscription, Network } from 'alchemy-sdk';
import { Txns } from '../types.ts';
import { utils } from 'web3';

import { decodeCalldata, fallbackDecoder } from '../utils/decodeKnownAbi.ts';
import { ERC20ABI } from '../abis/erc20.ts';
import { ERC721ABI } from '../abis/erc721.ts';
import { getUsers } from '../app';
import { sendEmail } from '../utils/nodemailer';
import fs from 'fs';
import { ethers } from 'ethers';
import { transaction } from './transaction.ts';
import { interaction } from './interaction.ts';

const alchemy = new Alchemy({
  apiKey: 'fTxkuelVKsi8eUlvM7KH9iYqt11NLBXV',
  network: Network.ETH_MAINNET,
});

type DecodeData =
  | { header: 'ERC20' | 'ERC721'; name: any; params: ethers.Result }
  | { header: 'Unknown'; sig: string; decodedName: any; decodedData: string }
  | null;

// Work on this function
const renderHTML = (value: string, others: DecodeData, tx: Txns) => {
  if (!others || others == null) return '';
  if (others.header === 'ERC20') {
    return transaction(value, others, tx);
  }

  if (others.header === 'ERC721') {
    return `<div>
      <h4>${value}</h4>
      <p>NFT Interaction</p>
      <p>${others.name}</p>
      <div>
        ${others.params
          ?.map((item: any) => {
            return `<p>${item}</p>`;
          })
          .join('')}
      </div>
    </div>`;
  }

  if (others.header === 'Unknown') {
    return interaction(value, others, tx);
  }

  return '';
};

let current: any;

const test = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

setInterval(async () => {
  // const data = (await getUsers());
  // const addresses = data.map((user: {address: any;}) => user.address);
  // const addressToEmail = data.reduce((acc: any, user: {address: string, email: string;}) => {
  //   acc[user.address.toLowerCase()] = user.email;
  //   return acc;
  // }, {});

  // if (JSON.stringify(current) !== JSON.stringify(addressToEmail)) {
  //   current = addressToEmail;
  //   console.log({addressToEmail});
  // }

  const inspectTransaction = async (tx: Txns, origin: 'from' | 'to') => {
    console.log('awaiting');
    alchemy.ws.removeAllListeners();
    // console.log(tx);
    console.log(readValue(tx, origin));
    const ctx = await inspectContractInteraction(tx);

    const recipient = (origin === 'from' ? tx.from : tx.to).toLowerCase();

    const msg = renderHTML(readValue(tx, origin), ctx, tx);

    // Test for result, Load format.html on live server to view result
    fs.writeFile('alchemy/format.html', msg, (err) => {
      if (err) return console.log(err);
      console.log('File writing done');
    });

    // await sendEmail(
    //   addressToEmail[recipient],
    //   "Address Notification", msg
    // );
  };

  alchemy.ws.on(
    {
      method: AlchemySubscription.PENDING_TRANSACTIONS,
      toAddress: test, // separate the from and to.
    },
    (tx: Txns) => inspectTransaction(tx, 'to')
  );
  alchemy.ws.on(
    {
      method: AlchemySubscription.PENDING_TRANSACTIONS,
      fromAddress: test, // separate the from and to.
    },
    (tx: Txns) => inspectTransaction(tx, 'from')
  );

  setTimeout(() => {
    alchemy.ws.removeAllListeners();
  }, 11000);
}, 12000);

const inspectContractInteraction = async (tx: Txns) => {
  // Ensure it's a contract
  if (!(await isContract(tx.to))) return null;
  const calldata = tx.input;
  if (calldata === '0x') return null;

  // Check if it matches ERC20 Txns, ERC721txns, or any other
  const decoded =
    decodeCalldata(ERC20ABI, calldata, 'ERC20') ??
    decodeCalldata(ERC721ABI, calldata, 'ERC721') ??
    fallbackDecoder(calldata);

  return decoded;
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
