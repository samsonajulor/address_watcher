import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 pt-16 pb-8 border-t-zinc-500 border-t-opacity-50 border-t border-solid max-md:max-w-full max-md:px-5 max-md:py-24">
      <div className="items-start self-center flex mb-0 w-full flex-col max-md:max-w-full max-md:mb-2.5">
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col max-md:mt-10">
                <div className="items-start self-stretch flex flex-col">
                  <div className="text-4xl bg-clip-text self-stretch whitespace-nowrap max-md:text-4xl">
                    Watcher
                  </div>
                  <div className="text-neutral-400 leading-7 self-stretch mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est, vel!
                  </div>
                </div>
                <div className="items-start self-stretch flex w-full gap-6 mt-8 max-md:justify-center">
                  <img loading="lazy" src={facebook} className="w-6" />
                  <img loading="lazy" src={twitter} className="w-6" />
                  <img loading="lazy" src={linkedin} className="w-6" />
                  <img loading="lazy" src={youtube} className="w-6" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[64%] ml-5 max-md:w-full max-md:ml-0">
              <div className="grow mt-8 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                    <div className="items-start flex w-full max-w-[254px] grow justify-between gap-5 max-md:mt-10">
                      <div className="items-start self-stretch flex flex-col">
                        <div className="text-white text-xl font-bold self-stretch whitespace-nowrap">
                          Menu
                        </div>
                        <div className="items-start self-stretch flex grow flex-col mt-10">
                          <div className="text-white self-stretch whitespace-nowrap">
                            Home
                          </div>
                          <div className="text-white self-stretch whitespace-nowrap mt-8">
                            About
                          </div>
                          <div className="text-white self-stretch whitespace-nowrap mt-8">
                            Pricing
                          </div>
                          <div className="text-white self-stretch whitespace-nowrap mt-8">
                            Dashboard
                          </div>
                        </div>
                      </div>
                      <div className="items-start self-stretch flex flex-col">
                        <div className="text-white text-xl font-bold self-stretch whitespace-nowrap">
                          Utility
                        </div>
                        <div className="items-start self-stretch flex grow flex-col mt-10">
                          <div className="text-white self-stretch whitespace-nowrap">
                            Lorem
                          </div>
                          <div className="text-white self-stretch whitespace-nowrap mt-8">
                            Ipsum
                          </div>
                          <div className="text-white self-stretch whitespace-nowrap mt-8">
                            Dolor
                          </div>
                          <div className="text-white self-stretch whitespace-nowrap mt-8">
                            Sit
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-start flex flex-col max-md:mt-10">
                      <div className="items-start self-stretch flex flex-col">
                        <div className="text-white text-xl font-bold self-stretch whitespace-nowrap">
                          Subscribe to our newsletter
                        </div>
                        <div className="text-neutral-400 leading-7 self-stretch mt-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Est, vel!
                        </div>
                      </div>
                      <input
                        type="email"
                        className="border outline-none pl-4 bg-gray-900 bg-opacity-50 self-stretch flex w-full h-[48px] flex-col mt-10 rounded-lg border-solid border-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center self-stretch flex grow flex-col mt-16 pt-9 px-20 border-t-zinc-500 border-t-opacity-50 border-t border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-violet-700 text-center self-center whitespace-nowrap">
            <span className="text-white">Copyright @ </span>
            <span className="text-orange-400">Web3bridge</span>
            <span className="text-white"> </span>
            <span className="text-violet-700">Cohort IX</span>
            <span className="text-white"> Group 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
