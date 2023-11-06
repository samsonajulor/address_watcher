import check from "../assets/check.png";

const Info = ({ title, items }) => {
  return (
    <div className="flex flex-col items-stretch w-1/2 max-md:w-full max-md:ml-0">
      <div className="justify-center items-center bg-gray-900 flex grow flex-col w-[70%] mx-auto px-9 py-14 rounded-[32px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-24">
        <div className="items-center self-stretch flex mb-0 flex-col max-md:max-w-full max-md:mb-2.5">
          <div className="text-orange-400 text-xl font-bold self-center whitespace-nowrap">
            {title}
          </div>
          <div className="justify-center items-center self-stretch flex grow flex-col mt-3 max-md:mt-10">
            {items.map((item, index) => (
              <div
                className="items-center self-center flex max-w-full gap-4 mt-4"
                key={index}
              >
                <img loading="lazy" src={check} className="w-4" />
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
