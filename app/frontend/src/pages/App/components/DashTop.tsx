import React, { useMemo, useState } from 'react';
import Avatar from '../../../assets/avatar.png';
import { useMainContext } from '../../../contexts/MainContext';
import { MdOutlineFileDownload } from 'react-icons/md';

const DashTop = () => {
  const { allHistory, address } = useMainContext();

  const { income, expense } = useMemo(() => {
    if (!allHistory) return { income: 0, expense: 0 };
    if (!address) return { income: 0, expense: 0 };
    let income = 0;
    let expense = 0;

    allHistory?.forEach((hist) => {
      if (hist.to === address.toLocaleLowerCase()) {
        income += hist.rawValue!;
      } else if (hist.from === address.toLocaleLowerCase()) {
        expense += hist.rawValue!;
      }
    });

    return {
      income: income.toFixed(2),
      expense: expense.toFixed(2),
    };
  }, [allHistory, address]);
  return (
    <>
      <Download />

      <div className="card text-2xl font-black flex flex-col justify-around items-center col-span-1 max-md:text-center max-md:text-xl max-sm:text-lg max-sm:col-span-full max-sm:h-36">
        <p>Total Income</p>
        <p className="text-4xl max-md:text-3xl max-sm:text-2xl">
          {income}
          <b className="text-xl max-md:text-lg"> ETH</b>
        </p>
      </div>
      <div className="card text-2xl font-black flex flex-col justify-around items-center col-span-1 max-md:text-center max-md:text-xl max-sm:text-lg max-sm:col-span-full max-sm:h-36">
        <p>Total Expense</p>
        <p className="text-4xl max-md:text-3xl max-sm:text-2xl">
          {expense}
          <b className="text-xl max-md:text-lg"> ETH</b>
        </p>
      </div>
    </>
  );
};

const Download = ({}) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card p-0 col-span-2 relative overflow-hidden font-black bg-cs-purple text-cs-bg">
      <div className="p-6">
        <div className="grid gap-5 h-full relative z-10">
          <p className="text-4xl italic">Hey fren </p>
          <p className="sm:text-xl w-2/3">Generate Insights on your Wallet </p>
          <button
            className="text-cs-light-purple/80 flex gap-2 text-base font-bold w-fit whitespace-nowrap justify-center items-center bg-white flex-1 px-4 py-2 rounded-2xl max-md:px-5 max-sm:text-sm max-sm:px-4 max-sm:py-2 max-sm:rounded-xl tooltip disabled:opacity-70"
            disabled
          >
            Download stat <MdOutlineFileDownload size={20} />
            <span className="tooltiptext">Coming soon</span>
          </button>
        </div>
        <img src={Avatar} alt="Image by Freepik" className="w-2/3 absolute right-0 top-0" />
      </div>
    </div>
  );
};

export default DashTop;
