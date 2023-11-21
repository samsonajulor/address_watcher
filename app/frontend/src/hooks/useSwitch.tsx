import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const useSwitch = () => {
  //   const [isDarkMode] = useState(localStorage.theme === 'dark');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { isDarkMode: theme === 'dark', handleToggle };
};

export default useSwitch;
