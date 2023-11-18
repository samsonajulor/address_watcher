import { useEffect, useMemo, useState } from 'react';
import { TxHistory, Value } from '../constants/types';
import { ethersProvider } from '../config/walletconfig';
import useEffectOnce from './useEffectOnce';

const useHistory = (
  address?: `0x${string}`,
  period?: Value,
  filterCondition?: (data: TxHistory) => boolean
) => {
  const [history, setHistory] = useState<TxHistory[]>([]);

  const diffBlock = useMemo(() => {
    if (period === 'daily') {
      return Math.floor((14 * 24 * 60 * 60) / 13.2);
    } else if (period === 'weekly') {
      return Math.floor((12 * 7 * 24 * 60 * 60) / 13.2);
    } else if (period === 'monthly') {
      return Math.floor((365 * 24 * 60 * 60) / 13.2);
    } else {
      return null;
    }
  }, [period]);

  const getHistory = async () => {
    const currentBlock = await ethersProvider.getBlockNumber();

    const _history = await ethersProvider.getHistory(address!, 0, currentBlock);

    return _history.filter((data) => (filterCondition ? filterCondition(data) : true));
  };

  useEffectOnce(() => {
    if (!address) {
      return;
    }
    getHistory().then((result) => {
      setHistory(result);
    });
  }, [address]);

  const newHistory = useMemo(() => {
    if (!diffBlock) {
      return history;
    }
    const lastData = history[history.length - 1];

    if (!lastData) {
      return history;
    }

    const sliceStart = Number(lastData.blockNumber) - diffBlock;
    const diff = history.filter((data) => Number(data.blockNumber) > sliceStart);

    return diff;
  }, [history, diffBlock]);

  return {
    newHistory,
    allHistory: history,
  };
};

export default useHistory;
