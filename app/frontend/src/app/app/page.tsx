'use client';

import {useEffect, useState} from 'react';
import {Dialog} from '@headlessui/react';
import Modal from './components/Modal';
import NewModal from './components/NewModal';
import DashHead from './components/DashHead';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS, GET_USER_COUNT, USER_DATA} from 'src/utils/gql';
import {useComposeContext} from 'src/app/app/contexts/ComposeProvider';
import {DIDSession} from 'did-session';
import {PlusIcon} from '@heroicons/react/24/outline';
import {subscribe} from 'src/utils/wssSubscriptions';

const App = () => {
  const {session, isConnected} = useComposeContext();

  return (
    <div className="justify-center items-center bg-gray-950 flex grow flex-col w-full mx-auto max-md:max-w-full max-md:pb-24 max-md:px-5">
      <DashHead />

      {isConnected && session?.did ? (
        <Overview session={session} />
      ) : (
        <p className="mt-20 font-bold text-3xl">Connect to Start</p>
      )}
    </div>
  );
};

const Overview = ({session}: {session: DIDSession;}) => {
  let [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<{
    email: string;
    address: string;
  }>();

  const [totalCount, setTotalCount] = useState(0);

  const {loading, error, data} = useQuery(USER_DATA, {
    variables: {
      nodeId: session.id,
    },
  });

  const totalUsers = useQuery(GET_USER_COUNT);

  const allUsers = useQuery(GET_ALL_USERS, {
    variables: {
      first: totalCount ?? 0,
    },
  });

  useEffect(() => {
    if (!loading && !error && data) {
      const {
        node: {userData: dt},
      } = data;

      if (dt) {
        setUserData(dt);
      }
    }
    // subscribe();
  }, [loading, error, data]);

  useEffect(() => {
    const {loading, error, data} = totalUsers;
    if (!loading && !error && data) {
      setTotalCount(Number(data.userDataCount));
    }
  }, [totalUsers]);


  return (
    <>
      {/* can be in layout since static */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen h-screen bg-black/20 items-center justify-center p-4">
          <Dialog.Panel>
            {/* <Modal /> */}
            <NewModal setIsOpen={setIsOpen} _email={userData?.email} />
          </Dialog.Panel>
        </div>
      </Dialog>
      <div className="justify-between w-full flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:mb-2.5">
        <div className="text-violet-600 text-xl">Total Users: {totalCount}</div>
        <p></p>
      </div>

      <div className="grid gap-2 place-content-center text-center h-40">
        {userData ? (
          <>
            <p>Your registered email is: {userData.email}</p>
            <p
              onClick={() => setIsOpen(true)}
              className="text-[12px] text-orange-400 cursor-pointer hover:text-orange-600"
            >
              Edit email
            </p>
          </>
        ) : (
          <>
            <p>You have no registered email</p>
            <button
              className="text-orange-400 text-lg cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Add an address
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default App;
