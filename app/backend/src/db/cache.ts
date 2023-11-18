import nodeCache from 'node-cache';
import { env } from '../utils/index.ts';

const cache = new nodeCache({ stdTTL: Number(env.CACHE_TTL) || 600 });

export const saveCache = (key: string, value: any) => {
  cache.set(key, value);
};

export const getCache = (key: string) => {
  return cache.get(key);
};

export const deleteCache = (key: string) => {
  cache.del(key);
};

export const clearCache = () => {
  cache.flushAll();
};

export const cacheExists = (key: string) => {
  return cache.has(key);
};
