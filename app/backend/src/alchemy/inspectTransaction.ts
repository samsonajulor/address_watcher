import { getCache } from '../db/cache.ts';
import { sendEmail, renderHTML, logger, Txns, readValue } from '../utils/index.ts';
import { webPushInstance } from '../webpush/index.ts';
import inspectContractInteraction from './inspectContractInteraction.ts';

const inspectTransaction = async (
  tx: Txns,
  origin: 'from' | 'to',
  addressToEmail: { [key: string]: string }
) => {
  try {
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

    const payload = JSON.stringify({ title: msg });

    const subcriptionCache = getCache(recipient);
    if (!subcriptionCache) return;
    const subscription = JSON.parse(subcriptionCache as string);

    await webPushInstance.sendNotification(subscription, payload);
  } catch (error: any) {
    logger('error', error.message || error.toString());
    throw new Error(error.message || 'something really bad happened.');
  }
};

export default inspectTransaction;
