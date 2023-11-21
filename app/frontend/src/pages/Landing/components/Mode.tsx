import { useState } from 'react';
import useSwitch from '../../../hooks/useSwitch';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Mode = () => {
  const { isDarkMode, handleToggle } = useSwitch();

  return (
    <div className="fixed right-10 bottom-10" onClick={handleToggle}>
      {isDarkMode ? <MdOutlineDarkMode size={26} /> : <MdOutlineLightMode size={26} />}
    </div>
  );
};

export default Mode;
