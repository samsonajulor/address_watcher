'use client';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import DashHead from 'src/app/app/components/DashHead';

import {publicClient} from 'src/config/walletconnect';
import {useComposeContext} from 'src/app/app/contexts/ComposeProvider';
import {formatEther} from 'viem';
import {Bar, Chart, Line} from 'react-chartjs-2';
import 'chart.js/auto';
import Select, {Value} from 'src/app/app/components/Select';
import {ChartData} from 'chart.js/auto';
import DropdownInput from 'src/app/app/components/DropdownInput';
import moment from 'moment';

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
   const [threshold, setThreshold] = useState(2000);

   const getBalances = async () => {
      const _data = [];

      const currentTime = Date.now();
      const historicDate = period === 'daily' ? {
         duration: 24 * 60 * 60 * 1000,
         range: 14,
      } : period === 'weekly' ? {
         duration: 7 * 24 * 60 * 60 * 1000,
         range: 12,
      } : {
         duration: 30 * 24 * 60 * 60 * 1000,
         range: 12,
      };

      let blockNum = await publicClient.getBlockNumber({
         cacheTime: 100000
      });
      let currentBlockNum = Number(blockNum);

      const blockDuration = Math.floor(historicDate.duration / 13200);

      for (let i = 0; i < historicDate.range; i++) {

         const balance = await publicClient.getBalance({
            address: address!,
            blockNumber: BigInt(currentBlockNum)
         });

         _data.push({
            x: new Date(currentTime - (historicDate.duration * i)),
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
            return moment(d.x).format("MMM D");
         } else if (period === 'weekly') {
            return moment(d.x).format("MMM Do");
         } else {
            return moment(d.x).format('MMM');
         }
      }),
      datasets: [
         {
            label: 'Balance',
            data: data?.map(d => Number(d.y)) ?? [0, 0, 0, 0, 0, 0],
            borderWidth: 1,
            fill: true,
            borderColor: ' rgba(167, 184, 159, 1)',
            pointStyle: false,
            tension: 0.4,
            backgroundColor: 'rgb(167, 184, 159, 0.04)',
         },
         {
            label: 'Budget Threshold',
            data: data?.map(d => threshold) ?? [0, 0, 0, 0, 0, 0],
            pointStyle: false,
            borderWidth: 0.5,
            borderDash: [5, 5],
            borderColor: 'red',
         },

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

            <div className="grid gap-4 grid-col-3">
               <Line options={options} data={chartData} className='col-span-2' />

            </div>

         </div>

      </div>
   );
};

export default Explore;