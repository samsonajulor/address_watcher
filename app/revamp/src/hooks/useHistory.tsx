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
  }, [period, address]);

  const getHistory = async () => {
    const currentBlock = await ethersProvider.getBlockNumber();

    const _history = await ethersProvider.getHistory(
      address!,
      diffBlock ? currentBlock - diffBlock : 0,
      currentBlock
    );

    return _history.filter((data) => (filterCondition ? filterCondition(data) : true));
  };

  useEffectOnce(() => {
    if (!address) {
      return;
    }
    getHistory().then((result) => {
      setHistory(result);
    });
  }, [diffBlock, address]);

  return history;
};

export default useHistory;
