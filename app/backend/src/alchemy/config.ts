import { Alchemy, AlchemySubscription, Network } from 'alchemy-sdk';

import { CONSTANTS } from '../utils/index.ts';

const alchemy = new Alchemy({
  apiKey: CONSTANTS.ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
});

export { alchemy, AlchemySubscription };
