import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';
import { ApolloClient, useMutation } from '@apollo/client';
import { InfinitySpin } from 'react-loader-spinner';
import { signMessage } from '@wagmi/core';
import { useComposeContext } from '../../../contexts/ComposeProvider';
import { HiDotsVertical } from 'react-icons/hi';

const truncateAddress = (address: `0x${string}`) => {
  const truncatedAddress = address.substring(0, 6) + '...' + address.substring(address.length - 4);
  return truncatedAddress;
};

const NewModal = ({ setIsOpen }: { setIsOpen: (value: boolean) => void }) => {
  const [loading, setLoading] = useState(false);
  const handleAdd = () => {
    setLoading(true);
    setLoading(false);
    setIsOpen(false);
  };
  return (
    <div className="overscroll-y-auto no-scrollbar max-h-[90vh] w-[40vw]">
      <div className="rounded-2xl bg-gray-900 px-10 py-5">
        <div className="text-cs-light-purple text-lg mb-4">Add account</div>
        <div className="grid gap-1">
          <label htmlFor="" className="text-white">
            Address
          </label>
          <input
            name="email"
            type="email"
            placeholder="johndoe@example.com"
            className={`border bg-transparent outline-none px-3 py-2 rounded-lg border-solid border-zinc-500 border-opacity-80}`}
          />
        </div>
        <button
          className="text-white text-xl mt-4 flex justify-center w-full  bg-violet-800 px-3 py-1 rounded-lg max-md:px-3"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {loading && (
        <div className="absolute w-screen h-screen grid place-content-center top-0 left-0 bg-black/60">
          <div className="">
            <InfinitySpin width="200" color="#7352FF" />
          </div>
        </div>
      )}
    </div>
  );
};

const AccountCard = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { address, isConnected } = useComposeContext();

  return (
    <>
      {isConnected ? (
        <div className="m-5">
          <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen h-screen bg-black/20 items-center justify-center p-4">
              <Dialog.Panel>
                {/* <Modal /> */}
                <NewModal setIsOpen={setIsOpen} />
              </Dialog.Panel>
            </div>
          </Dialog>
          <div className="flex justify-between">
            <div>
              <h3 className="">Accounts</h3>
              <p className="text-sm text-gray-500">Connect or watch multiple accounts at once.</p>
            </div>
            <button className="text-cs-light-purple cursor-pointer" onClick={() => setIsOpen(true)}>
              Add an address
            </button>
          </div>
          <div className="mt-8 mb-4 flex font-bold justify-between">
            <div className="w-full">
              <p className="text-center">Address</p>
            </div>
            <div className="w-full">
              <p className="text-center">Status</p>
            </div>
            <div className="w-full">
              <p className="text-center">Balance</p>
            </div>
            <div className="w-full">
              <p className="text-center">Actions</p>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="w-full">
              <p className="text-center">{truncateAddress(address!)}</p>
            </div>
            <div className="w-full">
              <p className="text-center text-green-500">Connected</p>
            </div>
            <div className="w-full">
              <p className="text-center">Balance</p>
            </div>
            <div className="w-full">
              <HiDotsVertical className="mx-auto cursor-pointer" />
            </div>
          </div>
        </div>
      ) : (
        <p className="mt-20 text-center">Connect to Start</p>
      )}
    </>
  );
};

export default AccountCard;
