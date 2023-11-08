const DashHead = () => {
  return (
    <div className="justify-between items-start self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
      <input
        className="text-gray-300 text-sm outline-none whitespace-nowrap items-center border bg-gray-900 bg-opacity-20 w-[383px] max-w-full pl-4 py-3 rounded-lg border-solid border-zinc-600 max-md:pr-5"
        placeholder="Assets, wallets, addresses"
      />

      <div className="justify-between items-start self-stretch flex max-w-full gap-5">
        <div className="justify-center items-center self-center flex gap-0 my-auto">
          <div className="text-white text-xl font-bold tracking-wider self-center my-auto">USD</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e77f6a33-565b-44cf-8c49-40b6ccbe5a0d?apiKey=6d09e386ed084a5db605f780c970c7a9&"
            className="aspect-[0.97] object-contain object-center w-6 overflow-hidden flex-1"
          />
        </div>
        <div className="justify-between items-start self-stretch flex gap-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d70026d-64e5-459b-a52b-6dcd775904ca?apiKey=6d09e386ed084a5db605f780c970c7a9&"
            className="aspect-square object-contain object-center w-[35px] overflow-hidden self-stretch max-w-full"
          />
          <div className="justify-center items-center self-center flex flex-col my-auto">
            <div className="text-white font-bold self-stretch whitespace-nowrap">0x94ce…3d17</div>
            <div className="text-white font-bold self-stretch whitespace-nowrap">$0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHead;
