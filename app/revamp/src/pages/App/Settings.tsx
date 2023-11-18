import { useState } from 'react';
import { Tab } from '@headlessui/react';

import AccountCard from './Settings/AccountCard';
import NotificationCard from './Settings/NotificationCard';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Settings = () => {
  const [categories] = useState({
    Notification: NotificationCard,
    Accounts: AccountCard,
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
                    'p-2  rounded-t-lg',
                    selected
                      ? 'bg-cs-primary dark:bg-cs-dark-primary shadow-cs-ll'
                      : 'bg-cs-bg dark:bg-cs-dark-bg'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.values(categories).map((Category, idx) => (
              <Tab.Panel key={idx} className="bar min-h-[400px] p-4">
                <Category />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Settings;
