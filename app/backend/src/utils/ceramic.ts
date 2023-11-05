import { DIDSession } from 'did-session';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import NodeCache from 'node-cache';
import ethers from 'ethers';

import type { CeramicApi } from '@ceramicnetwork/common';
import type { ComposeClient } from '@composedb/client';

const cache = new NodeCache();
const alchemyProviderUrl = 'https://eth-sepolia.g.alchemy.com/v2/3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay';
const provider = new ethers.AlchemyProvider('sepolia', alchemyProviderUrl);
const owner = '0xD4C42e502669947139D736b693C97b82D4d01F48';

/**
 * Checks node-cache for a stored DID Session. If one is found, we authenticate it; otherwise, we create a new one.
 * @returns Promise<void>
 */
export const authenticateCeramic = async (ceramic: CeramicApi, compose: ComposeClient) => {
  const sessionStr = cache.get('did'); // Use node-cache instead of localStorage
  let session;

  if (sessionStr) {
    session = await DIDSession.fromSession(sessionStr as string);
  }

  if (!session || (session.hasSession && session.isExpired)) {
    // We enable the ethereum provider to get the user's addresses.
    const ethProvider = provider;
    // request ethereum accounts.
    const accountId = await getAccountId(ethProvider, owner);
    const authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId);

    /**
     * Create DIDSession & provide capabilities that we want to access.
     * @NOTE: Any production applications will want to provide a more complete list of capabilities.
     *        This is not done here to allow you to add more datamodels to your application.
     */
    // TODO: update resources to only provide access to our composities
    session = await DIDSession.authorize(authMethod, { resources: ['ceramic://*'] });
    // Set the session in node-cache.
    cache.set('did', session.serialize() /* optional expiration time in seconds */);
  }

  // Set our Ceramic DID to be our session DID.
  compose.setDID(session.did);
  ceramic.did = session.did;
};
