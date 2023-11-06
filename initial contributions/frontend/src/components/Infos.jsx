import Info from "./Info";

const Infos = () => {
  const alertTypes = {
    title: "Alert Types:",
    items: [
      "Nft mints",
      "Balance changes",
      "High gas transactions",
      "Contract deployment / interaction",
    ],
  };

  const notifications = {
    title: "Notifications",
    items: ["SMS", "Email", "Push notifs"],
  };

  return (
    <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 pt-20 max-md:max-w-full max-md:px-5">
      <div className="self-center w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <Info {...alertTypes} />
          <Info {...notifications} />
        </div>
      </div>
    </div>
  );
};

export default Infos;
