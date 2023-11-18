import { createContext, useContext, useMemo, useState } from 'react';
import { useComposeContext } from './ComposeProvider';
import useHistory from '../hooks/useHistory';
import { formatEther } from 'ethers';
import { TxHistory, Value } from '../constants/types';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_EMAIL, USER_DATA } from '../utils/gql';
import useEffectOnce from '../hooks/useEffectOnce';

interface FlowData {
  income: number;
  expense: number;
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
    income: 0,
    expense: 0,
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

  const { allHistory, newHistory } = useHistory(
    address,
    undefined,
    (data) => Number(data.value) > 0
  );
  const totalFlowData = useMemo<FlowData>(() => {
    const data: FlowData = {
      income: 0,
      expense: 0,
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
          data.expense += Number(hist.value);
          data.outflows.push({ x: new Date(Number(hist.timeStamp) * 1000), y: hist.value });
        }
        if (hist.to === address) {
          data.income += Number(hist.value);
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