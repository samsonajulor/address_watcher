import definitionJson from '../../../runtime-composite.json';
import { DIDSession } from 'did-session';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';

import { ComposeClient } from '@composedb/client';
import { Eip1193Provider } from 'ethers';
import { RuntimeCompositeDefinition } from '@composedb/types';

declare global {
  interface Window {
    ethereum: Eip1193Provider;
  }
}

const definition: RuntimeCompositeDefinition = definitionJson as RuntimeCompositeDefinition;

const compose = new ComposeClient({
  ceramic: 'http://localhost:7007',
  definition,
});

const ethProvider = window.ethereum;

// import/get your web3 eth provider
const addresses = await ethProvider.request({
  method: 'eth_Accounts',
});
const accountId = await getAccountId(ethProvider, addresses[0]);
const authMethod = await EthereumWebAuth.getAuthMethod(ethProvider, accountId);

const session = await DIDSession.get(accountId, authMethod, {
  resources: compose.resources,
});

compose.setDID(session.did);

const account = addresses[0];

export { session, compose, account };
