import binance from 'src/assets/binance.png';
import fantom from 'src/assets/fantom.png';
import polygon from 'src/assets/polygon.png';
import avalanche from 'src/assets/avalanche.png';
import cardano from 'src/assets/cardano.png';
import base from 'src/assets/base.png';
import tron from 'src/assets/tron.png';
import arbitrum from 'src/assets/arbitrum.png';
import solana from 'src/assets/solana.png';
import optimism from 'src/assets/optimism.png';
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
    <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col pt-20 max-md:max-w-full max-md:px-5">
      <div className="justify-center items-center self-center flex w-full max-w-[1101px] flex-col max-md:max-w-full">
        <div className="text-white text-4xl font-bold self-center whitespace-nowrap max-md:text-3xl">
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
