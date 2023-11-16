import {useEffect, useMemo, useState} from "react";
import {Value} from "src/app/app/components/Select";
import {ethersProvider, publicClient} from "src/config/walletconnect";
import useEffectOnce from "src/hooks/useEffectOnce";


const useHistory = (address?: `0x${string}`, period?: Value, filterCondition?: (data: any) => boolean) => {
   const [history, setHistory] = useState<any[]>([]);

   const diffBlock = useMemo(() => {
      if (period === "daily") {
         return Math.floor(14 * 24 * 60 * 60 / 13.2);
      } else if (period === "weekly") {
         return Math.floor(12 * 7 * 24 * 60 * 60 / 13.2);
      }
      return Math.floor(365 * 24 * 60 * 60 / 13.2);

   }, [period]);

   const getHistory = async () => {
      const currentBlock = await ethersProvider.getBlockNumber();
      const _history = await ethersProvider.getHistory(address!, currentBlock - diffBlock, currentBlock);

      return _history.filter((data) => filterCondition ? filterCondition(data) : true);
   };


   useEffectOnce(() => {
      if (!address) {
         return;
      }
      getHistory().then((result) => {
         setHistory(result);
      });
   }, [address, filterCondition, period]);



   return history;
};

export default useHistory;