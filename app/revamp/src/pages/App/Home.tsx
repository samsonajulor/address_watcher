import React from 'react';
import DashTop from './components/DashTop';
import Analytics from './components/Analytics';

const Home = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-sm:px-3">
      <DashTop />
      <Analytics />
    </div>
  );
};

export default Home;
