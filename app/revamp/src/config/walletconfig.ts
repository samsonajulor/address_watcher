import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { baseGoerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { createPublicClient, http } from 'viem';
import { EtherscanProvider } from 'ethers';
import { Networkish } from 'ethers';
import { BlockTag } from 'ethers';

const { chains, publicClient: _client } = configureChains(
  [baseGoerli],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID! }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: 'Address Watcher',
  projectId: '5dd1e937acf2b47463a0f600f88f811f',
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient: _client,
});

const rpc = `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`;

const transport = http(rpc);

const publicClient = createPublicClient({
  chain: baseGoerli,
  transport,
});

export default class MyEtherscanProvider extends EtherscanProvider {
  constructor(networkish: Networkish, apiKey?: string) {
    super(networkish, apiKey);
  }

  async getHistory(
    address: string,
    startBlock?: BlockTag,
    endBlock?: BlockTag
  ): Promise<Array<any>> {
    const params = {
      action: 'txlist',
      address,
      startblock: startBlock == null ? 0 : startBlock,
      endblock: endBlock == null ? 99999999 : endBlock,
      sort: 'asc',
    };

    return this.fetch('account', params);
  }
}

const ethersProvider = new MyEtherscanProvider('sepolia');

export { chains, wagmiConfig, publicClient, ethersProvider };
