import { decodeCalldata, fallbackDecoder, logger, Txns, isContract } from '../utils/index.ts';
import { ERC20ABI } from '../abis/erc20.ts';
import { ERC721ABI } from '../abis/erc721.ts';

const inspectContractInteraction = async (tx: Txns) => {
  // Ensure it's a contract
  if (!(await isContract(tx.to))) return null;
  const calldata = tx.input;
  if (calldata === '0x') return null;

  // Check if it matches ERC20 Txns, ERC721txns, or any other
  const decoded =
    decodeCalldata(ERC20ABI, calldata, 'ERC20') ??
    decodeCalldata(ERC721ABI, calldata, 'ERC721') ??
    fallbackDecoder(calldata);

  return decoded;
};

export default inspectContractInteraction;
