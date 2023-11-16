import {DependencyList, useEffect} from "react";

const useEffectOnce = (callback: () => void, deps: DependencyList | undefined) => {
   return useEffect(() => {
      let ignore = false;
      if (!ignore) callback();
      return () => {ignore = true;};
   }, deps);

};

export default useEffectOnce;