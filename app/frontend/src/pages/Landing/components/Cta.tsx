import { Link } from 'react-router-dom';
import phone from '../../../assets/phone.png';

const Cta = () => {
  return (
    <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 py-20 max-md:max-w-full max-md:px-5">
      <div className="justify-center items-center border self-center flex w-full max-w-[1470px] flex-col pr-px rounded-4xl border-solid border-gray-500 max-md:max-w-full max-md:rounded-3xl max-sm:rounded-2xl">
        <div className="self-stretch pr-6 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
              <img
                alt=""
                loading="lazy"
                src={phone}
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="items-start flex w-[745px] max-w-full flex-col self-start max-sm:text-center max-sm:px-2">
                  <div className="text-white text-2xl font-bold self-stretch max-md:max-w-full max-sm:text-base">
                    Start tracking your address today
                  </div>
                  <div className="text-zinc-500 text-xl leading-relaxed self-stretch mt-6 max-md:max-w-full max-sm:text-sm max-sm:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
                <div className="self-center flex max-w-full justify-center gap-5 mt-14 max-md:flex-wrap max-md:mt-10 max-sm:gap-2 max-sm:my-8">
                  <Link
                    to="/app"
                    className="text-white text-xl font-bold self-center whitespace-nowrap justify-center items-center bg-violet-800 flex-1 px-7 py-3 rounded-2xl max-md:px-5 max-sm:text-sm max-sm:px-4 max-sm:py-2 max-sm:rounded-xl"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/about"
                    className="text-orange-400 text-xl font-bold whitespace-nowrap justify-center items-center bg-orange-400 bg-opacity-20 flex-1 px-7 py-3 rounded-2xl max-md:px-5 max-sm:text-sm max-sm:px-4 max-sm:py-2 max-sm:rounded-xl"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
