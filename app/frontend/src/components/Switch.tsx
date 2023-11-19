import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useDarkMode } from 'usehooks-ts';

const Switchy = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <div className="py-16">
      <Switch
        checked={isDarkMode}
        onChange={(checked) => (!checked ? disable() : enable())}
        className={`${isDarkMode ? 'bg-cs-purple/75' : 'bg-cs-light-purple'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isDarkMode ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Switchy;
