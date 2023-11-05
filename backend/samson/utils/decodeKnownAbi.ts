import { eth, utils } from "web3";

export const decodeCalldata = (abi: any[], calldata: string) => {
  const match = abi.find((item: { type: string; name: any; inputs: any }) => {
    if (item.type === "function") {
      const signature =
        item.name! +
        "(" +
        item.inputs!.map((i: { type: any }) => i.type).join(",") +
        ")";
      const hash = utils.sha3(signature)!.slice(0, 10);
      return hash === calldata.slice(0, 10);
    }
    return false;
  });

  if (match && match.inputs && match.inputs.length > 0)
    return {
      name: match.name,
      params: eth.abi.decodeParameters(match.inputs, calldata),
    };

  return;
};

const bytes_dir =
  "https://www.4byte.directory/api/v1/signatures/?hex_signature=";

const fetchSignature = async (functionSelector: string) => {
  const response = await fetch(bytes_dir + functionSelector);
  const data = await response.json();
  return data;
};

export const fallbackDecoder = async (calldata: string) => {
  const functionSelector = calldata.slice(0, 10);
  const dynamicDataOffset = parseInt(calldata.slice(10, 74), 16);
  const dynamicDataLength =
    parseInt(
      calldata.slice(dynamicDataOffset * 2, dynamicDataOffset * 2 + 64),
      16
    ) * 2;
  const dynamicData = calldata.slice(
    dynamicDataOffset * 2 + 64,
    dynamicDataOffset * 2 + 64 + dynamicDataLength
  );
  const decodedData = Buffer.from(dynamicData, "hex").toString();

  return {
    sig: functionSelector,
    decodedName: await fetchSignature(functionSelector),
    decodedData,
  };

  console.log({
    functionSelector,
    dynamicDataOffset,
    dynamicDataLength,
    decodedData,
  });
};
