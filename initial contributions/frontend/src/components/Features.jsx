import wallet from "../assets/wallet.png";
import setting from "../assets/bx-setting.png";
import history from "../assets/history.png";
import user from "../assets/uil_user.png";
import notif from "../assets/notif.png";
import Feature from "./Feature";

function Features() {
  const featureData = [
    {
      title: "Real-time monitoring of any address",
      imageUrl: wallet,
      description: "Description for feature 1",
    },
    {
      title: "Customizable alert settings",
      imageUrl: setting,
      description: "Description for feature 2",
    },
    {
      title: "History of monitored actions",
      imageUrl: history,
    },
    {
      title: "User-friendly interface",
      imageUrl: user,
    },
    {
      title: "Cross-platform notifications",
      imageUrl: notif,
    },
  ];

  return (
    <div className="justify-center items-center bg-gray-950 self-stretch flex w-full flex-col px-20 pt-24 max-md:max-w-full max-md:px-5">
      <div className="items-center self-center flex w-full flex-col max-md:max-w-full">
        <div className="text-orange-400 md:w-full text-center text-4xl max-md:text-3xl font-bold self-center whitespace-nowrap">
          <span className="text-white">Why </span>
          <span className="text-orange-400">Watcher</span>
          <span className="text-white"> is for you</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12 max-md:mt-10">
          {featureData.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
