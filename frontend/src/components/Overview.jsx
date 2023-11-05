export default function Overview() {
  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
          <div className="fixed bg-gray-900 min-h-screen flex w-full max-w-[325px] grow flex-col mx-auto pl-16 pr-16 pt-20 pb-28 max-md:pb-24 max-md:px-5">
            <div className="text-4xl text-center tracking-[6.16px] bg-clip-text self-stretch whitespace-nowrap max-md:text-3xl">
              Watcher
            </div>
            <div className="items-start self-center flex w-[105px] max-w-full flex-col mt-32 max-md:mt-10">
              <div className="text-violet-800 text-2xl font-bold self-stretch whitespace-nowrap">
                Overview
              </div>
              <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                Activity
              </div>
              <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                Explore
              </div>
              <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                Settings
              </div>
            </div>
            <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 mb-0 w-full mt-48 pl-12 pr-12 pt-7 pb-6 rounded-2xl max-md:mt-10 max-md:mb-2.5 max-md:px-5">
              Logout
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0">
          <div className="justify-center items-center bg-gray-950 flex grow flex-col w-full mx-auto pt-20 pb-80 px-20 max-md:max-w-full max-md:pb-24 max-md:px-5">
            <div className="justify-between items-start self-center flex w-full max-w-[1259px] gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-zinc-500 text-lg self-stretch whitespace-nowrap items-center border bg-gray-900 bg-opacity-20 w-[383px] max-w-full pl-4 pr-20 py-5 rounded-lg border-solid border-white max-md:pr-5">
                Assets, wallets, addresses
              </div>
              <div className="justify-between items-start self-stretch flex w-[328px] max-w-full gap-5">
                <div className="justify-center items-start self-center flex gap-0 my-auto">
                  <div className="text-white text-3xl font-bold tracking-wider self-center my-auto">
                    USD
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e77f6a33-565b-44cf-8c49-40b6ccbe5a0d?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-[0.97] object-contain object-center w-full rotate-90 overflow-hidden flex-1"
                  />
                </div>
                <div className="justify-between items-start self-stretch flex gap-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-[50px] overflow-hidden self-stretch max-w-full"
                  />
                  <div className="justify-center items-start self-center flex flex-col my-auto">
                    <div className="text-white text-lg font-bold self-stretch whitespace-nowrap">
                      0x94ce…3d17
                    </div>
                    <div className="text-white text-lg font-bold self-stretch whitespace-nowrap mt-2">
                      $0.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between items-start self-center flex w-full max-w-[1259px] gap-5 mt-24 pr-1 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-violet-800 text-3xl self-stretch grow shrink basis-auto">
                Registered Addresses
              </div>
              <div className="justify-between items-start self-stretch flex gap-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/937f5637-9b08-4409-8aff-b70efc053f0a?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                  className="aspect-square object-contain object-center w-7 overflow-hidden self-stretch max-w-full"
                />
                <div className="text-white text-2xl self-center whitespace-nowrap my-auto">
                  Add an address
                </div>
              </div>
            </div>
            <div className="justify-between self-stretch mb-0 mt-24 max-md:max-w-full max-md:mr-1.5 max-md:mt-10 max-md:mb-2.5">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
                  <div className="items-start flex grow flex-col max-md:mt-10">
                    <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                      Addresses
                    </div>
                    <div className="items-start self-stretch flex grow flex-col mt-16 max-md:mt-10">
                      <div className="text-white text-2xl tracking-[2.4px] self-stretch whitespace-nowrap">
                        0x9434E0…33B5DE
                      </div>
                      <div className="text-white text-2xl tracking-[2.4px] self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        0x9434E0…33B5DE
                      </div>
                      <div className="text-white text-2xl tracking-[2.4px] self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        0x9434E0…33B5DE
                      </div>
                      <div className="text-white text-2xl tracking-[2.4px] self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        0x9434E0…33B5DE
                      </div>
                      <div className="text-white text-2xl tracking-[2.4px] self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        0x9434E0…33B5DE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start flex grow flex-col max-md:mt-10">
                    <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                      Alerts
                    </div>
                    <div className="justify-center items-start self-stretch flex grow flex-col mt-16 max-md:mt-10">
                      <div className="text-white text-2xl self-stretch whitespace-nowrap">
                        in, out, high gas
                      </div>
                      <div className="text-white text-2xl self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        in, out
                      </div>
                      <div className="text-white text-2xl self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        in, out, contract
                      </div>
                      <div className="text-white text-2xl self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        out, high gas
                      </div>
                      <div className="text-white text-2xl self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        high gas, contract
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-start flex grow flex-col max-md:mt-10">
                    <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                      Notifs
                    </div>
                    <div className="justify-center items-start self-stretch flex grow flex-col mt-16 max-md:mt-10">
                      <div className="text-white text-2xl self-stretch whitespace-nowrap">
                        Email
                      </div>
                      <div className="text-white text-2xl self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        SMS
                      </div>
                      <div className="text-white text-2xl self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        Push notif
                      </div>
                      <div className="text-white text-2xl self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        SMS
                      </div>
                      <div className="text-white text-2xl self-stretch whitespace-nowrap mt-16 max-md:mt-10">
                        Email
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[6%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center flex grow flex-col pb-4 max-md:mt-10">
                    <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                      Edit
                    </div>
                    <div className="items-center self-center flex w-6 max-w-full flex-col mt-16 max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce84a335-aca4-4ad2-a77a-c12efab979e0?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                        className="aspect-square object-contain object-center w-full overflow-hidden self-stretch"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8344e682-a28a-4032-b185-114de79c980d?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                        className="aspect-square object-contain object-center w-full overflow-hidden self-stretch mt-16 max-md:mt-10"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab152934-4f96-46e1-a68c-5b292818d0aa?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                        className="aspect-square object-contain object-center w-full overflow-hidden self-stretch mt-16 max-md:mt-10"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/560cf6b1-211f-4e83-b2cd-d98224462802?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                        className="aspect-square object-contain object-center w-full overflow-hidden self-stretch mt-16 max-md:mt-10"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb39a2c6-77c3-489c-93d6-0fd6e75c292e?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                        className="aspect-[4.8] object-contain object-center w-full overflow-hidden self-stretch grow mt-16 max-md:mt-10"
                      />
                    </div>
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
