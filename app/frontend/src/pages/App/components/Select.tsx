import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export type Value = 'daily' | 'weekly' | 'monthly';

export default function Select({
  inputs,
  onSelect,
}: {
  inputs: { value: string }[];
  onSelect: (value: string) => void;
}) {
  const [selected, setSelected] = useState(inputs[0]);

  useEffect(() => {
    onSelect(selected.value);
  }, [selected]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="bar font-bold py-1 pr-8 pl-4 text-sm bg-cs-light-purple text-white/80 hover:text-white w-28 ">
            <span className="block truncate">{selected.value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bar text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
              {inputs.map((input, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-1 pl-6 pr-4 ${
                      active ? 'bg-cs-light-purple text-white' : 'text-cs-purple/80'
                    }`
                  }
                  value={input}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {input.value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-amber-500">
                          <CheckIcon className="h-4 w-4" aria-hidden="true" />
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
