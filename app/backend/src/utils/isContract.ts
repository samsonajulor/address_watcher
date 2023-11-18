import { alchemy } from '../alchemy/config.ts';

const isContract = async (address: string) => {
  const code = await alchemy.core.getCode(address, 'latest');
  return code !== '0x';
};

export default isContract;
