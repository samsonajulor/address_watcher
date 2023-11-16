'use client';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import DashHead from 'src/app/app/components/DashHead';

import {ethersProvider, publicClient} from 'src/config/walletconnect';
import {useComposeContext} from 'src/app/app/contexts/ComposeProvider';
import {formatEther} from 'viem';
import {Bar, Chart, Line} from 'react-chartjs-2';
import 'chart.js/auto';
import Select, {Value} from 'src/app/app/components/Select';
import {ChartData} from 'chart.js/auto';
import DropdownInput from 'src/app/app/components/DropdownInput';
import moment from 'moment';
import {ethers} from 'ethers';
import useHistory from 'src/hooks/useHistory';
import useEffectOnce from 'src/hooks/useEffectOnce';

export type DtType = "balance" | "inflow" | "outflow";


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
      value: "weekly"
   },
   {
      value: "daily"
   },
   {
      value: "monthly"
   }
];

const dtTypes: {value: DtType;}[] = [
   {
      value: "balance"
   },
   {
      value: "inflow"
   },
   {
      value: "outflow"
   }
];


const Explore = () => {
   const tran = useRef();
   const {address} = useComposeContext();

   const [balData, setBalData] = React.useState<{x: Date; y: string;}[]>();
   const [period, setPeriod] = React.useState<Value>('weekly');
   const [dataType, setDataType] = React.useState<DtType>('balance');
   const [threshold, setThreshold] = useState(2);
   const history = useHistory(address, period, (data) => (Number(data.value) > 0));


   const formattedHistory = useMemo(
      () => {
         const _new = history.map((hist) => ({
            ...hist,
            value: formatEther(BigInt(hist.value)),
            from: hist.from.toLowerCase(),
            to: hist.to.toLowerCase(),
         }));

         const _data: {[key: string]: any[];} = {
            inflow: [],
            outflow: [],
         };

         _new.forEach((hist) => {
            if (hist.to === address) {
               _data.inflow.push({x: new Date(Number(hist.timeStamp) * 1000), y: hist.value});
            }
            if (hist.from === address) {
               _data.outflow.push({x: new Date(Number(hist.timeStamp) * 1000), y: hist.value});
            }
         });



         const cumulate = (data: {x: Date; y: string;}[]) => {
            let cum = 0;
            return data.map((d) => ({
               x: d.x,
               y: cum += Number(d.y),
            }));
         };



         return {
            inflow: cumulate(_data.inflow),
            outflow: cumulate(_data.outflow),
         };
      },
      [history, address, period]
   );

   const data = useMemo(() => {
      if (!balData) {
         return [];
      }

      if (dataType === 'balance') {
         return balData;
      }

      if (dataType === 'inflow') {
         return formattedHistory.inflow;
      }

      return formattedHistory.outflow;


   }, [formattedHistory, balData, period, dataType]);

   useEffect(() => {
      console.log(data);
   }, [data]);

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






   useEffectOnce(() => {
      getBalances().then((data) => setBalData(data)
      ).catch(error => console.error({a: 456, error}));
   }, [period, address, history]);

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
                  <Select inputs={dtTypes} onSelect={(str) => setDataType(str as DtType)} />
                  <DropdownInput value={threshold} onUpdate={setThreshold} />
                  <Select inputs={periods} onSelect={(str) => setPeriod(str as Value)} />
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