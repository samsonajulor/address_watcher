import Link from 'next/link';
import {usePathname} from 'next/navigation';


const Sidebar: React.FC = () => {
   const pathname = usePathname();
  

  return (
    <div className="fixed bg-gray-900 min-h-screen flex flex-col justify-between w-[250px] grow p-10 max-md:pb-24 max-md:px-5">
      <Link href="/" className="text-3xl text-center bg-clip-text max-md:text-4xl">
        Watcher
      </Link>
      <div className="items-start self-center flex w-[105px] max-w-full flex-col max-md:mt-10">
        <Link
          className={`text-xl font-bold self-stretch cursor-pointer whitespace-nowrap ${
            pathname ===('/app') ? 'text-violet-700' : ''
          }`}
          href='/app'
          
        >
          Overview
        </Link>
        <Link
          className={`text-xl font-bold self-stretch cursor-pointer whitespace-nowrap mt-16 max-md:mt-10 ${
             pathname ===('/app/activity') ? 'text-violet-700' : ''
          }`}
          href='/app/activity'
        >
          Activity
        </Link>
        <div className="text-white text-xl font-bold self-stretch cursor-pointer whitespace-nowrap mt-16 max-md:mt-10">
          Explore
        </div>
        <div className="text-white text-xl font-bold self-stretch cursor-pointer whitespace-nowrap mt-16 max-md:mt-10">
          Settings
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Sidebar;
