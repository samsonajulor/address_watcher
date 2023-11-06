export default function Modal() {
  return (
    <div className="max-h-[80vh] rounded-[32px] overflow-auto overscroll-y-none">
      <div className="justify-center items-center backdrop-blur-lg bg-gray-900 self-center flex w-full max-w-[1100px] flex-col px-20 py-20 rounded-[32px] max-md:max-w-full max-md:my-10 max-md:px-5 max-md:py-24">
        <div className="items-center self-center flex mb-0 w-[643px] max-w-full flex-col max-md:mb-2.5">
          <div className="text-violet-800 text-3xl font-bold self-center whitespace-nowrap">
            Add address
          </div>
          <div className="justify-center items-center self-stretch flex grow flex-col mt-16 max-md:max-w-full max-md:mt-10">
            <div className="items-start self-stretch flex flex-col max-md:max-w-full">
              <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  Address
                </div>
                <input className="border bg-transparent outline-none px-5 self-stretch flex w-full h-[50px] flex-col mt-3 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full" />
              </div>
              <div className="items-start self-stretch flex flex-col mt-10 max-md:max-w-full">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  Chain
                </div>
                {/* <div className="justify-center items-center border self-stretch flex grow flex-col w-full mt-3 pl-8 pr-7 py-2.5 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full max-md:px-5"> */}
                <input
                  placeholder="Email"
                  className="border bg-transparent outline-none px-5 self-stretch flex w-full h-[50px] flex-col mt-3 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full"
                />
              </div>
              <div className="items-start self-stretch flex flex-col mt-10 max-md:max-w-full">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  Alerts
                </div>
                <div className="justify-center items-center border self-stretch flex grow flex-col w-full mt-3 pl-8 pr-7 py-2.5 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full max-md:px-5">
                  <div className="justify-between items-start self-stretch flex w-full gap-5 max-md:flex-wrap">
                    <div className="text-zinc-500 text-xl my-auto">
                      Choose up to 3
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/997df337-f58f-473e-b94b-6476a03d0da5?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                      className="aspect-square object-contain object-center w-8 rotate-90 overflow-hidden self-stretch max-w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="items-start self-stretch flex grow flex-col mt-10 max-md:max-w-full">
                <div className="text-white text-xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  Notifs
                </div>
                <div className="justify-center items-center border self-stretch flex grow flex-col w-full mt-3 pl-8 pr-7 py-2.5 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full max-md:px-5">
                  <div className="items-start self-stretch flex w-full justify-between gap-5 max-md:flex-wrap">
                    <div className="text-zinc-500 text-xl self-center my-auto">
                      Email
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/843b1014-1d8a-44c3-ae44-d719617180ae?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                      className="aspect-square object-contain object-center w-8 rotate-90 overflow-hidden self-stretch max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white text-2xl font-bold self-center whitespace-nowrap justify-center items-center bg-violet-800 w-[141px] max-w-full grow mt-14 px-14 py-6 rounded-2xl max-md:mt-10 max-md:px-5">
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
