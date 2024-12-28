"use client";

import SearchIcon from "../../../../public/assets/Search_Icons_UIA.png";
import Image from "next/image";

import Group from "@/components/explore/Group";
import Friends from "@/components/explore/Friends";
import { useState } from "react";
const page = () => {
  const [activeTab, setActiveTab] = useState("friends");
  const handdleNavigation = (state: string) => {
    setActiveTab(state);
  };
  return (
    <div className="flex h-full w-full flex-col bg-[#0F072C]">
      {/* search section */}
      <div className="mt-5 flex w-full flex-col items-center md:flex-row md:justify-center">
        <nav className="flex w-[90%] flex-col items-center space-y-3 md:w-[70%] md:flex-row md:space-x-3 md:space-y-0">
          {/* Search Input */}
          <div className="relative h-12 w-full overflow-hidden rounded-xl bg-gray-600 md:w-[70%]">
            <input
              type="text"
              placeholder="Search..."
              className="h-full w-full bg-transparent px-4 pr-12 text-white placeholder-gray-300 outline-none"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <Image
                src={SearchIcon}
                width={500}
                height={500}
                alt="search icon"
                className="h-5 w-5 object-contain"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="h-12 w-full rounded-xl bg-[#13333C] text-[#3ECF8E] transition hover:bg-[#0A262D] md:w-[25%]">
            Search
          </button>
        </nav>
      </div>

      {/* navigation between groups and friends */}

      <div className="mx-10 mt-10 flex flex-row items-center justify-between md:w-[11%]">
        <div
          className={`${activeTab == "friends" ? "border-b-2 border-white p-2" : "border-none p-2"} `}
        >
          <button
            onClick={() => handdleNavigation("friends")}
            className="font-openSan text-[20px] font-bold text-white"
          >
            Friends
          </button>
        </div>
        <div
          className={`${activeTab == "groups" ? "border-b-2 border-white p-2" : "border-none p-2"} `}
        >
          <button
            onClick={() => handdleNavigation("groups")}
            className="font-openSan text-[20px] font-bold text-white"
          >
            Groups
          </button>
        </div>
      </div>

      {/* main  chat and friends section*/}

      <div className="mx-5 md:mx-10 mt-8">
        {activeTab == "friends" ? <Friends /> : <Group />}
      </div>
    </div>
  );
};

export default page;
