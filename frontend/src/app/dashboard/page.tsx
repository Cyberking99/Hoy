"use client";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../../../public/assets/Search_Icons_UIA.png";
import MessageIcon from "../../../public/assets/messageIcon.png";
import AddFriendIcon from "../../../public/assets/profile-add.png";
import { useState } from "react";
import ConnectButton from "../components/lib/Connect"

const page = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNavigation=(currentTab:number)=> setActiveTab(currentTab)
  
  return (
    <div className="relative flex h-full w-full flex-col items-center bg-[#0F072C] md:px-10 px-4">

      {/* progress indicators */}
      <div className="mt-10 flex w-[50%] flex-row justify-between">
        <span
          className={`${activeTab == 1 ? "rounded-full bg-green-500 px-4 py-2 font-roboto font-bold text-black" : "rounded-full bg-green-300 px-4 py-2 font-roboto font-bold text-black"} `}
        >
          1
        </span>

        <span
          className={`${activeTab == 2 ? "rounded-full bg-green-500 px-4 py-2 font-roboto font-bold text-black" : "rounded-full bg-green-300 px-4 py-2 font-roboto font-bold text-black"} `}
        >
          2
        </span>

        <span
          className={`${activeTab == 3 ? "rounded-full bg-green-500 px-4 py-2 font-roboto font-bold text-black" : "rounded-full bg-green-300 px-4 py-2 font-roboto font-bold text-black"} `}
        >
          3
        </span>
      </div>

      <div className="mt-2 md:mt-10">
        {/* onbording */}

        {/* Connect wallet */}
        {activeTab == 1 && (
          <div className="mt-5 flex flex-col items-center rounded md:border-2 border-gray-400 px-5 py-10 shadow-lg">
            <h2 className="my-2 font-coolvetica text-lg md:text-2xl font-semibold text-white">
              Connect Your Wallet
            </h2>
            <p className="mb-3 font-coolvetica text-center text-base font-normal text-gray-400">
              Connect your wallet to enable encrypted messaging
            </p>

            {/* <button
              type="button"
              className="rounded-lg bg-[#13333C] px-4 py-2 text-xs font-medium text-[#3ECF8E] hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:px-5 sm:py-3 sm:text-sm md:px-7 md:py-4 dark:border-gray-600 dark:bg-gray-800 dark:text-[#3ECF8E] dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              onClick={()=>handleNavigation(2)}
            >
              Connect Wallet
            </button> */}
            <ConnectButton />
          </div>
        )}

        {/* setup profile  */}
        {activeTab == 2 && (
          <div className="flex flex-col items-center rounded border-gray-400 px-3 py-10 shadow-lg md:border-2 md:px-5">
            <h2 className="my-2 font-coolvetica text-lg md:text-xl font-semibold text-white">
              Set UP Your Profile
            </h2>
            <p className="mb-3 font-coolvetica text-base font-normal text-gray-400">
              Choose how you will appear to others
            </p>

            {/* <div className="my-2 rounded-full border-2 p-4">
              <Image
                width={500}
                height={500}
                src={AddFriendIcon}
                alt="profile icon"
                className="h-10 w-10"
              />
            </div> */}
            <div className="flex justify-center mb-6">
          {/* Profile Picture or SVG */}
          <label className="relative cursor-pointer">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
            ) : (
              <div className="w-16 h-16 bg-white text-primary flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM2 20c0-2.761 4.582-5 10-5s10 2.239 10 5"
                  />
                </svg>
              </div>
            )}
            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicChange}
            />
          </label>
        </div>

            <form action="" className="mt-3 w-[90%] md:w-[80%]" onSubmit={()=>handleNavigation(3)}>
              <div className="mb-3 h-10 w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Input Display Name"
                  className="h-full w-full rounded-md border-2 px-2 font-roboto text-black shadow-lg outline"
                />
              </div>

              <div className="mb-3 h-10 w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Location..."
                  className="h-full w-full rounded-md border-2 px-2 font-roboto text-black shadow-lg outline"
                />
              </div>

              <div className="h-10 w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="City..."
                  className="h-full w-full rounded-md border-2 px-2 font-roboto text-black shadow-lg outline"
                />
              </div>

              <button
                type="submit"
                className="mt-5 w-full bg-[#13333C] py-2 text-[#3ECF8E] hover:bg-gray-100"
              >
                Continue
              </button>
            </form>
          </div>
        )}

        {/* welcome section  */}

        {activeTab == 3 && (
          <div className="mt-5 flex flex-col items-center rounded-xl md:border-2 border-gray-400 px-5 py-10 shadow-lg">
            <h2 className="my-2 font-coolvetica text-lg md:text-2xl font-semibold text-white">
              Welcome to Hoy
            </h2>
            <p className="mb-3 font-coolvetica text-base font-normal text-gray-400">
              You're all set to start messaging
            </p>

            <div className="my-2 p-4">
              <Image
                width={500}
                height={500}
                src={MessageIcon}
                alt="profile icon"
                className="h-14 w-14"
              />
            </div>

            <Link href={"/dashboard/explore"} className="mt-5 w-full bg-[#13333C] py-2 text-[#3ECF8E] hover:bg-gray-100 text-center">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
