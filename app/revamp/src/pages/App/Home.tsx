import React from 'react';
import DashTop from './components/DashTop';

const Home = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <DashTop />
    </div>
  );
};

export default Home;
