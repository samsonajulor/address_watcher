import { DtType, Value, Filter } from './types';

export const periods: { value: Value }[] = [
  {
    value: 'daily',
  },
  {
    value: 'weekly',
  },
  {
    value: 'monthly',
  },
];

export const dtTypes: { value: DtType }[] = [
  {
    value: 'balance',
  },
  {
    value: 'inflow',
  },
  {
    value: 'outflow',
  },
];

export const filter: { value: Filter }[] = [
  {
    value: 'all txns',
  },
  {
    value: 'ether transfer',
  },
  {
    value: 'token transfer',
  },
  {
    value: 'contract interaction',
  },
];
