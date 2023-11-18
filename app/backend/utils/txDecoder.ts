import Web3 from 'web3';

async function decodeTransactionHash(transactionHash: string): Promise<any> {
  const web3 = new Web3('wss://eth-sepolia.g.alchemy.com/v2/3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay');

  try {
    const transaction = await web3.eth.getTransaction(transactionHash);

    if (transaction) {
      return transaction;
    } else {
      console.log(transactionHash, 'This is the hash');
      console.log('Transaction not found.');
      return false;
    }
  } catch (error) {
    console.log(transactionHash, 'This is the hash');

    return false;
  }
}

export default decodeTransactionHash;
