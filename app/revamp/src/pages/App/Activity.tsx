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
    <>
      <div className="text-2xl font-bold mt-">Activity</div>
      {isConnected ? <History /> : <p className="mt-20 text-center">Connect to Start</p>}
    </>
  );
};

const History = () => {
  const { address } = useComposeContext();
  const { allHistory } = useMainContext();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const history = useMemo(() => [...allHistory!].reverse(), [allHistory, address]);

  useEffectOnce(() => {
    if (history.length > 0) {
      const contracts = history
        .filter(({ functionName }) => functionName !== '')
        .map(({ to }) => to)
        .slice(0, 10);
      decodeContract(contracts).then((r) => console.log({ r }));
    }
  }, [history, address]);

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
                        <div className="flex items-center gap-10 max-md:gap-5">
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
                        <div className="flex items-center gap-10 max-md:gap-5">
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
                    <div className="w-full max-md:flex max-md:items-center max-md:gap-5">
                      <FiSend className="text-blue-300 rotate-45 hidden max-md:flex" />
                      <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:gap-3">
                        <div className="flex items-center gap-10">
                          <FiSend className="text-blue-300 rotate-45 max-md:hidden" />
                          <div className="flex flex-col gap-1.5">
                            <p className="">Contract interaction with {hist.functionName}</p>
                            <p className="text-blue-300">
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
