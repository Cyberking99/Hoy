import Link from "next/link";
import LogoPng from "../../../public/assets/App Logo Inspiraton 104.png";
import ArrowFoward from "../../../public/assets/arrow_forward.png"
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="h-screen px-5 py-10  md:px-24">
      <nav className="flex flex-row items-center justify-between">
        <div className="h-10 w-11">
          <Image src={LogoPng} alt="logo" width={500} height={500} />
        </div>
        <Link 
          href={"/dashboard"}
          className="mb-2 me-2 rounded-lg bg-[#13333C] px-7 py-4 text-sm font-medium text-[#3ECF8E] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-[#3ECF8E] dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Get Started
        </Link>
      </nav>

      <main className="mt-[4rem] flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-[#E8E1AD] md:text-9xl font-roboto">Welcome to</h1>
          <h1 className="text-2xl text-[#E8E1AD] md:text-9xl font-roboto text-center">
            <span className="text-[#3ECF8E] bg-gradient-to-r from-[#3ECF8E] to-[#236D5A] bg-clip-text text-transparent">Hoy</span>
          </h1>
          <p className="mt-[2rem] text-center text-base text-white md:mt-[4rem] md:text-[2rem] font-openSan">
            Your no. 1 messaging app where Privacy Speaks Louder.
          </p>
        </div>

        <Link
        href={"/dashboard"}
          type="button"
          className="mb-2 mt-24 border-2 border-[#FFFFFF] rounded-full bg-transparent shadow-lg px-7 py-4 text-sm font-medium text-[#3ECF8E]  hover:border-[#3ECF8E] hover:border-4 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-[#3ECF8E] dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 flex flex-row items-center"
        >
          Get started
          <div className="h-5 w-5 ml-4">
            <Image src={ArrowFoward} alt="logo" width={500} height={500} />
          </div>
        </Link>
      </main>
    </div>
  );
};

export default HeroSection;
