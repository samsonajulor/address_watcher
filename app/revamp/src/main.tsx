import './polyfills';
import './global.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  Theme,
  darkTheme,
  cssStringFromTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { chains, wagmiConfig } from './config/walletconfig';
import { ComposeProvider } from './contexts/ComposeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import Settings from './pages/App/Settings';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './config/apollo-client';
import merge from 'lodash.merge';

function NoMatch() {
  return (
    <div className=" flex flex-col items-center justify-center mt-24 text-4xl">
      <h2>404: Page Not Found</h2>
      <p>Uh oh! Wrong page 😞</p>
    </div>
  );
}
import { MainContextProvider } from './contexts/MainContext';
import Home from './pages/App/Home';
import Activity from './pages/App/Activity';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
  {
    path: '/app',
    element: (
      <ComposeProvider>
        <MainContextProvider>
          <App />
        </MainContextProvider>
      </ComposeProvider>
    ),
    children: [
      {
        path: '/app',
        element: <Home />,
      },
      {
        path: '/app/activity',
        element: <Activity />,
      },
      {
        path: '/app/settings',
        element: <Settings />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]);

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#7352FF',
    connectButtonBackground: '#33373E',
    connectButtonInnerBackground: '#7352FF',
  },
  fonts: {
    body: 'Happy Monkey, monospace',
  },
} as Theme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={myTheme}>
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ApolloProvider>
  </React.StrictMode>
);
