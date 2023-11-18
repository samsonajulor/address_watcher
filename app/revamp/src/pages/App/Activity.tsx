import React, { useEffect, useMemo } from 'react';
import moment from 'moment';
import { FiSend } from 'react-icons/fi';
import { InfinitySpin } from 'react-loader-spinner';
import { useMainContext } from '../../contexts/MainContext';
import { useComposeContext } from '../../contexts/ComposeProvider';
import useEffectOnce from '../../hooks/useEffectOnce';
import { decodeContract } from '../../utils/decodeContract';
import { useMediaQuery } from 'usehooks-ts';

const truncateAddress = (address: string) => {
  const truncatedAddress = address.substring(0, 6) + '...' + address.substring(address.length - 4);
  return truncatedAddress;
};

const Activity = () => {
  const { isConnected } = useComposeContext();

  return (
    <div className="m-5">
      <div className="text-2xl font-bold mt-">Activity</div>
      {isConnected ? <History /> : <p className="mt-20 text-center">Connect to Start</p>}
    </div>
  );
};

const History = () => {
  const { address } = useComposeContext();
  const { allHistory } = useMainContext();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const history = useMemo(() => [...allHistory!].reverse(), [allHistory]);

  useEffectOnce(() => {
    if (history.length > 0) {
      const test = history[0].to;
      console.log({ test });

      decodeContract(test).then((r) => console.log({ r }));
    }
  }, [history]);

  return (
    <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
      {history.length > 0 ? (
        history.map((hist) => {
          return (
            <div key={hist.hash} className="self-stretch flex grow flex-col mt-5 max-md:max-w-full">
              <div className="bar p-5 justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                {hist.functionName === '' ? (
                  hist.to === address ? (
                    <>
                      <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-center gap-10">
                          <FiSend className="text-green-500 rotate-90" />
                          <div className="flex flex-col">
                            <p className="">
                              Transfer from {isSmallScreen ? truncateAddress(hist.to) : hist.from}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {moment(Number(hist.timeStamp) * 1000).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="">- {hist.value} ETH</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-center gap-10">
                          <FiSend className="text-red-500" />
                          <div className="flex flex-col gap-1.5">
                            <p className="">
                              Transfer to {isSmallScreen ? truncateAddress(hist.to) : hist.to}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {moment(Number(hist.timeStamp) * 1000).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="">- {hist.value} ETH</div>
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <div className="w-full max-md:flex max-md:items-center max-md:gap-10">
                      <FiSend className="text-blue-300 rotate-45 hidden max-md:flex" />
                      <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:gap-3">
                        <div className="flex items-center gap-10">
                          <FiSend className="text-blue-300 rotate-45 max-md:hidden" />
                          <div className="flex flex-col gap-1.5">
                            <p className="">Contract interaction with {hist.functionName}</p>
                            <p className="text-blue-400">
                              At {isSmallScreen ? truncateAddress(hist.to) : hist.to}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {moment(Number(hist.timeStamp) * 1000).format(
                                'MMMM Do YYYY, h:mm:ss a'
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="font-medium">{hist.value} ETH</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className="bg-transparent w-full max-h-screen grid place-content-center">
          <div className="">
            <InfinitySpin width="200" color="#7352FF" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Activity;

// <div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/94314a0c-ea85-42fa-98e8-b4a804eb5e71?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You just sent 5 ETH to 0x94ce…3d17
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/49bcb9f4-d84c-4d78-948d-10361ce43257?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You just received 3.5 ETH from 0x94ce…3d17
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You just sent 5 ETH to 0x94ce…3d17
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You are about to spend 0.5 ETH on a transaction
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fe7f61-7710-47f4-bd1d-4efe70301412?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You just received 3.5 ETH from 0x94ce…3d17
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
//     <img
//       loading="lazy"
//       srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//       className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//     />
//     <div className="self-center grow shrink basis-auto my-auto max-md:max-w-full">
//       You are about to spend 0.5 ETH on a transaction
//     </div>
//     <div className="self-center whitespace-nowrap my-auto">09/11/23 8:05am</div>
//   </div>
// </div>

// <div className="self-stretch flex gap-10 grow flex-col mt-14 max-md:max-w-full max-md:mt-10">
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Transfer to 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">- 0.5 ETH</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Conteract interaction with 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">0 ETH</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fe7f61-7710-47f4-bd1d-4efe70301412?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Transfer from 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">+ 0.5 ETH</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Conteract interaction with 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">0 ETH</div>
//   </div>
//   <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
//     <div className="flex items-center gap-10">
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
//         className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
//       />
//       <div className="flex flex-col">
//         <p className="text-">Transfer to 0x94ce…3d17</p>
//         <p className="text-gray-400 text-sm">
//           {moment(1683159551).format('MMMM Do YYYY, h:mm:ss a')}
//         </p>
//       </div>
//     </div>
//     <div className="">- 0.5 ETH</div>
//   </div>
// </div>
