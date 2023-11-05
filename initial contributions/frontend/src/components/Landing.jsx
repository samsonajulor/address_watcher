import push from "../assets/push-rem.png";
import wallet from "../assets/wallet.png";
import notif from "../assets/notif.png";
import setting from "../assets/bx-setting.png";
import history from "../assets/history.png";
import user from "../assets/uil_user.png";
import register from "../assets/register.svg";
import add from "../assets/add.png";
import regist from "../assets/regist.png";
import custom from "../assets/custom.png";
import alert from "../assets/alert.png";
import base from "../assets/base.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

export default function Landing() {
  return (
    <div className="justify-center items-start bg-gray-950 flex flex-col">
      <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 py-24 max-md:max-w-full max-md:px-5">
        <div className="items-start self-center flex w-full max-w-[1407px] flex-col max-md:max-w-full">
          <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="text-6xl bg-clip-text max-md:text-4xl">Watcher</div>
            <div className="items-start self-center flex w-[521px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
              <div className="text-orange-400 text-2xl font-bold self-stretch">
                Home
              </div>
              <div className="text-white text-2xl font-bold self-stretch">
                About
              </div>
              <div className="text-white text-2xl font-bold self-stretch">
                Pricing
              </div>
              <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                Dashboard
              </div>
            </div>
            <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 w-[175px] max-w-full pl-9 pr-9 py-6 rounded-2xl max-md:px-5">
              Register
            </div>
          </div>
          <div className="justify-between self-stretch mt-24 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0">
                <div className="items-start flex mr-0 flex-col my-auto pt-8 max-md:max-w-full max-md:mt-10">
                  <div className="justify-center items-center flex w-[786px] max-w-full flex-col self-start">
                    <div className="text-orange-400 text-8xl font-bold leading-[108px] self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                      <span className="text-white">Welcome to </span>
                      <span className="text-violet-800">address</span>
                      <span className="text-white"> </span>
                      <span className="text-orange-400">watcher</span>
                    </div>
                    <div className="text-white text-3xl leading-10 self-stretch mt-12 max-md:max-w-full max-md:mt-10">
                      Stay Ahead of the Game with Real-Time Alerts and
                      Comprehensive Address Tracking
                    </div>
                  </div>
                  <div className="items-start flex w-[450px] max-w-full justify-between gap-5 mt-28 self-start max-md:flex-wrap max-md:mt-10">
                    <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 flex-1 pl-14 pr-14 pt-7 pb-6 rounded-2xl max-md:px-5">
                      Register
                    </div>
                    <div className="text-orange-400 text-2xl font-bold self-stretch whitespace-nowrap justify-center items-center bg-orange-400 bg-opacity-20 flex-1 pl-10 pr-11 py-7 rounded-2xl max-md:px-5">
                      Learn more
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src={push}
                  className="aspect-[1.23] translate-x-[-15%] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 py-14 max-md:max-w-full max-md:px-5">
        <div className="items-center self-center flex w-full max-w-[1402px] flex-col max-md:max-w-full">
          <div className="text-orange-400 text-5xl font-bold self-center whitespace-nowrap max-md:max-w-full max-md:text-4xl">
            <span className="text-white">Why </span>
            <span className="text-orange-400">Watcher</span>
            <span className="text-white"> is for you</span>
          </div>
          <div className="items-center self-stretch flex grow flex-col mt-28 max-md:max-w-full max-md:mt-10">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="bg-indigo-800 bg-opacity-10 flex w-full max-w-[400px] grow flex-col mx-auto px-11 py-14 rounded-2xl max-md:mt-10 max-md:px-5">
                    <div className="items-center self-stretch flex flex-col">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/70b41a14-9e86-4370-b95d-3619a4df1924?"
                        className="aspect-square object-contain object-center justify-center items-center overflow-hidden self-center max-w-full"
                      />
                      <div className="text-white text-center text-4xl font-bold leading-10 self-stretch mt-5">
                        Real-time monitoring of any address
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-orange-400 bg-opacity-10 flex w-full max-w-[400px] grow flex-col mx-auto px-11 py-20 rounded-2xl max-md:mt-10 max-md:px-5">
                    <div className="items-center self-stretch flex flex-col">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/853164d0-519a-4950-99d8-1cb428c92af0?"
                        className="aspect-square object-contain object-center justify-center items-center overflow-hidden self-center max-w-full"
                      />
                      <div className="text-white text-center text-4xl font-bold leading-10 self-stretch mt-5">
                        Customizable alert settings
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-green-800 bg-opacity-10 flex w-full max-w-[400px] grow flex-col mx-auto px-11 py-14 rounded-2xl max-md:mt-10 max-md:px-5">
                    <div className="items-center self-stretch flex flex-col">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8b3da3c-a4aa-46b7-97f5-6aa4324d6d21?"
                        className="aspect-square object-contain object-center justify-center items-center overflow-hidden self-center max-w-full"
                      />
                      <div className="text-white text-center text-4xl font-bold leading-10 self-stretch mt-5">
                        History of monitored actions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center w-[901px] max-w-full mt-28 max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="bg-white bg-opacity-10 flex w-full max-w-[400px] grow flex-col mx-auto px-11 py-20 rounded-2xl max-md:mt-10 max-md:px-5">
                    <div className="items-center self-stretch flex flex-col">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/69a32bd8-5378-47b3-ab4a-ac19ada97703?"
                        className="aspect-square object-contain object-center justify-center items-center overflow-hidden self-center max-w-full"
                      />
                      <div className="text-white text-center text-4xl font-bold leading-10 self-stretch mt-5">
                        User-friendly interface
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-rose-500 bg-opacity-10 flex w-full max-w-[400px] grow flex-col mx-auto px-11 py-20 rounded-2xl max-md:mt-10 max-md:px-5">
                    <div className="items-center self-stretch flex flex-col">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e98ea1c-8ccf-41b8-8340-e744460318db?"
                        className="aspect-square object-contain object-center justify-center items-center overflow-hidden self-center max-w-full"
                      />
                      <div className="text-white text-center text-4xl font-bold leading-10 self-stretch mt-5">
                        Cross-platform notifications
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 py-20 max-md:max-w-full max-md:px-5">
        <div className="items-center self-center flex w-full max-w-[1197px] flex-col pl-8 pr-8 max-md:max-w-full max-md:px-5">
          <div className="items-center self-center flex w-[847px] max-w-full flex-col">
            <div className="text-orange-400 text-5xl font-bold self-center whitespace-nowrap max-md:text-4xl">
              <span className="text-white">How it </span>
              <span className="text-orange-400">works</span>
            </div>
            <div className="text-white text-center text-2xl font-bold self-stretch mt-4 max-md:max-w-full">
              Step-by-step guide on how to set up and use your address watcher
            </div>
          </div>
          <div className="justify-center self-stretch mt-24 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src={register}
                  className="translate-x-[-10%] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                  <div className="justify-center items-start self-stretch flex flex-col w-full pb-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:max-w-full">
                    <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:flex-wrap">
                      <img
                        loading="lazy"
                        src={regist}
                        className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-white text-3xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto max-md:max-w-full">
                        Register your account
                      </div>
                    </div>
                    <div className="text-zinc-500 text-2xl font-bold leading-9 self-stretch mt-3 max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </div>
                  </div>
                  <div className="items-start self-stretch flex w-full justify-between gap-5 mt-10 pr-16 pb-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap max-md:pr-5">
                    <div className="justify-between items-start flex w-[417px] max-w-full grow shrink basis-auto gap-5 self-start">
                      <img
                        loading="lazy"
                        src={add}
                        className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-white text-3xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto">
                        Add address to watch
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0c3686a-3dfb-40b7-a6b4-3b1ecd502213?"
                      className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full self-start"
                    />
                  </div>
                  <div className="items-start self-stretch flex w-full justify-between gap-5 mt-10 pr-5 pb-6 border-b-zinc-500 border-b-opacity-50 border-b border-solid max-md:flex-wrap">
                    <div className="justify-between items-start flex w-[469px] max-w-full grow shrink basis-auto gap-5 self-start max-md:flex-wrap">
                      <img
                        loading="lazy"
                        src={custom}
                        className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-white text-3xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto">
                        Customize notifications
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d09202-a94b-4321-b7f5-65e7de777862?"
                      className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full self-start"
                    />
                  </div>
                  <div className="items-start self-stretch flex w-full justify-between gap-5 mt-10 pr-44 max-md:flex-wrap max-md:pr-5">
                    <div className="justify-between items-start self-stretch flex w-[312px] max-w-full grow shrink basis-auto gap-5">
                      <img
                        loading="lazy"
                        src={alert}
                        className="aspect-square object-contain object-center w-10 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-white text-3xl font-bold self-center whitespace-nowrap grow shrink basis-auto my-auto">
                        Set alert type
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/16feffa3-c496-4b90-afe7-55cb5faee800?"
                      className="aspect-square object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 py-20 max-md:max-w-full max-md:px-5">
        <div className="justify-center items-center self-center flex w-full max-w-[1101px] flex-col max-md:max-w-full">
          <div className="text-white text-5xl font-bold self-center whitespace-nowrap max-md:text-4xl">
            SUPPORTED CHAINS
          </div>
          <div className="items-center self-stretch flex grow flex-col mt-20 max-md:max-w-full max-md:mt-10">
            <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aebe82ee-0e54-484f-913a-2b20b7fed35f?"
                className="aspect-[3] object-contain object-center w-full overflow-hidden flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be569b40-a558-4721-a084-72f27c6712f3?"
                className="aspect-[3] object-contain object-center w-full overflow-hidden flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/93da3f06-19b2-4bc3-9ad7-ef732c982929?"
                className="aspect-[3] object-contain object-center w-full overflow-hidden flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fdfe77e-536c-4278-9edd-1559ef6d12f0?"
                className="aspect-[4.94] object-contain object-center w-full overflow-hidden flex-1 my-auto"
              />
            </div>
            <div className="justify-between items-start self-center flex w-full max-w-[1005px] gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db9042b9-6452-4bc5-9fa6-321d251a470b?"
                className="aspect-[4.98] object-contain object-center w-[239px] fill-blue-800 overflow-hidden self-center max-w-full my-auto"
              />
              <img
                loading="lazy"
                src={base}
                className="aspect-[1.78] object-contain object-center w-[142px] overflow-hidden self-stretch max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89f8e980-8a14-41dd-ad7c-448300d6a8eb?"
                className="aspect-[3] object-contain object-center w-60 overflow-hidden self-stretch max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a302b34a-fc71-4d9f-bef1-12cb3c779b1f?"
                className="aspect-[3] object-contain object-center w-60 overflow-hidden self-stretch max-w-full"
              />
            </div>
            <div className="justify-between items-start self-center flex w-[552px] max-w-full gap-5 mt-8 max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b43f2aa-71db-4958-9a3d-2ae0a7841689?"
                className="aspect-[3.57] object-contain object-center w-[264px] justify-center items-center overflow-hidden self-center max-w-full grow shrink-0 basis-auto my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/684b2220-2864-48c5-82c3-c6b2196c6eb9?"
                className="aspect-[3] object-contain object-center w-60 overflow-hidden self-stretch max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 py-16 max-md:max-w-full max-md:px-5">
        <div className="self-center w-full max-w-[1348px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="justify-center items-center bg-gray-900 flex grow flex-col w-full mx-auto px-9 py-28 rounded-[32px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-24">
                <div className="items-center self-stretch flex mb-0 flex-col max-md:max-w-full max-md:mb-2.5">
                  <div className="text-orange-400 text-4xl font-bold self-center whitespace-nowrap">
                    Alert Types:
                  </div>
                  {/* <div className="justify-center items-center self-stretch flex grow flex-col mt-14 max-md:max-w-full max-md:mt-10"> */}
                  <div className="justify-center items-center self-stretch flex grow flex-col mt-14 max-md:mt-10">
                    <div className="items-start self-center flex max-w-full gap-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7b00a7-242f-465b-9359-228c71279087?"
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <div className="text-neutral-400 text-opacity-80 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                        Nft mints
                      </div>
                    </div>
                    <div className="items-start self-center flex max-w-full gap-4 mt-9">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7b00a7-242f-465b-9359-228c71279087?"
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <div className="text-neutral-400 text-opacity-80 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                        Balance changes
                      </div>
                    </div>
                    <div className="items-start self-center flex max-w-full gap-4 mt-9">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7b00a7-242f-465b-9359-228c71279087?"
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <div className="text-neutral-400 text-opacity-80 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                        High gas transactions
                      </div>
                    </div>
                    <div className="items-start self-center flex max-w-full gap-4 mt-9">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7b00a7-242f-465b-9359-228c71279087?"
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <div className="text-neutral-400 text-opacity-80 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                        Contract deployment/interaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-center bg-gray-900 flex grow flex-col w-full mx-auto px-20 py-36 rounded-[32px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-24">
                <div className="items-center self-center flex mb-0 w-80 max-w-full flex-col max-md:mb-2.5">
                  <div className="text-orange-400 text-4xl font-bold self-center whitespace-nowrap">
                    Notifications
                  </div>
                  <div className="justify-center items-center self-stretch flex grow flex-col mt-14 max-md:mt-10">
                    <div className="items-start self-center flex w-[90px] max-w-full gap-4">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b7b00a7-242f-465b-9359-228c71279087?"
                        className="aspect-square object-contain object-center w-full overflow-hidden flex-1"
                      />
                      <div className="text-neutral-400 text-opacity-80 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                        SMS
                      </div>
                    </div>
                    <div className="items-start self-center flex w-[121px] max-w-full gap-4 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/326c1c32-29c2-461e-ac26-bdc7de1fb335?"
                        className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-400 text-opacity-80 text-center text-3xl font-bold self-stretch whitespace-nowrap">
                        Email
                      </div>
                    </div>
                    <div className="items-start w-fit self-center flex justify-between gap-4 mt-7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1ff58ea-a701-4673-a3f2-0ea0357f9132?"
                        className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-neutral-400 text-opacity-80 text-3xl font-bold self-stretch whitespace-nowrap grow shrink basis-auto">
                        Push notifs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 py-20 max-md:max-w-full max-md:px-5">
        <div className="justify-center items-center border self-center flex w-full max-w-[1470px] flex-col pr-px rounded-[32px] border-solid border-white max-md:max-w-full">
          <div className="self-stretch pr-6 max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src={phone}
                  className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="items-start flex w-[745px] max-w-full flex-col self-start">
                    <div className="text-white text-3xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                      Start tracking your address today
                    </div>
                    <div className="text-zinc-500 text-2xl leading-10 self-stretch mt-6 max-md:max-w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </div>
                  </div>
                  <div className="items-start flex w-[450px] max-w-full justify-between gap-5 mt-12 self-start max-md:flex-wrap max-md:mt-10">
                    <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 flex-1 pl-14 pr-14 pt-7 pb-6 rounded-2xl max-md:px-5">
                      Register
                    </div>
                    <div className="text-orange-400 text-2xl font-bold self-stretch whitespace-nowrap justify-center items-center bg-orange-400 bg-opacity-20 flex-1 pl-10 pr-11 py-7 rounded-2xl max-md:px-5">
                      Learn more
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 py-24 border-t-zinc-500 border-t-opacity-50 border-t border-solid max-md:max-w-full max-md:px-5 max-md:py-24">
        <div className="items-start self-center flex mb-0 w-full max-w-[1290px] flex-col max-md:max-w-full max-md:mb-2.5">
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col max-md:mt-10">
                  <div className="items-start self-stretch flex flex-col">
                    <div className="text-6xl bg-clip-text self-stretch whitespace-nowrap max-md:text-4xl">
                      Watcher
                    </div>
                    <div className="text-neutral-400 text-lg leading-8 self-stretch mt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est, vel!
                    </div>
                  </div>
                  <div className="items-start self-stretch flex w-full gap-10 mt-8 max-md:justify-center">
                    <img
                      loading="lazy"
                      src={facebook}
                    />
                    <img
                      loading="lazy"
                      src={twitter}
                    />
                    <img
                      loading="lazy"
                      src={linkedin}
                    />
                    <img
                      loading="lazy"
                      src={youtube}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[64%] ml-5 max-md:w-full max-md:ml-0">
                <div className="grow mt-8 max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                      <div className="items-start flex w-full max-w-[254px] grow justify-between gap-5 max-md:mt-10">
                        <div className="items-start self-stretch flex flex-col">
                          <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                            Menu
                          </div>
                          <div className="items-start self-stretch flex grow flex-col mt-10">
                            <div className="text-white text-lg self-stretch whitespace-nowrap">
                              Home
                            </div>
                            <div className="text-white text-lg self-stretch whitespace-nowrap mt-8">
                              About
                            </div>
                            <div className="text-white text-lg self-stretch whitespace-nowrap mt-8">
                              Pricing
                            </div>
                            <div className="text-white text-lg self-stretch whitespace-nowrap mt-8">
                              Dashboard
                            </div>
                          </div>
                        </div>
                        <div className="items-start self-stretch flex flex-col">
                          <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                            Utility
                          </div>
                          <div className="items-start self-stretch flex grow flex-col mt-10">
                            <div className="text-white text-lg self-stretch whitespace-nowrap">
                              Lorem
                            </div>
                            <div className="text-white text-lg self-stretch whitespace-nowrap mt-8">
                              Ipsum
                            </div>
                            <div className="text-white text-lg self-stretch whitespace-nowrap mt-8">
                              Dolor
                            </div>
                            <div className="text-white text-lg self-stretch whitespace-nowrap mt-8">
                              Sit
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-start flex flex-col max-md:mt-10">
                        <div className="items-start self-stretch flex flex-col">
                          <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                            Subscribe to our newsletter
                          </div>
                          <div className="text-neutral-400 text-lg leading-8 self-stretch mt-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Est, vel!
                          </div>
                        </div>
                        <div className="border bg-gray-900 bg-opacity-50 self-stretch flex w-full h-[58px] flex-col mt-10 rounded-lg border-solid border-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center self-stretch flex grow flex-col mt-16 pt-9 px-20 border-t-zinc-500 border-t-opacity-50 border-t border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="text-violet-800 text-center text-lg leading-8 self-center whitespace-nowrap">
              <span className="text-white">Copyright @ </span>
              <span className="text-orange-400">Web3bridge</span>
              <span className="text-white"> </span>
              <span className="text-violet-800">Cohort IX</span>
              <span className="text-white"> Group 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
