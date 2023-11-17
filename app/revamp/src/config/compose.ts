import { ComposeClient } from '@composedb/client';
import definitionJson from '../utils/runtime-composite.json';
import { RuntimeCompositeDefinition } from '@composedb/types';

const definition: RuntimeCompositeDefinition = definitionJson as RuntimeCompositeDefinition;

export const compose = new ComposeClient({
  ceramic: process.env.NEXT_PUBLIC_CERAMIC_URL!,
  definition,
});
