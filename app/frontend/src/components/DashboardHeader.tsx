import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useMainContext } from '../contexts/MainContext';
import { IoIosMenu } from 'react-icons/io';
import { RxDividerVertical } from 'react-icons/rx';
import { SiHiveBlockchain } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

const DashboardHeader = () => {
  const { navbarOpen, setNavbarOpen } = useMainContext();
  const isMidScreen = useMediaQuery('(max-width: 1260px)');
  const isMidScreen2 = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="grid lg:grid-cols-6 gap-6">
      <div className="bar text-xl p-4 hidden lg:major-flex cursor-pointer font-bold">
        <Link to="/" className="flex items-center gap-2">
          {isMidScreen && isMidScreen2 ? '' : <SiHiveBlockchain className="text-cs-light-purple" />}{' '}
          Watcher
        </Link>
        <i onClick={() => setNavbarOpen(!navbarOpen)}>
          <IoIosMenu className="text-cs-light-purple" size={28} />
        </i>
      </div>

      <div className="bar col-span-5 major-flex px-4">
        <div className="flex items-center">
          <div className="text-2xl flex items-center gap-8 lg:hidden cursor-pointer font-bold">
            <Link to="/" className="major-flex gap-2 max-sm:hidden">
              <SiHiveBlockchain className="text-cs-light-purple" />
              Watcher
            </Link>
            <i onClick={() => setNavbarOpen(!navbarOpen)}>
              <IoIosMenu className="text-cs-light-purple" size={28} />
            </i>
          </div>
          {/* <RxDividerVertical size={36} color="#a3a3a3" /> */}
        </div>

        <ConnectButton
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
          showBalance={{
            smallScreen: true,
            largeScreen: true,
          }}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
