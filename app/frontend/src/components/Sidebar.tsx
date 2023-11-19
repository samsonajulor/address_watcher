import { useRef, useEffect } from 'react';
import { useMainContext } from '../contexts/MainContext';
import { NavLink } from 'react-router-dom';
import { useOnClickOutside, useWindowSize } from 'usehooks-ts';
import { MdSpaceDashboard } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { IoMdSettings } from 'react-icons/io';
import { useMediaQuery } from 'usehooks-ts';

const Sidebar = () => {
  const { navbarOpen, setNavbarOpen } = useMainContext();
  const ref = useRef(null);
  const isLargeScreen = useMediaQuery('(min-width: 1260px)');
  const isSmallScreen = useMediaQuery('(max-width: 1024px)');

  const { width: windowWidth, height: windowHeight } = useWindowSize();

  useEffect(() => {
    if (!!windowWidth && windowWidth < 1024) {
      setNavbarOpen(false);
    } else {
      setNavbarOpen(true);
    }
  }, [windowWidth]);

  const handleClickOutside = () => {
    if (navbarOpen && windowWidth < 1024) return setNavbarOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <div
      ref={ref}
      className={` ${
        navbarOpen ? 'fixed w-52 h-max lg:static lg:w-auto z-50 lg:mt-8' : 'hidden'
      } bar flex flex-col justify-center gap-8 py-10 min-h-[calc(100vh-200px)]`}
    >
      {[
        ['/app', <MdSpaceDashboard />, 'Dashboard'],
        ['/app/activity', <GrTransaction />, 'Activity'],
        ['/app/settings', <IoMdSettings />, 'Settings'],
      ].map((path) => (
        <NavLink
          to={path[0] as string}
          key={path[0] as string}
          className={({ isActive }) =>
            `flex gap-2 items-center btn ${
              isActive ? 'bg-cs-light-purple text-cs-primary' : 'hover:bg-cs-dark-bg/10'
            }`
          }
          end
        >
          {(isSmallScreen || isLargeScreen) && path[1]}
          {path[2]}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
