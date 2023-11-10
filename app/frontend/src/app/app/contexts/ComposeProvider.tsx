import {ComposeClient} from "@composedb/client";
import {createContext, useContext, useEffect, useState} from "react";
import definitionJson from 'src/utils/runtime-composite.json';
import {DIDSession} from 'did-session';
import {EthereumWebAuth, getAccountId} from '@didtools/pkh-ethereum';

import {RuntimeCompositeDefinition} from '@composedb/types';
import {useAccount} from "wagmi";
import {publicProvider} from "wagmi/providers/public";
import {apolloClient} from "src/config/apollo-client";

const definition: RuntimeCompositeDefinition = definitionJson as RuntimeCompositeDefinition;

export const compose = new ComposeClient({
   ceramic: 'http://192.168.1.69:7007',
   // ceramic: 'http://localhost:7007',
   definition,
});


interface Window {
   ethereum?: {
      // value that is populated and returns true by the Coinbase Wallet mobile dapp browser
      isCoinbaseWallet?: true;
      isMetaMask?: true;
      autoRefreshOnNetworkChange?: boolean;
      isBraveWallet?: true;
   };
}

const ComposeContext = createContext<{address: `0x${string}` | undefined; isConnected: boolean; session: DIDSession | undefined;}>({
   address: undefined,
   isConnected: false,
   session: undefined
});

const ComposeProvider = ({children}: {
   children: React.ReactNode;
}) => {
   const {address, isConnected} = useAccount({
      onConnect({address}) {
         if (!address) return;
         runCompose(address).then((session) => {
            setSession(session);
         });
      },
      onDisconnect() {
         setSession(undefined);
      }
   });
   const [session, setSession] = useState<DIDSession>();

   useEffect(() => {
      apolloClient.refetchQueries({
         include: "active"
      });
   }, [session, address]);


   const runCompose = async (address: `0x${string}`) => {
      const wind = window as Window;
      const accountId = await getAccountId(wind.ethereum, address);
      console.log({accountId});


      const authMethod = await EthereumWebAuth.getAuthMethod(wind.ethereum, accountId);

      console.log({
         compose
      });


      const session = await DIDSession.get(accountId, authMethod, {
         resources: compose.resources,
      });

      console.log({session});

      compose.setDID(session.did);

      console.log(session);

      return session;
   };


   // useEffect(() => {
   //    if (!isConnected) {
   //       setSession(undefined);
   //    }
   //    if (isConnected && address) {


   //       const runCompose = async () => {
   //          const wind = window as Window;
   //          const accountId = await getAccountId(wind.ethereum, address);
   //          console.log({accountId});

   //          const authMethod = await EthereumWebAuth.getAuthMethod(wind.ethereum, accountId);

   //          console.log({authMethod});

   //          const session = await DIDSession.get(accountId, authMethod, {
   //             resources: compose.resources,
   //          });

   //          console.log({session});

   //          compose.setDID(session.did);

   //          console.log(session);

   //          return session;
   //       };

   //       runCompose().then((session) => {
   //          setSession(session);
   //       });

   //    } else {
   //       setSession(undefined);
   //    }
   // }, [isConnected, address]);

   return <ComposeContext.Provider value={{
      address, isConnected, session
   }}>
      {children}
   </ComposeContext.Provider>;
};


const useComposeContext = () => useContext(ComposeContext);



export {ComposeProvider, useComposeContext};