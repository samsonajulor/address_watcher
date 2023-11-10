import React, { createContext, useContext, useEffect } from 'react';
import { subscribe, alchemy } from 'src/utils/wssSubscriptions';
const MyContext = createContext({});

export const WSSContext = () => {
  return useContext(MyContext);
};

const WSSProvider = ({ children }: { children: React.ReactNode }) => {

  useEffect(() => {

    subscribe();

    // Cleanup function
    return () => {
      alchemy.ws.removeAllListeners();
    };
  }, []);

  const contextValue = {
    alchemy,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export default WSSProvider;
