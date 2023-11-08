import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  tab: (data: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tab }) => {
  const [active, setActive] = useState('overview');

  tab(active);

  const handleClick = (link: string) => {
    setActive(link);
  };

  return (
    <div className="fixed bg-gray-900 min-h-screen flex flex-col justify-between w-[250px] grow p-10 max-md:pb-24 max-md:px-5">
      <Link href="/" className="text-3xl text-center bg-clip-text max-md:text-4xl">
        Watcher
      </Link>
      <div className="items-start self-center flex w-[105px] max-w-full flex-col max-md:mt-10">
        <div
          className={`text-xl font-bold self-stretch cursor-pointer whitespace-nowrap ${
            active === 'overview' ? 'text-violet-700' : ''
          }`}
          onClick={() => handleClick('overview')}
        >
          Overview
        </div>
        <div
          className={`text-xl font-bold self-stretch cursor-pointer whitespace-nowrap mt-16 max-md:mt-10 ${
            active === 'activity' ? 'text-violet-700' : ''
          }`}
          onClick={() => handleClick('activity')}
        >
          Activity
        </div>
        <div className="text-white text-xl font-bold self-stretch cursor-pointer whitespace-nowrap mt-16 max-md:mt-10">
          Explore
        </div>
        <div className="text-white text-xl font-bold self-stretch cursor-pointer whitespace-nowrap mt-16 max-md:mt-10">
          Settings
        </div>
      </div>
      <Link
        href="/"
        className="text-white text-xl flex font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 px-6 py-3 rounded-xl max-md:px-5"
      >
        Logout
      </Link>
    </div>
  );
};

export default Sidebar;
