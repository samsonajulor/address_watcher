import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    //  alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Address Watcher',
  projectId: '5dd1e937acf2b47463a0f600f88f811f',
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { chains, wagmiConfig };
