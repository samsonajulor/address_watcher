import { createContext, useContext, useMemo, useState } from 'react';
import { useComposeContext } from './ComposeProvider';
import useHistory from '../hooks/useHistory';
import { formatEther } from 'ethers';

const MainContext = createContext<{ [key: string]: any }>({});

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const { address } = useComposeContext();

  const history = useHistory(address, undefined, (data) => Number(data.value) > 0);
  const totalFlowData = useMemo(() => {
    history.map((hist) => ({
      ...hist,
      value: formatEther(BigInt(hist.value)),
      from: hist.from.toLowerCase(),
      to: hist.to.toLowerCase(),
    }));

    const data = {
      income: 0,
      expense: 0,
    };

    history.forEach((hist) => {
      if (hist.from.toLowerCase() === address) {
        data.expense += Number(formatEther(BigInt(hist.value)));
      }
      if (hist.to.toLowerCase() === address) {
        data.income += Number(formatEther(BigInt(hist.value)));
      }
    });

    return data;
  }, [history, address]);

  return (
    <MainContext.Provider
      value={{
        navbarOpen,
        setNavbarOpen,
        totalFlowData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextProvider, useMainContext };
