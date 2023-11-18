import { Outlet } from 'react-router-dom';
import Header from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import { useComposeContext } from './contexts/ComposeProvider';
import useHistory from './hooks/useHistory';
import { formatEther } from 'ethers';
import { useMemo } from 'react';

function App() {
  return (
    <div className="bg-cs-bg dark:bg-cs-dark-bg min-w-screen min-h-screen p-2 md:p-4 lg:p-6 flex flex-col gap-6 text-cs-dark-primary dark:text-cs-primary">
      <Header />
      <div className="grid lg:grid-cols-6 gap-6">
        <Sidebar />
        <div className="lg:col-span-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;