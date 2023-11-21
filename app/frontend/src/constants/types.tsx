export type Value = 'daily' | 'weekly' | 'monthly';

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
  rawValue: number;
}

export interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

export type DtType = 'balance' | 'inflow' | 'outflow';

export type Filter = 'value' | 'token' | 'contract';
