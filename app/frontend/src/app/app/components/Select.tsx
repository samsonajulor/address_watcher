import {Fragment, useEffect, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';

export type Value = 'daily' | 'weekly' | 'monthly';


export default function Select({inputs, onSelect}: {inputs: {value: Value;}[], onSelect: (value: Value) => void;}) {
   const [selected, setSelected] = useState(inputs[0]);

   useEffect(() => {
      onSelect(selected.value);
   }, [selected]);

   return (
      <div className="w-28">
         <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
               <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-900 py-1 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm">
                  <span className="block truncate">{selected.value}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                     <ChevronUpDownIcon
                        className="h-4 w-4 text-gray-400"
                        aria-hidden="true"
                     />
                  </span>
               </Listbox.Button>
               <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
                     {inputs.map((input, personIdx) => (
                        <Listbox.Option
                           key={personIdx}
                           className={({active}) =>
                              `relative cursor-default select-none py-1 pl-10 pr-4 ${active ? 'bg-violet-400 text-white' : 'text-white'
                              }`
                           }
                           value={input}
                        >
                           {({selected}) => (
                              <>
                                 <span
                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                       }`}
                                 >
                                    {input.value}
                                 </span>
                                 {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-500">
                                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                 ) : null}
                              </>
                           )}
                        </Listbox.Option>
                     ))}
                  </Listbox.Options>
               </Transition>
            </div>
         </Listbox>
      </div>
   );
}
