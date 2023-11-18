/* eslint-disable import/prefer-default-export */
import { CeramicClient } from '@ceramicnetwork/http-client';
import {
  createComposite,
  readEncodedComposite,
  writeEncodedComposite,
  writeEncodedCompositeRuntime,
} from '@composedb/devtools-node';

import { DID } from 'dids';
import { Ed25519Provider } from 'key-did-provider-ed25519';
import { getResolver } from 'key-did-resolver';
// eslint-disable-next-line import/no-unresolved
import { fromString } from 'uint8arrays/from-string';

const ceramic = new CeramicClient('http://localhost:7007');

/**
 * Authenticating DID for publishing composite
 * @return {Promise<void>} - return void when DID is authenticated.
 */
const authenticate = async () => {
  const seed = '007f5e2cc2dfadea726f19797497c60ee2a3e2afc78d9d021d60315ddf4e884d'; // hide this later
  const key = fromString(seed, 'base16');
  const did = new DID({
    resolver: getResolver(),
    provider: new Ed25519Provider(key),
  });
  await did.authenticate();
  ceramic.did = did;
};

/**
 * @param {Ora} spinner - to provide progress status.
 * @return {Promise<void>} - return void when composite finishes deploying.
 */
export const writeComposite = async (spinner) => {
  await authenticate();
  spinner.info('writing composite to Ceramic');
  const composite = await createComposite(ceramic, './src/config/ceramic/composites/basicProfile.graphql');
  await writeEncodedComposite(composite, './src/config/ceramic/__generated__/definition.json');
  spinner.info('creating composite for runtime usage');
  await writeEncodedCompositeRuntime(
    ceramic,
    './src/config/ceramic/__generated__/definition.json',
    './src/config/ceramic/__generated__/definition.js'
  );
  spinner.info('deploying composite');
  const deployComposite = await readEncodedComposite(
    ceramic,
    './src/config/ceramic/__generated__/definition.json'
  );

  await deployComposite.startIndexingOn(ceramic);
  spinner.succeed('composite deployed & ready for use');
};
