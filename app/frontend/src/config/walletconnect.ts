import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { createPublicClient, http } from 'viem';

const { chains, publicClient: _client } = configureChains(
  [sepolia],
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

const transport = http(
  `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`
);

const publicClient = createPublicClient({
  chain: sepolia,
  transport,
});

export { chains, wagmiConfig, publicClient };
