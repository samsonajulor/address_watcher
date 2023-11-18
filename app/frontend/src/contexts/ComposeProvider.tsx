import { createContext, useContext, useEffect, useState } from 'react';
import definitionJson from '../utils/runtime-composite.json';
import { DIDSession } from 'did-session';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { useAccount } from 'wagmi';
import { apolloClient } from '../config/apollo-client';
import useEffectOnce from '../hooks/useEffectOnce';
import { ComposeClient } from '@composedb/client';
import { RuntimeCompositeDefinition } from '@composedb/types';

const definition: RuntimeCompositeDefinition = definitionJson as RuntimeCompositeDefinition;

interface Window {
  ethereum?: {
    // value that is populated and returns true by the Coinbase Wallet mobile dapp browser
    isCoinbaseWallet?: true;
    isMetaMask?: true;
    autoRefreshOnNetworkChange?: boolean;
    isBraveWallet?: true;
  };
}

const ComposeContext = createContext<{
  address: `0x${string}` | undefined;
  isConnected: boolean;
  session: DIDSession | undefined;
}>({
  address: undefined,
  isConnected: false,
  session: undefined,
});

const compose = new ComposeClient({
  ceramic: import.meta.env.VITE_CERAMIC_URL!,
  definition,
});

const ComposeProvider = ({ children }: { children: React.ReactNode }) => {
  const { address, isConnected } = useAccount({
    onDisconnect() {
      setSession(undefined);
    },
  });

  const [session, setSession] = useState<DIDSession>();

  useEffect(() => {
    apolloClient.refetchQueries({
      include: 'active',
    });
  }, [session, address]);

  const runCompose = async (address: `0x${string}`) => {
    const wind = window as Window;
    const accountId = await getAccountId(wind.ethereum, address);

    const authMethod = await EthereumWebAuth.getAuthMethod(wind.ethereum, accountId);

    const _session = await DIDSession.get(accountId, authMethod, {
      resources: compose.resources,
    });

    return _session;
  };

  useEffectOnce(() => {
    if (!!address) {
      runCompose(address).then((_session) => {
        if (_session.did) compose.setDID(_session.did);
        setSession(_session);
      });
    } else {
      setSession(undefined);
    }
  }, [address]);

  return (
    <ComposeContext.Provider
      value={{
        address: address?.toLowerCase() as `0x${string}`,
        isConnected,
        session,
      }}
    >
      {children}
    </ComposeContext.Provider>
  );
};

const useComposeContext = () => useContext(ComposeContext);

export { ComposeProvider, useComposeContext, compose };
