"use client";
import Image from "next/image";
import OpenMenuIcon from "../../../public/assets/menu.png";
import ProfilePicture from "../../../public/assets/profilePicture.png";

import Group from "../../../public/assets/group.png";
import Chat from "../../../public/assets/chat.png";
import CloseMenuIcon from "../../../public/assets/Close_Icons_UIA.png";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handIsOpen = () => setIsOpen((prev) => !prev);
  return (
    <div className="relative flex w-full flex-row items-center justify-between bg-[#000000] px-4 py-3 sm:px-6 md:py-4">
      {/* Menu Icon  for mobile*/}

      {isOpen ? (
        <div 
        onClick={handIsOpen}
        className="block h-5 w-5 md:hidden md:h-10 md:w-10"
        >
          <Image
            src={CloseMenuIcon}
            alt="menu Image"
            width={500}
            height={500}
          />
        </div>
      ) : (
        <div 
        onClick={handIsOpen}
        className="block h-5 w-5 md:hidden md:h-10 md:w-10">
          <Image src={OpenMenuIcon} alt="menu Image" width={500} height={500} />
        </div>
      )}

      {/* profile picture and wallet address */}

      <div className="ml-auto flex flex-row items-center">
        <div className="h-10 w-10">
          <Image
            src={ProfilePicture}
            width={500}
            height={500}
            alt="profile image"
            className="h-full w-full object-contain"
          />
        </div>
        <h2 className="ml-2 font-roboto text-[#3ECF8E]">0xeb7C....38B41</h2>
      </div>

      {/* mobile nav menu */}

      {isOpen && (
        <div className="absolute md:hidden left-0 top-0 z-20 mt-16 h-screen w-[50%] bg-[#0F072C]">
          <div className="mx-5 mt-10 w-full space-y-7">
            {/* explore */}
            
            <Link
              onClick={handIsOpen}
              href={"/dashboard/explore"}
              className="flex h-8 w-full flex-row items-center"
            >
              <Image
                src={Group}
                alt="group Image"
                width={500}
                height={500}
                className="h-full w-5 object-contain"
              />
              <p className="ml-5 text-base">Explore</p>
            </Link>

            {/* chat */}

            <Link
            onClick={handIsOpen}
              href={"/dashboard/chat"}
              className="flex h-8 w-full flex-row items-center"
            >
              <Image
                src={Chat}
                alt="chat Image"
                width={500}
                height={500}
                className="h-full w-5 object-contain"
              />
              <p className="ml-5 text-base">Chat</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
