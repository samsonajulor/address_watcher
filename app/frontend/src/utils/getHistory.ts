import { ethersProvider } from '../config/walletconfig';
import { OurTx, TxHistory } from '../constants/types';

function calculateAverage(array: TxHistory[], origin: 'from' | 'to'): TxHistory {
  const averages: { [key: string]: number } = {};
  const averageStr: TxHistory = {
    blockNumber: '',
    timeStamp: '',
    nonce: '',
    from: '',
    to: '',
    value: '',
    gas: '',
    gasPrice: '',
    cumulativeGasUsed: '',
    gasUsed: '',
    confirmations: '',
  };

  for (const obj of array) {
    for (const key in obj) {
      if (key === 'from' || key === 'to') {
        if (key === origin) {
          // @ts-ignore
          averages[key] = array[0][key];
        }
        continue;
      }

      const value = Number(obj[key as keyof TxHistory]);

      if (!averages[key]) {
        averages[key] = 0;
      }

      averages[key] += value;
    }
  }

  const count = array.length;

  for (const key in averages) {
    if (key === 'from' || key === 'to') {
      // @ts-ignore
      averageStr[key] = averages[key];
      continue;
    }
    if (key === 'timeStamp') {
      averageStr[key] = array[0][key];
      continue;
    }
    // @ts-ignore
    averageStr[key] = Math.floor(averages[key] / count).toString();
  }

  return averageStr;
}

const getBaseHistory = async (address: string) => {
  const res = await fetch(
    `https://api-goerli.basescan.org/api?module=account&action=txlist&address=${address}&startblock=0&endblock=latest`
  );
  return await res.json();
};

export const getHistory = async (address: string) => {
  const currentBlock = Number(await ethersProvider.getBlockNumber());
  const _history: TxHistory[] = await ethersProvider.getHistory(address!, 0, currentBlock);

  const dailyDivider = 7200;
  const weeklyDivider = 7200 * 7;
  const monthlyDivider = 7200 * 30;

  const firstTxBlock = Number(_history[0].blockNumber);
  const valueHistory = _history.filter((tx) => Number(tx.value) > 0);

  const newTx: OurTx = {
    in: [],
    out: [],
  };

  valueHistory.forEach(
    ({
      from,
      to,
      blockNumber,
      timeStamp,
      nonce,
      value,
      gas,
      gasPrice,
      gasUsed,
      confirmations,
      cumulativeGasUsed,
    }) => {
      const newObj = {
        blockNumber,
        timeStamp,
        nonce,
        value,
        gas,
        gasPrice,
        gasUsed,
        confirmations,
        cumulativeGasUsed,
        from,
        to,
      };

      if (to.toLowerCase() === address.toLowerCase()) {
        newTx.in.push(newObj);
      } else if (from.toLowerCase() === address.toLowerCase()) {
        newTx.out.push(newObj);
      }
    }
  );

  return {
    _allHistory: _history,
    inflows: newTx.in,
    outflows: newTx.out,
  };
};
