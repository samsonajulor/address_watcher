export default function Activity() {
  return (
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
          <div className="fixed bg-gray-900 min-h-screen flex w-full max-w-[325px] grow flex-col mx-auto pl-16 pr-16 pt-20 pb-28 max-md:pb-24 max-md:px-5">
            <div className="text-4xl tracking-[6.16px] bg-clip-text self-stretch whitespace-nowrap max-md:text-3xl">
              Watcher
            </div>
            <div className="items-start self-center flex w-[105px] max-w-full flex-col mt-32 max-md:mt-10">
              <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap">
                Overview
              </div>
              <div className="text-violet-800 text-2xl font-bold self-stretch whitespace-nowrap mt-16 max-md:mt-10">
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
          <div className="justify-center items-center bg-gray-950 flex grow flex-col w-full mx-auto pt-20 pb-72 px-20 max-md:max-w-full max-md:pb-24 max-md:px-5">
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/05f4d17c-8511-4e11-ae18-7979ae900ffd?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-[0.97] object-contain object-center w-full rotate-90 overflow-hidden flex-1"
                  />
                </div>
                <div className="justify-between items-start self-stretch flex gap-3">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9f708d-e539-4fab-910a-6a5d7e62432e?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9f708d-e539-4fab-910a-6a5d7e62432e?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9f708d-e539-4fab-910a-6a5d7e62432e?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9f708d-e539-4fab-910a-6a5d7e62432e?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9f708d-e539-4fab-910a-6a5d7e62432e?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9f708d-e539-4fab-910a-6a5d7e62432e?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9f708d-e539-4fab-910a-6a5d7e62432e?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9f708d-e539-4fab-910a-6a5d7e62432e?apiKey=6d09e386ed084a5db605f780c970c7a9&"
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
            <div className="items-center self-center flex w-full max-w-[1051px] flex-col mt-28 -mb-14 max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
              <div className="text-violet-800 text-3xl self-center whitespace-nowrap">
                Activity
              </div>
              <div className="items-end self-stretch flex grow flex-col mt-20 max-md:max-w-full max-md:mt-10">
                <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/94314a0c-ea85-42fa-98e8-b4a804eb5e71?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-2xl font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                    You just sent 5 ETH to 0x94ce…3d17
                  </div>
                  <div className="text-white text-2xl font-bold self-center whitespace-nowrap my-auto">
                    09/11/23 8:05am
                  </div>
                </div>
                <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/49bcb9f4-d84c-4d78-948d-10361ce43257?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-8 rotate-90 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-2xl font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                    You just received 3.5 ETH from 0x94ce…3d17
                  </div>
                  <div className="text-white text-2xl font-bold self-center whitespace-nowrap my-auto">
                    09/11/23 8:05am
                  </div>
                </div>
                <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b1a27cf-66e6-4aa9-a9f6-e76d334f5123?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-2xl font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                    You just sent 5 ETH to 0x94ce…3d17
                  </div>
                  <div className="text-white text-2xl font-bold self-center whitespace-nowrap my-auto">
                    09/11/23 8:05am
                  </div>
                </div>
                <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e21df19b-988a-43d7-9616-22269e02a8f7?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-2xl font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                    You are about to spend 0.5 ETH on a transaction
                  </div>
                  <div className="text-white text-2xl font-bold self-center whitespace-nowrap my-auto">
                    09/11/23 8:05am
                  </div>
                </div>
                <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fe7f61-7710-47f4-bd1d-4efe70301412?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-8 rotate-90 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-2xl font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                    You just received 3.5 ETH from 0x94ce…3d17
                  </div>
                  <div className="text-white text-2xl font-bold self-center whitespace-nowrap my-auto">
                    09/11/23 8:05am
                  </div>
                </div>
                <div className="justify-between items-start self-center flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d8b82e7-f10d-41cd-ac86-f23e15408b35?apiKey=6d09e386ed084a5db605f780c970c7a9&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch max-w-full"
                  />
                  <div className="text-white text-2xl font-bold self-center grow shrink basis-auto my-auto max-md:max-w-full">
                    You are about to spend 0.5 ETH on a transaction
                  </div>
                  <div className="text-white text-2xl font-bold self-center whitespace-nowrap my-auto">
                    09/11/23 8:05am
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
