import { createContext, useContext, useMemo, useState } from 'react';
import { useComposeContext } from './ComposeProvider';
import { Network, formatEther } from 'ethers';
import { OurTx, TxHistory, Value } from '../constants/types';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EMAIL, USER_DATA } from '../utils/gql';
import useEffectOnce from '../hooks/useEffectOnce';
import { getHistory } from '../utils/getHistory';

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

  const [histories, setHistories] = useState<{
    _allHistory: TxHistory[];
    inflows: TxHistory[];
    outflows: TxHistory[];
  }>({
    _allHistory: [],
    inflows: [],
    outflows: [],
  });

  useEffectOnce(() => {
    if (!address) {
      return;
    }
    getHistory(address).then((hist) => {
      setHistories(hist);
    });
  }, [address]);

  const totalFlowData = useMemo<FlowData>(() => {
    const data: FlowData = {
      inflows: [],
      outflows: [],
      cumulativeInflow: [],
      cumulativeOutflow: [],
    };

    const formatInflow = (hist: TxHistory[], output: { x: Date; y: string }[]) =>
      hist
        .map((hist) => ({
          ...hist,
          value: formatEther(BigInt(hist.value)),
          from: hist.from.toLowerCase(),
          to: hist.to.toLowerCase(),
          timeStamp: Number(hist.timeStamp),
        }))
        .forEach((hist) => {
          output.push({ x: new Date(Number(hist.timeStamp) * 1000), y: hist.value });
        });

    formatInflow(histories.inflows, data.inflows);
    formatInflow(histories.outflows, data.outflows);

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
  }, [histories]);

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
        allHistory: histories?._allHistory.map((hist) => ({
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
