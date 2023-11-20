import add from '../../../assets/add.png';
import alert from '../../../assets/alert.png';
import register from '../../../assets/register.svg';
import regist from '../../../assets/regist.png';
import custom from '../../../assets/custom.png';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const Steps = () => {
  const [openPanel, setOpenPanel] = useState(0);

  const panels = [
    {
      title: 'Register your account',
      src: regist,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae. Dolore consectetur corrupti nihil maxime ut inventore! Tempore, laudantium aliquid?',
    },
    {
      title: 'Add address to watch',
      src: add,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae. Dolore consectetur corrupti nihil maxime ut inventore! Tempore, laudantium aliquid?',
    },
    {
      title: 'Customize notifications',
      src: custom,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae. Dolore consectetur corrupti nihil maxime ut inventore! Tempore, laudantium aliquid?',
    },
    {
      title: 'Set alert type',
      src: alert,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae. Dolore consectetur corrupti nihil maxime ut inventore! Tempore, laudantium aliquid?',
    },
  ];

  return (
    <div className="justify-center items-center self-stretch flex w-full flex-col px-20 pt-16 max-md:max-w-full max-md:px-8 max-sm:pt-0">
      <div className="items-center self-center flex w-full flex-col p-8 max-md:max-w-full max-md:px-5">
        <div className="items-center self-center flex  flex-col">
          <div className="text-orange-400 text-4xl font-bold self-center whitespace-nowrap max-md:text-3xl max-sm:text-xl">
            <span>How it </span>
            <span className="text-orange-400">works</span>
          </div>
          <div className="text-center text-xl self-stretch mt-4 max-md:max-w-full max-sm:text-sm">
            Step-by-step guide on how to set up and use your address watcher
          </div>
        </div>

        <div className="justify-center self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-1/2 max-md:max-w-full max-md:ml-0 max-md:">
              <img
                alt=""
                loading="lazy"
                src={register}
                className="translate-x-[-10%] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 max-md:translate-x-0"
              />
            </div>
            {/* <div className="flex flex-col items-stretch w-1/2 ml-5 max-md:w-full max-md:ml-0"> */}
            <div className="flex flex-col w-1/2 gap-10 max-sm:w-full max-md:mt-10">
              {panels.map((panel, i) => (
                <Disclosure
                  as="div"
                  key={i}
                  defaultOpen={i === 0}
                  onChange={() => setOpenPanel(i)}
                  className="flex flex-col gap-5"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between text-left text-2xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto max-md:max-w-full">
                        <div className="items-center flex w-full gap-5 max-md:flex-wrap max-sm:w-fit max-sm:gap-2">
                          <img
                            alt=""
                            loading="lazy"
                            src={panel.src}
                            className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch max-w-full max-sm:w-4"
                          />
                          <div className="text-2xl font-bold self-center whitespace-nowrap my-auto max-md:max-w-full max-sm:text-base">
                            {panel.title}
                          </div>
                        </div>
                        <ChevronUpIcon
                          className={`${
                            !open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-zinc-500 text-lg self-stretch max-md:max-w-full max-sm:text-sm max-sm:w-full">
                        {panel.content}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}{' '}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
