import {useEffect, useMemo, useState} from 'react';
import {Value} from 'src/app/app/components/Select';
import {ethersProvider, publicClient} from 'src/config/walletconnect';
import useEffectOnce from 'src/hooks/useEffectOnce';

export interface TxHistory {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: string;
  functionName: string;
}

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
    }
    return Math.floor((365 * 24 * 60 * 60) / 13.2);
  }, [period, address]);

  const getHistory = async () => {
    const currentBlock = await ethersProvider.getBlockNumber();
    const _history = await ethersProvider.getHistory(
      address!,
      currentBlock - diffBlock,
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
  }, [diffBlock]);

  return history;
};

export default useHistory;
