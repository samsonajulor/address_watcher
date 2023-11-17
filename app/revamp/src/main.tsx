import './polyfills';
import './global.css';
import '@rainbow-me/rainbowkit/styles.css';
import {RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {WagmiConfig} from 'wagmi';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {chains, wagmiConfig} from './config/walletconfig';
import {ComposeProvider} from './contexts/ComposeProvider';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './pages/Landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/app",

    element: <ComposeProvider><App /></ComposeProvider>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <RouterProvider router={router} />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
