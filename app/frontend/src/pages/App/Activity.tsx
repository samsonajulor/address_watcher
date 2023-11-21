import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { FiSend } from 'react-icons/fi';
import { IoContract } from 'react-icons/io5';
import { FaArrowRightFromBracket, FaArrowRightToBracket } from 'react-icons/fa6';
import { InfinitySpin } from 'react-loader-spinner';
import { useMainContext } from '../../contexts/MainContext';
import { useComposeContext } from '../../contexts/ComposeProvider';
import useEffectOnce from '../../hooks/useEffectOnce';
import { decodeContract } from '../../utils/decodeContract';
import { useMediaQuery } from 'usehooks-ts';
import Pagination from './components/Pagination';
import { IERC20 } from '../../constants/Contract_Interfaces';
import { ERC20ABI } from '../../constants/abis/erc20';
import { ethers, formatUnits } from 'ethers';
import Select from './components/Select';
import { filter } from '../../constants/variables';

const truncateAddress = (address: string) => {
  const truncatedAddress = address.substring(0, 6) + '...' + address.substring(address.length - 4);
  return truncatedAddress;
};

const Activity = () => {
  const { isConnected } = useComposeContext();

  return (
    <div className="max-md:px-2 max-sm:px-3">
      <div className="flex justify-between">
        <div className="text-2xl font-bold max-sm:text-xl">Activity</div>
        <Select inputs={filter} onSelect={() => {}} />
      </div>
      {isConnected ? <History /> : <p className="mt-20 text-center">Connect to Start</p>}
    </div>
  );
};

const History = () => {
  const { address } = useComposeContext();
  const { allHistory } = useMainContext();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const history = useMemo(() => [...allHistory!].reverse(), [allHistory, address]);

  const paginatedHistory = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = history.slice(startIndex, endIndex);

    const filter = currentData.map((tx) => {
      const { functionName, to, ...hist } = tx;
      if (functionName === '') {
        return {
          ...hist,
          functionName: to === address ? 'Received' : 'Sent',
        };
      }

      // console.log({ functionName, hist });

      decodeContract(to).then((r) => {
        if (r.type === 'ERC20') {
          const iface = new ethers.Interface(ERC20ABI);
          const match = IERC20.find((i) => functionName?.startsWith(i));
          const params = iface.decodeFunctionData(match!, hist.input!);

          console.log({ params });
          const Msg = () =>
            match === 'transfer' ? (
              <p>
                Sent {formatUnits(params[1], r.decimals)}{' '}
                <b className="font-bold uppercase">{r.name}</b> to {truncateAddress(params[0])}
              </p>
            ) : match === 'approve' ? (
              <p>
                Approved {formatUnits(params[1], r.decimals)}{' '}
                <b className="font-bold uppercase">{r.name}</b>
                for {truncateAddress(params[0])}
              </p>
            ) : match === 'transferFrom' ? (
              <p>
                Transfer {formatUnits(params[2], r.decimals)}{' '}
                <b className="font-bold uppercase">{r.name}</b>
                from {truncateAddress(params[0])} to {truncateAddress(params[1])}
              </p>
            ) : (
              <p>Pending...</p>
            );

          return {
            ...hist,
            functionName,
            ...r,
            Msg,
          };
        }
      });
    });

    return currentData;
  }, [history, currentPage]);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(history.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // useEffectOnce(() => {
  //   if (history.length > 0) {
  //     const contracts = history
  //       .filter(({ functionName }) => functionName !== '')
  //       .map(({ to }) => to)
  //       .slice(0, 10);
  //     decodeContract(contracts).then((r) => console.log({ r }));
  //   }
  // }, [history, address]);

  return (
    <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
      {history.length > 0 ? (
        <div>
          {paginatedHistory.map((hist) => {
            return (
              <div
                key={hist.hash}
                className="self-stretch flex grow flex-col mt-5 max-md:max-w-full"
              >
                <div className="bar p-5 justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  {hist.functionName === '' ? (
                    hist.to === address ? (
                      <>
                        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="flex items-center gap-10 max-md:gap-5">
                            {/* <FiSend className="text-green-500 rotate-90" /> */}
                            <FaArrowRightToBracket className="text-green-500 rotate-90" />
                            <div className="flex flex-col">
                              <p className="">
                                Received from {isSmallScreen ? truncateAddress(hist.to) : hist.from}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {moment(Number(hist.timeStamp) * 1000).format(
                                  'MMMM Do YYYY, h:mm:ss a'
                                )}
                              </p>
                              <div className="hidden mt-2 max-sm:flex">- {hist.value} ETH</div>
                            </div>
                          </div>
                          <div className="max-sm:hidden">- {hist.value} ETH</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
                          <div className="flex items-center gap-10 max-md:gap-5">
                            {/* <FiSend className="text-red-500" /> */}
                            <FaArrowRightFromBracket className="text-red-500 -rotate-90" />
                            <div className="flex flex-col gap-1.5">
                              <p className="">
                                Sent to {isSmallScreen ? truncateAddress(hist.to) : hist.to}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {moment(Number(hist.timeStamp) * 1000).format(
                                  'MMMM Do YYYY, h:mm:ss a'
                                )}
                              </p>
                              <div className="hidden mt-2 max-sm:flex">- {hist.value} ETH</div>
                            </div>
                          </div>
                          <div className="max-sm:hidden">- {hist.value} ETH</div>
                        </div>
                      </>
                    )
                  ) : (
                    <>
                      <div className="w-full max-md:flex max-md:items-center max-md:gap-5">
                        {/* <FiSend className="text-blue-300 rotate-45 hidden max-md:flex" /> */}
                        <IoContract className="text-blue-300 hidden max-md:flex" size={20} />
                        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:gap-3">
                          <div className="flex items-center gap-10">
                            {/* <FiSend className="text-blue-300 rotate-45 max-md:hidden" /> */}
                            <IoContract className="text-blue-300 max-md:hidden" size={20} />
                            <div className="flex flex-col gap-1.5">
                              <p className="">Contract interaction</p>
                              {/* with {hist.functionName} */}
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
          })}
          <Pagination
            previousPage={handlePreviousClick}
            nextPage={handleNextClick}
            disableFirst={currentPage <= 1}
            disableLast={currentPage >= Math.ceil(history.length / itemsPerPage)}
          />
        </div>
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
