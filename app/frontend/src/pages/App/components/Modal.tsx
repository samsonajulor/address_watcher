import { useEffect, useState } from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';
import { XMarkIcon } from '@heroicons/react/24/outline';
import moment from 'moment';
import { useMediaQuery } from 'usehooks-ts';

const truncateAddress = (address: string) => {
  const truncatedAddress = address.substring(0, 6) + '...' + address.substring(address.length - 4);
  return truncatedAddress;
};

const Modal = ({ setIsOpen, data }: { setIsOpen: (value: boolean) => void; data: any }) => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  console.log(data);
  return (
    <div className="overscroll-y-auto no-scrollbar dark:text-white max-h-[90vh] max-md:w-[75vw]">
      <div className="card flex flex-col gap-5 px-10 py-5">
        <div className="flex items-center justify-between">
          <p className="text-cs-light-purple">Contract Interaction</p>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon
              className="text-red-400 cursor-pointer h-6 w-6 outline-none"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 text-sm">
              <p className="text-gray-500">Contract Address:</p>
              <p>{isSmallScreen ? truncateAddress(data.to) : data.to}</p>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <p className="text-gray-500">Function Name:</p>
              <p>{data.functionName}</p>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <p className="text-gray-500">Tx Time:</p>
              <p>{moment(Number(data.timeStamp) * 1000).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div className="flex gap-3 text-sm">
              <p className="text-gray-500">Tx Value:</p>
              <p>{data.value} ETH</p>
            </div>
          </div>
        </div>
        <a
          href={`https://sepolia.etherscan.io/tx/${data.hash}`}
          target="_blank"
          className="btn bg-cs-light-purple text-white w-fit text-sm major-flex gap-2"
        >
          View tx <RiExternalLinkLine />
        </a>
      </div>
    </div>
  );
};

export default Modal;
