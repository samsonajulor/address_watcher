export type Bytes = `0x${string}`;

export interface Txns {
  blockHash: any;
  blockNumber: any;
  from: Bytes;
  gas: Bytes;
  gasPrice: Bytes;
  maxFeePerGas: Bytes;
  maxPriorityFeePerGas: Bytes;
  hash: Bytes;
  input: Bytes;
  nonce: Bytes;
  to: Bytes;
  transactionIndex: any;
  value: Bytes;
  type: Bytes;
  accessList: any[];
  chainId: Bytes;
  v: Bytes;
  r: Bytes;
  s: Bytes;
  yParity: Bytes;
}
