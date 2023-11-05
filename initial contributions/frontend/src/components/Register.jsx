export default function Register() {
  return (
    <div className="justify-center items-center bg-gray-950 flex flex-col px-20 max-md:px-5">
      <div className="justify-center items-center backdrop-blur-[5px] bg-gray-900 self-center flex w-full max-w-[1100px] flex-col mt-40 mb-32 px-20 py-20 rounded-[32px] max-md:max-w-full max-md:my-10 max-md:px-5">
        <div className="items-center self-center flex w-[724px] max-w-full flex-col">
          <div className="items-start self-center flex w-[354px] max-w-full flex-col">
            <div className="text-violet-800 text-4xl font-bold self-stretch whitespace-nowrap">
              <span className="text-white">Welcome to </span>
              <span className="text-violet-800">Watcher</span>
            </div>
            <div className="items-start self-stretch flex gap-2.5 mt-4">
              <div className="text-white text-lg font-bold">
                New to watcher?
              </div>
              <div className="text-orange-400 text-lg font-bold self-stretch whitespace-nowrap">
                Register
              </div>
            </div>
          </div>
          <div className="items-center self-stretch flex grow flex-col mt-16 max-md:max-w-full max-md:mt-10">
            <div className="items-start self-center flex w-[643px] max-w-full flex-col">
              <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                  <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                    <div className="text-white text-xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                      Email address
                    </div>
                    <div className="border self-stretch flex w-full h-[50px] flex-col mt-3 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full" />
                  </div>
                  <div className="items-start self-stretch flex grow flex-col mt-10 max-md:max-w-full">
                    <div className="text-white text-xl font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                      Password
                    </div>
                    <div className="border self-stretch flex w-full h-[50px] flex-col mt-3 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full" />
                  </div>
                </div>
                <div className="justify-between items-start self-stretch flex w-full gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
                  <div className="justify-between items-center self-stretch flex gap-2">
                    <input type="checkbox" name="" id="checkbox" />
                    <label
                      htmlFor="checkbox"
                      className="text-white text-xl self-center whitespace-nowrap my-auto"
                    >
                      Remember this device
                    </label>
                  </div>
                  <div className="text-orange-400 text-xl self-center whitespace-nowrap my-auto">
                    Forgot password?
                  </div>
                </div>
              </div>
              <div className="items-center bg-violet-800 self-stretch flex grow flex-col mt-9 px-20 py-6 rounded-2xl max-md:max-w-full max-md:px-5">
                <div className="text-white text-2xl font-bold self-center whitespace-nowrap">
                  Sign up
                </div>
              </div>
            </div>
            <div className="items-center self-stretch flex grow flex-col mt-14 max-md:max-w-full max-md:mt-10">
              <div className="justify-center items-start self-stretch flex gap-4 max-md:max-w-full max-md:flex-wrap">
                <div className="bg-neutral-400 self-center w-[264px] h-px grow shrink basis-auto my-auto" />
                <div className="text-white text-xl">or sign up with</div>
                <div className="bg-neutral-400 self-center w-[264px] h-px grow shrink basis-auto my-auto" />
              </div>
              <div className="items-center border self-center flex w-[398px] max-w-full grow flex-col mt-9 px-20 py-3.5 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:px-5">
                <div className="items-start self-center flex w-[119px] max-w-full gap-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd6568c9-4de6-4865-9810-81ef98296253?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                    Google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
