import check from '../../../assets/check.png';

const Info = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="flex flex-col w-full max-md:w-full max-md:ml-0">
      <div className="justify-center items-center bg-gray-900 flex grow flex-col w-[80%] mx-auto px-9 py-14 rounded-[32px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-24 max-sm:py-8 max-sm:rounded-[16px]">
        <div className="items-center self-stretch flex mb-0 flex-col max-md:max-w-full max-md:mb-2.5">
          <div className="text-orange-400 text- font-bold self-center whitespace-nowrap">
            {title}
          </div>
          <div className="justify-center items-center flex grow flex-col max-md:mt-1 max-sm:text-xs">
            {items.map((item, index) => (
              <div className="items-center self-start flex max-w-full gap-2 mt-4" key={index}>
                <img alt="" loading="lazy" src={check} className="w-4" />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
