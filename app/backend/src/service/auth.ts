import { DIDSession } from 'did-session';
import { EthereumNodeAuth, getAccountId } from './externalFuncs';
// import { EthereumNodeAuth, getAccountId } from '@didtools/pkh-ethereum';
import NodeCache from 'node-cache';
import { ethers } from 'ethers';
import web3 from 'web3';

import { CeramicApi } from '@ceramicnetwork/common';
import { ComposeClient } from '@composedb/client';
import { GenericAnyType } from '../@types';
import { env } from '../config';

const cache = new NodeCache();
const alchemyProviderUrl = 'https://eth-sepolia.g.alchemy.com/v2/3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay';
// const provider = new ethers.AlchemyProvider('sepolia', alchemyProviderUrl);

// use web3 provider
const provider = new web3.providers.HttpProvider(alchemyProviderUrl);

const privateKey = env.PK as string;

console.log(privateKey, 'PK');

/**
 * Checks node-cache for a stored DID Session. If one is found, we authenticate it; otherwise, we create a new one.
 * @returns Promise<void>
 */
export const authenticateCeramic = async (
  ceramic: CeramicApi,
  compose: ComposeClient,
  user: string
) => {
  try {
    const sessionStr = cache.get('did'); // Use node-cache instead of localStorage
    let session;

    if (sessionStr) {
      session = await DIDSession.fromSession(sessionStr as string);
    }

    if (!session || (session.hasSession && session.isExpired)) {
      // We enable the ethereum provider to get the user's addresses.
      const ethProvider = provider;

      const accountId = await getAccountId(ethProvider, user);

      const authMethod = await EthereumNodeAuth.getAuthMethod(
        ethProvider,
        accountId,
        'sepolia',
        privateKey
      );

      console.log(authMethod, 'authMethod');

      // /**
      //  * Create DIDSession & provide capabilities that we want to access.
      //  * @NOTE: Any production applications will want to provide a more complete list of capabilities.
      //  *        This is not done here to allow you to add more datamodels to your application.
      //  */
      // // TODO: update resources to only provide access to our composities
      session = await DIDSession.authorize(authMethod, { resources: ['ceramic://*'] });
      // // Set the session in node-cache.
      cache.set('did', session.serialize() /* optional expiration time in seconds */);
    }

    // Set our Ceramic DID to be our session DID.
    compose.setDID(session.did);
    ceramic.did = session.did;
  } catch (error: GenericAnyType) {
    console.log(error);
    throw new Error(error.message || 'Something went wrong');
  }
};
