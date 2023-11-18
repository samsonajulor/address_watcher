import { Alchemy, AlchemySubscription, Network } from 'alchemy-sdk';
import { Txns } from '../utils/types.ts';
import { utils } from 'web3';

import { decodeCalldata, fallbackDecoder, sendEmail, renderHTML, logger } from '../utils/index.ts';
import { ERC20ABI } from '../abis/erc20.ts';
import { ERC721ABI } from '../abis/erc721.ts';
import { getUsers } from '../app.ts';

const alchemy = new Alchemy({
  apiKey: '3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay',
  network: Network.ETH_SEPOLIA,
});

let current: any;

const test = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

export const watcher = async () => {
  const data = await getUsers();
  const addresses = data.map((user: { address: any }) => user.address);
  const addressToEmail = data.reduce((acc: any, user: { address: string; email: string }) => {
    acc[user.address.toLowerCase()] = user.email;
    return acc;
  }, {});

  if (JSON.stringify(current) !== JSON.stringify(addressToEmail)) {
    current = addressToEmail;
    console.log({ addressToEmail });
  }

  logger('logging...', 'watching for new txs');

  const inspectTransaction = async (tx: Txns, origin: 'from' | 'to') => {
    logger('logging...', 'starting inspect tnxs');

    logger('value to be sent...', readValue(tx, origin));

    const ctx = await inspectContractInteraction(tx);

    const recipient = (origin === 'from' ? tx.from : tx.to).toLowerCase();

    const msg = renderHTML(readValue(tx, origin), ctx, tx);

    // Test for result, Load format.html on live server to view result
    // fs.writeFile('alchemy/output/format.html', msg, (err) => {
    //   if (err) return console.log(err);
    //   console.log('File writing done');
    // });

    // logger('info | message', msg);

    await sendEmail(addressToEmail[recipient], 'Address Notification', msg);
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
};

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

watcher().then(() => logger('starting watcher...', '|||||watcher started|||||'));
