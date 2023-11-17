import React from 'react';
import { useMainContext } from '../contexts/MainContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { navbarOpen } = useMainContext();
  return (
    <div
      className={` ${
        navbarOpen ? 'fixed w-52 h-max lg:static lg:w-auto z-50' : 'hidden'
      } bar grid gap-4 py-10`}
    >
      {[
        ['/app', 'Dashboard'],
        ['/app/activity', 'Activity'],
        ['/app/settings', 'Settings'],
      ].map((path) => (
        <NavLink
          to={path[0]}
          key={path[0]}
          className={({ isActive }) =>
            `btn ${isActive ? 'bg-cs-light-purple text-cs-primary' : 'hover:bg-cs-dark-bg/10'}`
          }
          end
        >
          {path[1]}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
