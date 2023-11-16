import {Popover, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';
import {signMessage} from '@wagmi/core';




export default function DropdownInput({value, onUpdate}: {value: number; onUpdate: (value: number) => void;}) {
   const [input, setInput] = useState(value);
   const handleUpdate = async (close: () => void) => {
      const signed = await signMessage({
         message: `You're about to update your budget from ${value} to ${input}`,
      });
      if (signed) {
         onUpdate(input);
         close();
      }
   };
   return (
      <div className="w-full px-2">
         <Popover className="relative" >
            {({open, close}) => (
               <>
                  <Popover.Button
                     className={`
                ${open ? 'text-white' : 'text-white/70'}
                group inline-flex items-center rounded-md bg-gray-900 px-4 py-1 text-sm font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/75`}
                  >
                     <span>Update Budget</span>
                  </Popover.Button>
                  <Transition
                     as={Fragment}
                     enter="transition ease-out duration-200"
                     enterFrom="opacity-0 translate-y-1"
                     enterTo="opacity-100 translate-y-0"
                     leave="transition ease-in duration-150"
                     leaveFrom="opacity-100 translate-y-0"
                     leaveTo="opacity-0 translate-y-1"
                  >
                     <Popover.Panel className="absolute left-1/2 z-10 mt-3 max-w-max -translate-x-1/2 transform">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                           <div className="relative flex gap-1 bg-gray-600/40 p-1">
                              <input className='rounded-md w-20 bg-gray-900 px-2 py-0.5 text-sm outline-none' type="number" value={input} onChange={(e) => setInput(Number(e.target.value))} step={0.1} />
                              <button className="rounded-md px-2 bg-gray-900 text-xs text-white/70 hover:text-white" onClick={() => handleUpdate(close)}>Update</button>
                           </div>
                        </div>
                     </Popover.Panel>
                  </Transition>
               </>
            )}
         </Popover>
      </div>
   );
}
