import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { signMessage } from '@wagmi/core';

export default function DropdownInput({
  value,
  onUpdate,
}: {
  value: number;
  onUpdate: (value: number) => void;
}) {
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
    <div className="w-full">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/80'}
                group rounded-md bar mx-auto px-4 py-1 bg-cs-light-purple text-sm font-bold hover:text-white `}
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
                <div className="overflow-hidden rounded-lg bar p-1 shadow-lg ring-1 ring-black/5">
                  <div className="relative flex gap-2 mx-2">
                    <input
                      className="rounded-md w-20 bg-cs-light-purple px-2 py-0.5 text-sm text-white/70 outline-none"
                      type="number"
                      value={input}
                      onChange={(e) => setInput(Number(e.target.value))}
                      step={0.1}
                    />
                    <button
                      className="rounded-md px-2 bg-cs-light-purple text-xs text-white/70 hover:text-white"
                      onClick={() => handleUpdate(close)}
                    >
                      Update
                    </button>
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
