import { subscribe, unsubscribeAll } from './alchemy/sub.controller.ts';
import cron from 'node-cron';

import { logger } from './utils/index.ts';
import { getUsers } from './graphql.ts';

let current: string | string[];
let tracker = 0;

// const test = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const addressCache: string[] = [];

export const watcher = async () => {
  const data = await getUsers();

  const addresses = !!data.length ? data.map((user: { address: any }) => user.address) : [];

  const addressToEmail: {
    [key: string]: string;
  } = !!data.length
    ? data.reduce((acc: any, user: { address: string; email: string }) => {
        acc[user.address.toLowerCase()] = user.email;
        return acc;
      }, {})
    : {};

  const addressToAdd = addresses.filter((address: string) => !addressCache.includes(address));

  addressCache.push(...addressToAdd);

  logger('logging additional address...', JSON.stringify(addressToAdd));
  logger('logging address to email...', JSON.stringify(addressToEmail));

  await subscribe(addressToAdd, addressToEmail);

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
