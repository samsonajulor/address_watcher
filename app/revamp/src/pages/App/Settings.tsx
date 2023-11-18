import { useState } from 'react';
import { Tab } from '@headlessui/react';

import AccountCard from './Settings/AccountCard';
import NotificationCard from './Settings/NotificationCard';
import { useMainContext } from '../../contexts/MainContext';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Settings = () => {
  const [categories] = useState({
    Notification: <NotificationCard />,
    Accounts: <AccountCard />,
  });
  return (
    <div>
      <div className="text-2xl font-bold ">Settings</div>
      <div className="mt-8">
        <Tab.Group>
          <Tab.List className="flex mx-6">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'px-4 pt-2 pb-1 rounded-t-lg mx-1',
                    selected
                      ? 'bg-cs-primary dark:bg-cs-dark-primary shadow-cs-up'
                      : 'bg-cs-bg dark:bg-cs-dark-bg'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.values(categories).map((category, idx) => (
              <Tab.Panel key={idx} className="bar min-h-[200px] p-8">
                {category}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Settings;
