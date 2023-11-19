import React from 'react';
import Avatar from '../../../assets/avatar.png';
import { useMainContext } from '../../../contexts/MainContext';

const DashTop = () => {
  const { totalFlowData } = useMainContext();
  return (
    <>
      <Download />

      <div className="card h-48 text-2xl font-black flex flex-col justify-around items-center col-span-1 max-md:text-center max-md:text-xl max-sm:text-lg max-sm:col-span-full max-sm:h-36">
        <p>Total Income</p>
        <p className="text-4xl max-md:text-3xl max-sm:text-2xl">
          {totalFlowData.income.toFixed(2)}
          <b className="text-xl max-md:text-lg"> ETH</b>
        </p>
      </div>
      <div className="card h-48 text-2xl font-black flex flex-col justify-around items-center col-span-1 max-md:text-center max-md:text-xl max-sm:text-lg max-sm:col-span-full max-sm:h-36">
        <p>Total Expense</p>
        <p className="text-4xl max-md:text-3xl max-sm:text-2xl">
          {totalFlowData.expense.toFixed(2)}
          <b className="text-xl max-md:text-lg"> ETH</b>
        </p>
      </div>
    </>
  );
};

const Download = () => {
  return (
    <div className="card p-0 h-48 col-span-2 relative overflow-hidden font-black bg-cs-purple text-cs-bg">
      <div className="p-6">
        <div className="lg:grid lg:gap-5 h-full relative z-10">
          <p className="text-4xl italic">hey fren </p>
          <p className="sm:text-xl w-2/3">Generate Insights on your Wallet </p>
        </div>
        <img src={Avatar} alt="Image by Freepik" className="w-2/3 absolute right-0 top-0" />
      </div>
    </div>
  );
};

export default DashTop;
