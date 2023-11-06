import add from "../assets/add.png";
import alert from "../assets/alert.png";
import register from "../assets/register.svg";
import regist from "../assets/regist.png";
import custom from "../assets/custom.png";

const Steps = () => {
  return (
    <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 pt-16 max-md:max-w-full max-md:px-8">
      <div className="items-center self-center flex w-full flex-col p-8 max-md:max-w-full max-md:px-5">
        <div className="items-center self-center flex  flex-col">
          <div className="text-orange-400 text-4xl font-bold self-center whitespace-nowrap max-md:text-3xl">
            <span className="text-white">How it </span>
            <span className="text-orange-400">works</span>
          </div>
          <div className="text-white text-center text-xl font-bold self-stretch mt-4 max-md:max-w-full">
            Step-by-step guide on how to set up and use your address watcher
          </div>
        </div>
        <div className="justify-center self-stretch mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-1/2 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src={register}
                className="translate-x-[-10%] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-1/2 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="justify-center items-start self-stretch flex flex-col w-full pb-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:max-w-full">
                  <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src={regist}
                      className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-white text-2xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto max-md:max-w-full">
                      Register your account
                    </div>
                  </div>
                  <div className="text-zinc-500 text-xl font-bold leading-7 self-stretch mt-3 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </div>
                </div>
                <div className="items-start self-stretch flex w-full justify-between gap-5 mt-10 pr-16 pb-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:pr-5">
                  <div className="justify-between items-start flex max-w-full grow shrink basis-auto gap-5 self-start">
                    <img
                      loading="lazy"
                      src={add}
                      className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-white text-2xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto">
                      Add address to watch
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0c3686a-3dfb-40b7-a6b4-3b1ecd502213?"
                    className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full self-start"
                  />
                </div>
                <div className="items-start self-stretch flex w-full justify-between gap-5 mt-10 pr-5 pb-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap">
                  <div className="justify-between items-start flex max-w-full grow shrink basis-auto gap-5 self-start max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src={custom}
                      className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-white text-2xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto">
                      Customize notifications
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d09202-a94b-4321-b7f5-65e7de777862?"
                    className="aspect-square object-contain object-center w-7 overflow-hidden max-w-full self-start"
                  />
                </div>
                <div className="items-start self-stretch flex w-full justify-between gap-5 mt-10 pr-44 max-md:flex-wrap max-md:pr-5">
                  <div className="justify-between items-start self-stretch flex max-w-full grow shrink basis-auto gap-5">
                    <img
                      loading="lazy"
                      src={alert}
                      className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-white text-2xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto">
                      Set alert type
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/16feffa3-c496-4b90-afe7-55cb5faee800?"
                    className="aspect-square object-contain object-center w-7 overflow-hidden self-center max-w-full my-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
