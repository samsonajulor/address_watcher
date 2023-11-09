'use client';

import {useEffect, useState} from 'react';
import {Dialog} from '@headlessui/react';
import Modal from './components/Modal';
import NewModal from './components/NewModal';
import DashHead from './components/DashHead';
import {useQuery} from '@apollo/client';
import {USER_DATA} from 'src/utils/gql';
import {useComposeContext} from 'src/app/app/contexts/ComposeProvider';
import {DIDSession} from 'did-session';
import {PlusIcon} from '@heroicons/react/24/outline';

const App = () => {
  const {session, isConnected} = useComposeContext();




  return (
    <div className="flex flex-col items-stretch ml-[250px] w-full max-md:w-full max-md:ml-0">
      <div className="justify-center items-center bg-gray-950 flex grow flex-col w-full mx-auto p-8 max-md:max-w-full max-md:pb-24 max-md:px-5">
        <DashHead />

        {
          (isConnected && session?.did) ? <Overview session={session} /> : <p className='mt-20 font-bold text-3xl'>
            Connect to Start
          </p>
        }
      </div>
    </div>
  );

};

const Overview = ({session}: {session: DIDSession;}) => {
  let [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState<{
    email: string;
    address: string;
  }>();

  const {loading, error, data} = useQuery(USER_DATA, {
    variables: {
      nodeId: session.id,
    }
  });


  useEffect(() => {
    if (!loading && !error && data) {
      const {
        node: {userData: dt},
      } = data;

      console.log(data);


      if (dt) {
        setUserData(dt);
      }
    }
  }, [loading, error, data]);





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
        <div className="text-violet-600 text-xl">
          Registered Addresses
        </div>
        {/* <div className="flex gap-2">
          <PlusIcon
            className=" w-4 max-w-full text-orange-400"
          />
          <div
            className="text-orange-400 text-lg self-center whitespace-nowrap my-auto cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Add an address
          </div>
        </div> */}
      </div>

      <div className='grid gap-2 place-content-center text-center h-40'>
        {userData ? <>
          <p>Your registered email is: {userData.email}</p>
          <p onClick={() => setIsOpen(true)} className="text-[12px] text-orange-400 cursor-pointer hover:text-orange-600">Edit email</p>
        </> : <>
          <p>You have no registered email</p>
          <button
            className="text-orange-400 text-lg cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Add an address

          </button>
        </>}
      </div>


      {/* <div className="justify-between self-stretch mb-0 mt-14 max-md:max-w-full max-md:mr-1.5 max-md:mt-10 max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:mt-10">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap">
                  Addresses
                </div>
                <div className="items-start self-stretch flex grow flex-col mt-16 max-md:mt-10">
                  <div className="text-white text-lg tracking-[2.4px] self-stretch whitespace-nowrap">
                    0x9434E0…33B5DE
                  </div>
                  <div className="text-white text-lg tracking-[2.4px] self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    0x9434E0…33B5DE
                  </div>
                  <div className="text-white text-lg tracking-[2.4px] self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    0x9434E0…33B5DE
                  </div>
                  <div className="text-white text-lg tracking-[2.4px] self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    0x9434E0…33B5DE
                  </div>
                  <div className="text-white text-lg tracking-[2.4px] self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    0x9434E0…33B5DE
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:mt-10">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap">
                  Alerts
                </div>
                <div className="justify-center items-start self-stretch flex grow flex-col mt-16 max-md:mt-10">
                  <div className="text-white text-lg self-stretch whitespace-nowrap">
                    in, out, high gas
                  </div>
                  <div className="text-white text-lg self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    in, out
                  </div>
                  <div className="text-white text-lg self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    in, out, contract
                  </div>
                  <div className="text-white text-lg self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    out, high gas
                  </div>
                  <div className="text-white text-lg self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    high gas, contract
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:mt-10">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap">
                  Notifs
                </div>
                <div className="justify-center items-start self-stretch flex grow flex-col mt-16 max-md:mt-10">
                  <div className="text-white text-lg self-stretch whitespace-nowrap">Email</div>
                  <div className="text-white text-lg self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    SMS
                  </div>
                  <div className="text-white text-lg self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    Push notif
                  </div>
                  <div className="text-white text-lg self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    SMS
                  </div>
                  <div className="text-white text-lg self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                    Email
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[6%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col pb-4 max-md:mt-10">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap">
                  Edit
                </div>
                <div className="items-center self-center gap-1 flex w-6 max-w-full flex-col mt-20 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce84a335-aca4-4ad2-a77a-c12efab979e0?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8344e682-a28a-4032-b185-114de79c980d?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch mt-16 max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab152934-4f96-46e1-a68c-5b292818d0aa?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch mt-16 max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/560cf6b1-211f-4e83-b2cd-d98224462802?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch mt-16 max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb39a2c6-77c3-489c-93d6-0fd6e75c292e?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch grow mt-16 max-md:mt-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default App;
