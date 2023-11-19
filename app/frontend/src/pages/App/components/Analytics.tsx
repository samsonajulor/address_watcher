import { useEffect, useMemo, useRef, useState } from 'react';

import { ethersProvider, publicClient } from '../../../config/walletconfig';
import { useComposeContext } from '../../../contexts/ComposeProvider';
import { Bar, Chart, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Select, { Value } from './Select';
import { ChartData } from 'chart.js/auto';
import DropdownInput from './DropdownInput';
import moment from 'moment';
import { ethers, formatEther } from 'ethers';
import useEffectOnce from '../../../hooks/useEffectOnce';
import { DtType } from '../../../constants/types';
import { dtTypes, periods } from '../../../constants/variables';
import { useMainContext } from '../../../contexts/MainContext';

const Explore = () => {
  const tran = useRef();
  const { address } = useComposeContext();

  const [balData, setBalData] = useState<{ x: Date; y: string }[]>([]);

  const [dataType, setDataType] = useState<DtType>('balance');
  const [threshold, setThreshold] = useState(2);

  const { period, setPeriod, totalFlowData } = useMainContext();

  const data = useMemo(() => {
    if (dataType === 'balance') {
      return balData;
    }

    if (dataType === 'inflow') return totalFlowData.cumulativeInflow;

    return totalFlowData.cumulativeOutflow;
  }, [dataType]);

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' as const,
        },
        title: {
          display: true,
          text: `${dataType} History`.toUpperCase(),
        },
        chartAreaBorder: {
          borderColor: '#33373E',
          borderWidth: 2,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    }),
    [dataType]
  );

  useEffectOnce(() => {
    if (!address) return;
    const getBalances = async () => {
      const currentTime = Date.now();
      const historicDate =
        period === 'daily'
          ? {
              duration: 24 * 60 * 60 * 1000,
              range: 14,
            }
          : period === 'weekly'
          ? {
              duration: 7 * 24 * 60 * 60 * 1000,
              range: 12,
            }
          : {
              duration: 30 * 24 * 60 * 60 * 1000,
              range: 12,
            };

      let blockNum = await publicClient.getBlockNumber({
        cacheTime: 1000000,
      });
      let currentBlockNum = Number(blockNum);

      const blockDuration = Math.floor(historicDate.duration / 13200);

      const blockNums = [];

      for (let i = 0; i < historicDate.range; i++) {
        blockNums.push({
          x: new Date(currentTime - historicDate.duration * i),
          y: currentBlockNum,
        });
        currentBlockNum -= blockDuration;
      }

      console.log(blockNums.length);

      const balances = await Promise.all(
        blockNums.map((blockNum) =>
          publicClient.getBalance({ address, blockNumber: BigInt(blockNum.y) })
        )
      );

      const _data = blockNums.map((d, i) => ({
        x: d.x,
        y: formatEther(balances[i]),
      }));

      return _data.reverse();
    };

    getBalances()
      .then((data) => setBalData(data))
      .catch((error) => console.error({ a: 456, error }));
  }, [address, period]);

  const chartData = useMemo<ChartData<'line'>>(
    () => ({
      labels: data?.map((d) => {
        if (period === 'daily') {
          return moment(d.x).format('MMM D');
        } else if (period === 'weekly') {
          return moment(d.x).format('MMM Do');
        } else {
          return moment(d.x).format('MMM');
        }
      }),
      datasets: [
        {
          label: 'Balance',
          data: data?.map((d) => Number(d.y)) ?? [0, 0, 0, 0, 0, 0],
          borderWidth: 2,
          fill: true,
          borderColor: '#402E8D',
          pointStyle: false,
          tension: 0.4,
          backgroundColor: '#402E8D34',
        },
        {
          label: 'Budget Threshold',
          data: data?.map((d) => threshold) ?? [0, 0, 0, 0, 0, 0],
          pointStyle: false,
          borderWidth: 2,
          borderDash: [5, 5],
          borderColor: dataType === 'outflow' ? 'red' : '#0000',
        },
      ],
    }),
    [data, period, threshold, dataType, balData]
  );

  return (
    <div className="col-span-full">
      <div className="mt-5">
        <div className="flex justify-between max-sm:flex-col">
          <div className="flex gap-4 items-center max-sm:justify-center max-sm:my-4">
            <Select inputs={dtTypes} onSelect={(str) => setDataType(str as DtType)} />
            <DropdownInput value={threshold} onUpdate={setThreshold} />
            <Select inputs={periods} onSelect={(str) => setPeriod(str as Value)} />
          </div>
        </div>

        <Line options={options} data={chartData} className="w-full mt-6" />
      </div>
    </div>
  );
};

export default Explore;
