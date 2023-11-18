import { CeramicClient } from '@ceramicnetwork/http-client';
import { ComposeClient } from '@composedb/client';

import { definition } from './__generated__/definition';
import { RuntimeCompositeDefinition } from '@composedb/types';

/**
 * Configure ceramic Client & create context.
 */
export const ceramic = new CeramicClient('http://localhost:7007');

export const composeClient = new ComposeClient({
  ceramic: 'http://localhost:7007',
  // cast our definition as a RuntimeCompositeDefinition
  definition: definition as RuntimeCompositeDefinition,
});
