import { useState } from 'react';
import Overview from './Overview';
import Activity from './Activity';
const Dashboard = () => {
  let tab = 'activity';
  // should be coming from Sidebar prop, pass it up

  return (
    <div>
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        {tab == 'overview' && <Overview />}
        {tab == 'activity' && <Activity />}
      </div>
    </div>
  );
};

export default Dashboard;
