import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between bg-[#000000] px-4 py-3 sm:px-6 md:py-4">
      {/* Logo */}
     

      {/* Connect Wallet Button */}
      <button
        type="button"
        className="rounded-lg bg-[#13333C] px-4 py-2 text-xs font-medium text-[#3ECF8E] hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:px-5 sm:py-3 sm:text-sm md:px-7 md:py-4 dark:border-gray-600 dark:bg-gray-800 dark:text-[#3ECF8E] dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default NavBar;