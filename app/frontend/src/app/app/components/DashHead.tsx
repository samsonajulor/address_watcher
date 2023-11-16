'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import DashButton from './DashButton';

const DashHead = () => {
  return (
    <div className="justify-between lg:justify-end flex w-full gap-5 mb-4">
      <div className="flex lg:hidden">
        <DashButton />
      </div>
      <ConnectButton />
    </div>
  );
};

export default DashHead;
