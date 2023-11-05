import { Alchemy, AlchemySubscription, Network } from 'alchemy-sdk';
const alchemy = new Alchemy({
  apiKey: '3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay',
  network: Network.ETH_SEPOLIA,
});

const mySepoliaAddress = '0xe24d295154c2d78a7a860e809d57598e551813bd';
// const mySepoliaAddress = '0xB51019Da91d8d8e0ee85f4644bB21C7982EF7C06';

alchemy.ws.on(
  {
    method: AlchemySubscription.PENDING_TRANSACTIONS,
    // toAddress: mySepoliaAddress,
    fromAddress: mySepoliaAddress, // separate the from and to.
  },
  (tx) => {
    console.log('awaiting');
    console.log(tx);
  }
);

// Subscription for new blocks on Eth Mainnet.
alchemy.ws.on("block", (blockNumber) =>
  console.log("The latest block number is", blockNumber)
);
