import binance from '../../../assets/binance.png';
import fantom from '../../../assets/fantom.png';
import polygon from '../../../assets/polygon.png';
import avalanche from '../../../assets/avalanche.png';
import cardano from '../../../assets/cardano.png';
import base from '../../../assets/base.png';
import tron from '../../../assets/tron.png';
import arbitrum from '../../../assets/arbitrum.png';
import solana from '../../../assets/solana.png';
import optimism from '../../../assets/optimism.png';
import Chain from './Chain';

const Chains = () => {
  const chainData = [
    {
      src: binance,
    },
    {
      src: fantom,
    },
    {
      src: polygon,
    },
    {
      src: avalanche,
    },
    {
      src: cardano,
    },
    {
      src: base,
    },
    {
      src: tron,
    },
    {
      src: arbitrum,
    },
    {
      src: solana,
    },
    {
      src: optimism,
    },
  ];

  return (
    <div className="justify-center items-center self-stretch flex w-full flex-col pt-20 px-12 max-md:max-w-full max-md:px-5 max-sm:pt-10 max-sm:px-6">
      <div className="justify-center items-center self-center flex w-full max-w-[1101px] flex-col max-md:max-w-full">
        <div className="text-4xl font-bold self-center whitespace-nowrap max-md:text-3xl max-sm:text-xl">
          SUPPORTED CHAINS
        </div>
        <div className="items-center self-stretch flex grow flex-col mt-10 max-md:max-w-full max-md:mt-10">
          <div className="justify-between items-start self-center flex flex-wrap w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            {chainData.map((chain, index) => (
              <Chain key={index} {...chain} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chains;
