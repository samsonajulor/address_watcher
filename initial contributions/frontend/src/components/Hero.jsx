import Header from "./Header";
import push from "../assets/push-rem.png";

const Hero = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-2xl px-[5%] py-16 lg:flex lg:max-w-full lg:items-center lg:justify-center lg:py-10">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to <span className="text-pry">address</span> <span className="text-sec">watcher</span>
          </h1>
          <p className="mt-6 text-lg leading-8">
            Stay Ahead of the Game with Real-Time Alerts and Comprehensive
            Address Tracking
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="bg-pry rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </a>
            <a
              href="#"
              className="bg-sec rounded-md px-3.5 py-2.5 text-sec text-sm font-semibold"
            >
              Learn more
            </a>
          </div>
        </div>
        <img className="mt-4 lg:mt-0 max-h-[70vh]" src={push} alt="" />
      </div>
    </div>
  );
};

export default Hero;
