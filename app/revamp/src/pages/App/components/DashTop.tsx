import React from 'react';
import Avatar from '../../../assets/avatar.png';
import { useMainContext } from '../../../contexts/MainContext';

const DashTop = () => {
  const { totalFlowData } = useMainContext();
  return (
    <>
      <Download />

      <div className="card h-48 text-2xl font-black flex flex-col justify-between">
        <p>Total Income</p>
        <p className="text-4xl">
          {totalFlowData.income.toFixed(3)}
          <b className="text-xl"> ETH</b>
        </p>
      </div>
      <div className="card h-48 text-2xl font-black flex flex-col justify-between">
        <p>Total Expense</p>
        <p className="text-4xl">
          {totalFlowData.expense.toFixed(3)}
          <b className="text-xl"> ETH</b>
        </p>
      </div>
    </>
  );
};

const Download = () => {
  return (
    <div className="card p-0 h-48 col-span-2 relative overflow-hidden font-black bg-cs-purple text-cs-bg">
      <div className="p-6 ">
        <div className="lg:grid h-full relative z-10">
          <p className="text-4xl">Hey Fren </p>
          <p className="sm:text-xl w-2/3">Generate Insights on your Wallet </p>
        </div>
        <img src={Avatar} alt="Image by Freepik" className="w-2/3 absolute right-0 top-0" />
      </div>
    </div>
  );
};

export default DashTop;
