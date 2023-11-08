export default function Modal() {
  return (
    <div className="max-h-[90vh] rounded-[32px] overflow-auto overscroll-y-none no-scrollbar">
      <div className="justify-center items-center backdrop-blur-lg bg-gray-900 self-center flex w-full flex-col px-10 py-5 rounded-[32px] max-md:max-w-full max-md:my-10 max-md:px-5 max-md:py-24">
        <div className="items-center self-center flex mb-0 w-[30vw] max-w-full flex-col max-md:mb-2.5">
          <div className="text-violet-700 text-xl font-bold self-center whitespace-nowrap">
            Add address
          </div>
          <div className="justify-center items-center self-stretch flex grow flex-col mt-6 max-md:max-w-full max-md:mt-10">
            <div className="items-start self-stretch flex flex-col max-md:max-w-full">
              <div className="items-start self-stretch flex flex-col max-md:max-w-full">
                <label htmlFor="" className="text-white font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  Address
                </label>
                <input placeholder="Ox" className="border bg-transparent outline-none px-3 py-2 self-stretch flex w-full flex-col mt-3 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full" />
              </div>
              <div className="items-start self-stretch flex flex-col mt-4 max-md:max-w-full">
                <label htmlFor="" className="text-white font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  Chain
                </label>
                <input
                  placeholder="Base"
                  className="border bg-transparent outline-none px-3 py-2 self-stretch flex w-full flex-col mt-3 rounded-lg border-solid border-zinc-500 border-opacity-80 max-md:max-w-full"
                />
              </div>
              <div className="items-start self-stretch flex flex-col mt-4 max-md:max-w-full">
                <div className="text-white flex flex-col font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  <label className="w-full" htmlFor="">Alerts</label>
                  <select className="w-full text-zinc-400 font-normal mt-3 px-3 py-2.5 rounded-lg bg-transparent border border-solid border-zinc-500 border-opacity-80" name="" id="">
                    <option value="">in</option>
                    <option value="">out</option>
                    <option value="">contract</option>
                    <option value="">high gas</option>
                  </select>
                </div>                  
              </div>
              <div className="items-start self-stretch flex flex-col mt-4 max-md:max-w-full">
                <div className="text-white flex flex-col font-bold self-stretch whitespace-nowrap max-md:max-w-full">
                  <label className="w-full" htmlFor="">Notifs</label>
                  <select className="w-full text-zinc-400 font-normal mt-3 px-3 py-2.5 rounded-lg bg-transparent border border-solid border-zinc-500 border-opacity-80" name="" id="">
                    <option value="">SMS</option>
                    <option value="">Email</option>
                    <option value="">Push notif</option>
                  </select>
                </div>                  
              </div>
            </div>
            <div className="text-white text-xl mt-8 flex font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 px-6 py-3 rounded-xl max-md:px-5">
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
