import './polyfills';
import './global.css';
import '@rainbow-me/rainbowkit/styles.css';
import {RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {WagmiConfig} from 'wagmi';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {chains, wagmiConfig} from './config/walletconfig';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
