import { createContext, useContext, useMemo, useState } from 'react';
import { useComposeContext } from './ComposeProvider';
import { formatEther } from 'ethers';
import { TxHistory, Value } from '../constants/types';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EMAIL, USER_DATA } from '../utils/gql';
import useEffectOnce from '../hooks/useEffectOnce';
import { ethersProvider } from '../config/walletconfig';

interface FlowData {
  inflows: { x: Date; y: string }[];
  outflows: { x: Date; y: string }[];
  cumulativeInflow: { x: Date; y: number }[];
  cumulativeOutflow: { x: Date; y: number }[];
}

const MainContext = createContext<{
  [key: string]: any;
  totalFlowData: FlowData;
  allHistory?: TxHistory[];
}>({
  totalFlowData: {
    inflows: [],
    outflows: [],
    cumulativeInflow: [],
    cumulativeOutflow: [],
  },
});

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [period, setPeriod] = useState<Value>('daily');
  const { address, session } = useComposeContext();
  const [userData, setUserData] = useState<{
    email: string;
    address: string;
  }>();

  const [history, setHistory] = useState<TxHistory[]>([]);
  const [allHistory, setAll] = useState<TxHistory[]>([]);

  const getHistory = async () => {
    const currentBlock = await ethersProvider.getBlockNumber();

    const _history = await ethersProvider.getHistory(address!, 0, currentBlock);

    return {
      _allHistory: _history,
      _filteredHistory: _history.filter((data: TxHistory) => Number(data.value) > 0),
    };
  };

  useEffectOnce(() => {
    if (!address) {
      return;
    }
    getHistory().then(({ _allHistory, _filteredHistory }) => {
      setHistory(_filteredHistory);
      setAll(_allHistory);
    });
  }, [address]);

  const newHistory = useMemo(() => {
    const diffBlock =
      period === 'daily'
        ? Math.floor((24 * 60 * 60) / 13.2)
        : period === 'weekly'
        ? Math.floor((7 * 24 * 60 * 60) / 13.2)
        : period === 'monthly'
        ? Math.floor((365 * 24 * 60 * 60) / 13.2)
        : null;

    if (!diffBlock) {
      return history;
    }
    const lastData = history[history.length - 1];

    if (!lastData) {
      return history;
    }

    const sliceStart = Number(lastData.blockNumber) - diffBlock;
    const diff = history.filter((data) => Number(data.blockNumber) > sliceStart);

    console.log({
      diff: diff.length,
      history: history.length,
    });

    return diff;
  }, [history, period]);

  const totalFlowData = useMemo<FlowData>(() => {
    const data: FlowData = {
      inflows: [],
      outflows: [],
      cumulativeInflow: [],
      cumulativeOutflow: [],
    };

    newHistory
      .map((hist) => ({
        ...hist,
        value: formatEther(BigInt(hist.value)),
        from: hist.from.toLowerCase(),
        to: hist.to.toLowerCase(),
        timeStamp: Number(hist.timeStamp),
      }))
      .forEach((hist) => {
        if (hist.from === address) {
          data.outflows.push({ x: new Date(Number(hist.timeStamp) * 1000), y: hist.value });
        }
        if (hist.to === address) {
          data.inflows.push({ x: new Date(Number(hist.timeStamp) * 1000), y: hist.value });
        }
      });

    const cumulate = (data: { x: Date; y: string }[]) => {
      let cum = 0;
      return data.map((d) => ({
        x: d.x,
        y: (cum += Number(d.y)),
      }));
    };

    data.cumulativeInflow = cumulate(data.inflows);
    data.cumulativeOutflow = cumulate(data.outflows);

    return data;
  }, [newHistory, address]);

  const [mutateFunction] = useMutation(ADD_EMAIL);

  const queryData = useQuery(USER_DATA, {
    variables: {
      nodeId: session?.id,
    },
  });

  useEffectOnce(() => {
    const { loading, error, data } = queryData;
    if (!loading && !error && data) {
      const {
        node: { userData: dt },
      } = data;

      if (dt) {
        setUserData(dt);
      }
    }
  }, [queryData]);

  return (
    <MainContext.Provider
      value={{
        navbarOpen,
        setNavbarOpen,
        totalFlowData,
        allHistory: allHistory.map((hist) => ({
          ...hist,
          value: Number(formatEther(BigInt(hist.value))).toFixed(2),
          from: hist.from.toLowerCase(),
          to: hist.to.toLowerCase(),
          rawValue: Number(formatEther(BigInt(hist.value))),
        })),
        period,
        setPeriod,
        updateEmail: mutateFunction,
        address,
        userData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { MainContextProvider, useMainContext };
