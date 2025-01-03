"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAccount } from "@starknet-react/core";
import ConnectButton from "../../app/components/lib/Connect";

import SearchIcon from "../../../public/assets/Search_Icons_UIA.png";
import MessageIcon from "../../../public/assets/messageIcon.png";
import AddFriendIcon from "../../../public/assets/profile-add.png";
import HoyABI from "../../app/ABIs/Hoy.json";

const Page = () => {
  const { address } = useAccount();
  const [activeTab, setActiveTab] = useState(1);
  const [profileData, setProfileData] = useState({
    displayName: "",
    location: "",
    city: "",
  });

  useEffect(() => {
    if (address) {
      setActiveTab(2);
    }
  }, [address]);

  const handleNavigation = (currentTab: number) => setActiveTab(currentTab);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleNavigation(3);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center bg-[#0F072C] md:px-10 px-4">
      {/* Progress Indicators */}
      <div className="mt-10 flex w-[50%] flex-row justify-between">
        {[1, 2, 3].map((tab) => (
          <span
            key={tab}
            className={`rounded-full ${
              activeTab === tab ? "bg-green-500" : "bg-green-300"
            } px-4 py-2 font-roboto font-bold text-black`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="mt-2 md:mt-10">
        {/* Step 1: Connect Wallet */}
        {activeTab === 1 && (
          <div className="mt-5 flex flex-col items-center rounded md:border-2 border-gray-400 px-5 py-10 shadow-lg">
            <h2 className="my-2 font-coolvetica text-lg md:text-2xl font-semibold text-white">
              Connect Your Wallet
            </h2>
            <p className="mb-3 font-coolvetica text-center text-base font-normal text-gray-400">
              Connect your wallet to enable encrypted messaging
            </p>
            <ConnectButton />
          </div>
        )}

        {/* Step 2: Set Up Profile */}
        {activeTab === 2 && (
          <div className="flex flex-col items-center rounded border-gray-400 px-3 py-10 shadow-lg md:border-2 md:px-5">
            <h2 className="my-2 font-coolvetica text-lg md:text-xl font-semibold text-white">
              Set Up Your Profile
            </h2>
            <p className="mb-3 font-coolvetica text-base font-normal text-gray-400">
              Choose how you will appear to others
            </p>
            <div className="my-2 rounded-full border-2 p-4">
              <Image
                width={500}
                height={500}
                src={AddFriendIcon}
                alt="Profile Icon"
                className="h-10 w-10"
              />
            </div>
            <form onSubmit={handleSubmit} className="mt-3 w-[90%] md:w-[80%]">
              <div className="mb-3 h-10 w-full">
                <input
                  type="text"
                  name="displayName"
                  placeholder="Input Display Name"
                  value={profileData.displayName}
                  onChange={handleInputChange}
                  className="h-full w-full rounded-md border-2 px-2 font-roboto text-black shadow-lg outline"
                />
              </div>
              <div className="mb-3 h-10 w-full">
                <input
                  type="text"
                  name="location"
                  placeholder="Location..."
                  value={profileData.location}
                  onChange={handleInputChange}
                  className="h-full w-full rounded-md border-2 px-2 font-roboto text-black shadow-lg outline"
                />
              </div>
              <div className="h-10 w-full">
                <input
                  type="text"
                  name="city"
                  placeholder="City..."
                  value={profileData.city}
                  onChange={handleInputChange}
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

        {/* Step 3: Welcome */}
        {activeTab === 3 && (
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
                alt="Welcome Icon"
                className="h-14 w-14"
              />
            </div>
            <Link
              href="/dashboard/explore"
              className="mt-5 w-full bg-[#13333C] py-2 text-[#3ECF8E] hover:bg-gray-100 text-center"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
