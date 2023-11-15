'use client';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import DashHead from 'src/app/app/components/DashHead';

import {publicClient} from 'src/config/walletconnect';
import {useComposeContext} from 'src/app/app/contexts/ComposeProvider';
import {formatEther} from 'viem';
import {Line} from 'react-chartjs-2';
import 'chart.js/auto';
import Select, {Value} from 'src/app/app/components/Select';
import {ChartData} from 'chart.js/auto';
import DropdownInput from 'src/app/app/components/DropdownInput';

interface ChartOneState {
   series: {
      name: string;
      data: number[];
   }[];
}

const options = {
   responsive: true,

   plugins: {
      legend: {
         position: 'bottom' as const,
      },
      title: {
         display: true,
         text: 'Balance History',
      },
   },
};

const periods: {value: Value;}[] = [
   {
      value: "daily"
   },
   {
      value: "weekly"
   },
   {
      value: "monthly"
   }
];


const Explore = () => {
   const tran = useRef();
   const {address} = useComposeContext();
   const [data, setData] = React.useState<{x: Date; y: string;}[]>();
   const [period, setPeriod] = React.useState<Value>('weekly');
   const [threshold, setThreshold] = useState(1.2);

   const getBalances = async () => {
      const _data = [];

      const currentTime = Date.now();
      const historicDate = period === 'daily' ? {
         duration: 4 * 60 * 60 * 1000,
         start: currentTime - 24 * 60 * 60 * 1000,
         end: currentTime,
      } : period === 'weekly' ? {
         duration: 24 * 60 * 60 * 1000,
         start: currentTime - 7 * 24 * 60 * 60 * 1000,
         end: currentTime,
      } : {
         duration: 4 * 24 * 60 * 60 * 1000,
         start: currentTime - 30 * 24 * 60 * 60 * 1000,
         end: currentTime,
      };

      let blockNum = await publicClient.getBlockNumber({
         cacheTime: 100000
      });
      let currentBlockNum = Number(blockNum);

      const blockDuration = Math.floor(historicDate.duration / 13200);

      for (let i = historicDate.end; i > historicDate.start; i -= historicDate.duration) {

         const balance = await publicClient.getBalance({
            address: address!,
            blockNumber: BigInt(currentBlockNum)
         });

         _data.push({
            x: new Date(i),
            y: formatEther(balance),
         });

         currentBlockNum -= blockDuration;
      }


      return _data.reverse();
   };

   useEffect(() => {
      let ignore = false;
      if (!address) return;
      getBalances().then((data) => !ignore && setData(data)
      ).catch(error => console.error({a: 456, error}));

      return () => {ignore = true;};
   }, [period, address]);

   const chartData = useMemo<ChartData<'line'>>(() => ({
      labels: data?.map(d => {
         if (period === 'daily') {
            return d.x.toLocaleTimeString();
         } else if (period === 'weekly') {
            return d.x.toLocaleDateString();
         } else {
            return d.x.getDate();
         }
      }),
      datasets: [
         {
            label: 'Balance',
            data: data?.map(d => Number(d.y)) ?? [0, 0, 0, 0, 0, 0],
            tension: 0.7,
            pointRadius: 2,
            borderWidth: 1,
         },
         {
            label: 'Budget Threshold',
            data: data?.map(d => threshold) ?? [0, 0, 0, 0, 0, 0],
            pointStyle: false,
            borderWidth: 0.7
         }
      ],
   }), [data, period, threshold]);

   return (
      <div>
         <DashHead />
         <div className='grid gap-5'>


            <div className="flex justify-between">
               <p className='text-2xl font-bold'>Explore</p>
               <div className="flex gap-4 items-center">
                  <DropdownInput value={threshold} onUpdate={setThreshold} />
                  <Select inputs={periods} onSelect={setPeriod} />
               </div>
            </div>

            <Line options={options} data={chartData} />

         </div>

      </div>
   );
};

export default Explore;