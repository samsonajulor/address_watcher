import { alchemy, AlchemySubscription } from './config.ts';

import { logger } from '../utils/index.ts';
import { Txns } from '../utils/index.ts';
import inspectTransaction from './inspectTransaction.ts';

const subscribe = async (addresses: string[], addressToEmail: { [key: string]: string }) => {
  alchemy.ws.on(
    {
      method: AlchemySubscription.PENDING_TRANSACTIONS,
      toAddress: addresses, // separate the from and to.
    },
    (tx: Txns) => inspectTransaction(tx, 'to', addressToEmail)
  );
  alchemy.ws.on(
    {
      method: AlchemySubscription.PENDING_TRANSACTIONS,
      fromAddress: addresses, // separate the from and to.
    },
    (tx: Txns) => inspectTransaction(tx, 'from', addressToEmail)
  );
};

const unsubscribeAll = async () => {
  alchemy.ws.removeAllListeners();
  logger('removing listeners...', 'unsubscribed all address successfully');
};

export { subscribe, unsubscribeAll };
