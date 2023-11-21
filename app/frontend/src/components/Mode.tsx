import { useState } from 'react';
import { Switch } from '@headlessui/react';
import useSwitch from '../hooks/useSwitch';

const Mode = () => {
  const { isDarkMode, handleToggle } = useSwitch();

  return (
    <div>
      <Switch
        checked={isDarkMode}
        onChange={handleToggle}
        className={`${isDarkMode ? 'bg-cs-purple/75' : 'bg-cs-light-purple'}
          relative inline-flex items-center h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isDarkMode ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default Mode;
