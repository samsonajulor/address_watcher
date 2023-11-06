import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const overview = props.active == "overview" ? "text-violet-800" : "";
  const activity = props.active == "activity" ? "text-violet-800" : "";
  // const explore = on == "explore"? "text-violet-800" : "";
  // const settings = on == "settings"? "text-violet-800" : "";

  return (
    <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
      <div className="fixed bg-gray-900 min-h-screen flex flex-col justify-between w-full max-w-[325px] grow mx-auto px-16 py-20 max-md:pb-24 max-md:px-5">
        <Link
          to="/"
          className="text-4xl text-center tracking-[6.16px] bg-clip-text self-stretch whitespace-nowrap max-md:text-3xl"
        >
          Watcher
        </Link>
        <div className="items-start self-center flex w-[105px] max-w-full flex-col max-md:mt-10">
          <Link
            to="/dashboard/overview"
            className={`${overview} text-2xl font-bold self-stretch whitespace-nowrap`}
          >
            Overview
          </Link>
          <Link
            to="/dashboard/activity"
            className={`${activity} text-2xl font-bold self-stretch whitespace-nowrap mt-16 max-md:mt-10`}
          >
            Activity
          </Link>
          <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap mt-16 max-md:mt-10">
            Explore
          </div>
          <div className="text-white text-2xl font-bold self-stretch whitespace-nowrap mt-16 max-md:mt-10">
            Settings
          </div>
        </div>
        <Link
          to="/"
          className="text-white text-2xl font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 mb-0 w-full pl-12 pr-12 pt-7 pb-6 rounded-2xl max-md:mt-10 max-md:mb-2.5 max-md:px-5"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
