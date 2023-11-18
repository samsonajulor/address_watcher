import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useMainContext } from '../contexts/MainContext';
import { IoIosMenu } from 'react-icons/io';
import { RxDividerVertical } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  const { navbarOpen, setNavbarOpen } = useMainContext();
  return (
    <div className="grid lg:grid-cols-6 gap-6">
      <div className="bar text-2xl p-4 hidden lg:major-flex cursor-pointer font-bold">
        <Link to="/">Watcher</Link>
        <i onClick={() => setNavbarOpen(!navbarOpen)}>
          <IoIosMenu size={36} />
        </i>
      </div>

      <div className="bar col-span-5 major-flex px-4">
        <div className="flex items-center">
          <div className="text-2xl flex items-center gap-8 lg:hidden cursor-pointer font-bold">
            <Link to="/">Watcher</Link>
            <i onClick={() => setNavbarOpen(!navbarOpen)}>
              <IoIosMenu size={36} />
            </i>
          </div>
          {/* <RxDividerVertical size={36} color="#a3a3a3" /> */}
        </div>

        <ConnectButton />
      </div>
    </div>
  );
};

export default DashboardHeader;
