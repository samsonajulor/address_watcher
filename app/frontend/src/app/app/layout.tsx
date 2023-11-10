"use client";
import Sidebar from './components/Sidebar';
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from 'src/config/apollo-client';
import {WagmiConfig} from 'wagmi';
import {chains, wagmiConfig} from 'src/config/walletconnect';
import {RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {ComposeProvider} from 'src/app/app/contexts/ComposeProvider';
import WSSProvider from 'src/app/app/contexts/WssProvider';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {

  return (
    <section>
      <Sidebar />

      <ApolloProvider client={apolloClient}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
          <ComposeProvider>
            <WSSProvider>
                <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  {children}
                </div>
            </WSSProvider>
              </ComposeProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ApolloProvider>
    </section>
  );
}
