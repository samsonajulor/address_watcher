import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/watcher.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "#" },
  { name: "Pricing", to: "#" },
  { name: "Dashboard", to: "/dashboard" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-20 lg:py-10"
        aria-label="Global"
      >
        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <Link to="/" className="text-3xl bg-clip-text max-md:text-4xl">
            Watcher
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="items-start self-center hidden lg:flex w-[521px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
            <div className="text-orange-400 text-xl font-bold self-stretch">
              Home
            </div>
            <div className="text-white text-xl font-bold self-stretch">
              About
            </div>
            <div className="text-white text-xl font-bold self-stretch">
              Pricing
            </div>
            <Link
              to="/dashboard"
              className="text-white text-xl font-bold self-stretch whitespace-nowrap hover:text-orange-300"
            >
              Dashboard
            </Link>
          </div>
          <Link
            to="/register"
            className="text-white text-xl hidden lg:flex font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 px-6 py-3 rounded-2xl max-md:px-5"
          >
            Register
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="text-[#070B12] fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/register"
                  className="bg-pry -mx-3 block rounded-lg px-3 py-2.5 text-base  text-white font-bold leading-7"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
