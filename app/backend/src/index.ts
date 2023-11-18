import { subscribe, unsubscribeAll } from './alchemy/sub.controller.ts';
import cron from 'node-cron';

import { logger } from './utils/index.ts';
import { getUsers } from './graphql.ts';

let current: any;
let tracker = 0;

// const test = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';

export const watcher = async () => {
  unsubscribeAll();
  const data = await getUsers();
  const addresses = data.map((user: { address: any }) => user.address);
  const addressToEmail: {
    [key: string]: string;
  } = data.reduce((acc: any, user: { address: string; email: string }) => {
    acc[user.address.toLowerCase()] = user.email;
    return acc;
  }, {});

  if (JSON.stringify(current) !== JSON.stringify(addressToEmail)) {
    current = addressToEmail;
    console.log({ addressToEmail });
  }

  logger('logging...', 'watching for new txs');

  await subscribe(addresses, addressToEmail);

  tracker += 0.1;
};

// call watcher every 6 seconds
cron.schedule('*/6 * * * * *', () =>
  watcher().then(() =>
    logger(
      'starting watcher...',
      `|||||watcher started continuously now at ${tracker} minutes|||||`
    )
  )
);
