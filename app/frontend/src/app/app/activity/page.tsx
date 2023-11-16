'use client';
import useHistory from 'src/hooks/useHistory';
import DashHead from '../components/DashHead';
import { useComposeContext } from '../contexts/ComposeProvider';
import React, { useMemo } from 'react';
import { FiSend } from 'react-icons/fi';
import { GrTransaction } from "react-icons/gr";
import { Value } from '../components/Select';
import moment from 'moment';
import { formatEther } from 'viem';
import { InfinitySpin } from 'react-loader-spinner';

const periods: { value: Value }[] = [
  {
    value: 'daily',
  },
  {
    value: 'weekly',
  },
  {
    value: 'monthly',
  },
];

const Activity = () => {
  const { isConnected } = useComposeContext();

  return (
    <div className="justify-center items-center bg-gray-950 flex grow flex-col w-full mx-auto max-md:max-w-full max-md:pb-24 max-md:px-5">
      <DashHead />
      <div className="justify-between flex w-full flex-col mt-10 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="text-2xl font-bold">Activity</div>
        {isConnected ? <History /> : <p className="mt-20 self-center">Connect to Start</p>}
      </div>
    </div>
  );
};

const History = () => {
  const { address } = useComposeContext();
  const [period, setPeriod] = React.useState<Value>('weekly');
  const history = useHistory(address, period, (data) => Number(data.value) > 0);

  const formattedHistory = useMemo(
    () =>
      history.map((hist) => ({
        ...hist,
        value: formatEther(BigInt(hist.value)),
        from: hist.from.toLowerCase(),
        to: hist.to.toLowerCase(),
      })),
    [history]
  );

  return (
    <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
      {history.length > 0 ? (
        formattedHistory.map((hist) => {
          console.log({
            to: hist.to,
            from: hist.from,
            address,
            confTo: hist.to === address,
            confFrom: hist.from === address,
          });
          return (
            <div className="self-stretch flex grow flex-col mt-14 max-md:max-w-full max-md:mt-10">
              <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                {hist.functionName === '' ? (
                  hist.to === address ? (
                    <>
                      <div className='flex items-center gap-10'>
                        <FiSend className="text-violet-700 rotate-90" />
                        <div className='flex flex-col'>
                          <p className='text-lg font-semibold'>Transfer from {hist.from}</p>
                          <p className="text-gray-400">
                            {moment(Number(hist.timeStamp) * 1000).format(
                              'MMMM Do YYYY, h:mm:ss a'
                            )}
                          </p>
                        </div>
                      </div>
                      <div className='font-medium'>{hist.value} ETH</div>
                      {/* <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                        You received {hist.value} ETH from {hist.from}
                      </div>
                      <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                        {moment(Number(hist.timeStamp) * 1000).format('MMMM Do YYYY, h:mm:ss a')}
                      </div> */}
                    </>
                  ) : (
                    <>
                      <div className='flex items-center gap-10'>
                        <FiSend className="text-violet-700" />
                        <div className='flex flex-col'>
                          <p className='text-lg font-semibold'>Transfer to {hist.to}</p>
                          <p className="text-gray-400">
                            {moment(Number(hist.timeStamp) * 1000).format(
                              'MMMM Do YYYY, h:mm:ss a'
                            )}
                          </p>
                        </div>
                      </div>
                      <div className='font-medium'>{hist.value} ETH</div>
                      {/* <FiSend className="text-violet-700" />
                      <div className="text-white text-lg font-semibold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                        You sent {hist.value} ETH to {hist.to}
                      </div>
                      <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                        {moment(Number(hist.timeStamp) * 1000).format('MMMM Do YYYY, h:mm:ss a')}
                      </div> */}
                    </>
                  )
                ) : (
                  <>
                    <div className='flex items-center gap-10'>
                      <FiSend className="text-violet-700 rotate-45" />
                      <div className='flex flex-col'>
                        <p className='text-lg font-semibold'>Contract interaction with {hist.functionName}</p>
                        <p className='text-base text-violet-200'>At {hist.to}</p>
                        <p className="text-gray-400">
                          {moment(Number(hist.timeStamp) * 1000).format(
                            'MMMM Do YYYY, h:mm:ss a'
                          )}
                        </p>
                      </div>
                    </div>
                    <div className='font-medium'>{hist.value} ETH</div>
                    {/* <FiSend className="text-violet-700 rotate-45" />
                    <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                      You interacted with the function {hist.functionName} in the contract {hist.to}
                    </div>
                    <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
                      {moment(Number(hist.timeStamp) * 1000).format('MMMM Do YYYY, h:mm:ss a')}
                    </div> */}
                  </>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className='absolute w-full h-screen grid place-content-center top-0 left-0 bg-black/60'>
            <div className=''>
               <InfinitySpin
                  width='200'
                  color="#6d28d9"
               />
            </div>
         </div>
      )}
    </div>
  );
};

export default Activity;

// {
//   history.map((hist) => {
//     return (
//       <div className="mb-5">
//         {/* <p>{hist.functionName}</p> */}
//         {/* <p>{hist.value}</p> */}
//         {/* <p>{hist.from}</p> */}
//         <p>{hist.to}</p>
//         <p>{moment(Number(hist.timeStamp) * 1000).format('MMMM Do YYYY, h:mm:ss a')}</p>
//         <p>{hist.hash}</p>
//         <p>{hist.txreceipt_status}</p>
//         {hist.functionName !== '' ? (
//           <h2>
//             <p>This is a contract interaction</p>
//             <p>
//               You are about to interact with the function {hist.functionName} in the contract{' '}
//               {hist.to}
//             </p>
//           </h2>
//         ) : (
//           <h2>
//             <p>This is a normal asset transfer</p>
//             <p>
//               You are about to transfer {hist.value} ETH to {hist.to}
//             </p>
//           </h2>
//         )}
//       </div>
//     );
//   });
// }

{
  /* <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/94314a0c-ea85-42fa-98e8-b4a804eb5e71?apiKey=6d09e386ed084a5db605f780c970c7a9&"
              className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
              You just sent 5 ETH to 0x94ce…3d17
            </div>
            <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
              09/11/23 8:05am
            </div>
          </div>
          <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/49bcb9f4-d84c-4d78-948d-10361ce43257?apiKey=6d09e386ed084a5db605f780c970c7a9&"
              className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
              You just received 3.5 ETH from 0x94ce…3d17
            </div>
            <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
              09/11/23 8:05am
            </div>
          </div>
          <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
              className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
              You just sent 5 ETH to 0x94ce…3d17
            </div>
            <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
              09/11/23 8:05am
            </div>
          </div>
          <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
              className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
              You are about to spend 0.5 ETH on a transaction
            </div>
            <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
              09/11/23 8:05am
            </div>
          </div>
          <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fe7f61-7710-47f4-bd1d-4efe70301412?apiKey=6d09e386ed084a5db605f780c970c7a9&"
              className="aspect-square object-contain object-center w-5 rotate-90 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
              You just received 3.5 ETH from 0x94ce…3d17
            </div>
            <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
              09/11/23 8:05am
            </div>
          </div>
          <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&"
              className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
            />
            <div className="text-white text-lg font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
              You are about to spend 0.5 ETH on a transaction
            </div>
            <div className="text-white text-lg font-bold self-center whitespace-nowrap my-auto">
              09/11/23 8:05am
            </div>
          </div> */
}
