import { ethers } from 'ethers';
import { eth, utils } from 'web3';

export const decodeCalldata = (abi: any[], calldata: string, header: 'ERC20' | 'ERC721') => {
  const match = abi.find((item: { type: string; name: any; inputs: any }) => {
    if (item.type === 'function') {
      const signature =
        item.name! + '(' + item.inputs!.map((i: { type: any }) => i.type).join(',') + ')';
      const hash = utils.sha3(signature)!.slice(0, 10);
      return hash === calldata.slice(0, 10);
    }
    return false;
  });

  if (match && match.inputs && match.inputs.length > 0) {
    const iface = new ethers.Interface(abi);
    return {
      header: header,
      name: match.name,
      params: iface.decodeFunctionData(match.name, calldata),
    };
  } else return null;
};

const bytes_dir = 'https://www.4byte.directory/api/v1/signatures/?hex_signature=';

const fetchSignature = async (functionSelector: string) => {
  const response = await fetch(bytes_dir + functionSelector);
  const data = await response.json();
  return data;
};

export const fallbackDecoder = async (
  calldata: string
): Promise<{
  header: 'Unknown';
  sig: string;
  decodedName: any;
  decodedData: string;
}> => {
  const functionSelector = calldata.slice(0, 10);
  const dynamicDataOffset = parseInt(calldata.slice(10, 74), 16);
  const dynamicDataLength =
    parseInt(calldata.slice(dynamicDataOffset * 2, dynamicDataOffset * 2 + 64), 16) * 2;
  const dynamicData = calldata.slice(
    dynamicDataOffset * 2 + 64,
    dynamicDataOffset * 2 + 64 + dynamicDataLength
  );
  const decodedData = Buffer.from(dynamicData, 'hex').toString();

  return {
    header: 'Unknown',
    sig: functionSelector,
    decodedName: await fetchSignature(functionSelector),
    decodedData,
  };
};
