import Link from 'next/link';
import NavButton from './NavButton';

const Header = () => {
  return (
    <header>
      <nav
        className="flex items-center justify-between px-8 py-6 lg:px-20 lg:py-10"
        aria-label="Global"
      >
        <div className="justify-between items-center self-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
          <Link href="/" className="text-3xl bg-clip-text max-md:text-4xl">
            Watcher
          </Link>
          <div className="flex lg:hidden">
            <NavButton />
          </div>
          <div className="items-start self-center hidden lg:flex w-[521px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
            <div className="text-orange-400 text-xl font-bold self-stretch">Home</div>
            <div className="text-white text-xl font-bold self-stretch">About</div>
            <div className="text-white text-xl font-bold self-stretch">Pricing</div>
            <Link
              href="/dashboard"
              className="text-white text-xl font-bold self-stretch whitespace-nowrap hover:text-orange-300"
            >
              Dashboard
            </Link>
          </div>
          <Link
            href="/register"
            className="text-white text-xl hidden lg:flex font-bold self-stretch whitespace-nowrap justify-center items-center bg-violet-800 px-6 py-3 rounded-xl max-md:px-5"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
