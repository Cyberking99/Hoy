"use client";
import Friends from "@/components/chatFolder/Friends";
import Group from "@/components/chatFolder/Group";
import Image from "next/image";
import GallaryIcon from "../../../../public/assets/imageGallary.png";
import SendToken from "../../../../public/assets/money-send.png";
import VoiceIcon from "../../../../public/assets/keyboard_voice.png";
import SendMessageIcon from "../../../../public/assets/Send_Submit_Success_Icon_UIA.png";
import MessageIcon from "../../../../public/assets/messageIcon.png";
import GroupImage from "../../../../public/assets/GroupImage1.png";
import { useState } from "react";
const page = () => {
  const [activeStatus, setActiveStatus] = useState("chat");
  const [selectedChat, setSelectedChat] = useState(null);

  const handleStatusChange = (state: string) => {
    setActiveStatus(state);
    setSelectedChat(null);
  };

  const handleChatSelection = (chat: any) => {
    setSelectedChat(chat);
  };
  return (
    <div className="flex h-full w-full flex-col bg-[#0F072C] md:flex-row">
      {/* Chat and Group Section */}
      <div className="flex h-full w-full flex-col px-3 py-3 md:w-[30%] md:px-5">


        {/* Chat and Group Buttons */}
        <div className="mt-5 flex h-10 w-full flex-row justify-between md:w-[70%]">
          <button
            onClick={() => handleStatusChange("chat")}
            className={`font-openSan text-sm font-bold md:text-lg ${
              activeStatus === "chat" ? "text-[#3ECF8E]" : "text-white"
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => handleStatusChange("group")}
            className={`font-openSan text-sm font-bold md:text-lg ${
              activeStatus === "group" ? "text-[#3ECF8E]" : "text-white"
            }`}
          >
            Group
          </button>
        </div>

        {/* List of Friends or Groups */}
        <div className="mt-5 max-h-[80vh] overflow-y-auto">
          {activeStatus === "chat" ? (
            <Friends onSelect={handleChatSelection} />
          ) : (
            <Group onSelect={handleChatSelection} />
          )}
        </div>
      </div>

      {/* Chat Section */}
      <div className="relative h-full w-full bg-gray-100 md:bg-gray-200 ">
        {selectedChat ? (
          <div>

            {/* top header display of who you are chating with */}
            <div className="bg-blue-500 mb-4 flex flex-row items-center md:mb-0 py-4 px-4">
              <div className="relative h-12 w-12 rounded-full">
                <Image
                  src={GroupImage}
                  width={500}
                  height={500}
                  alt="group icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <h2 className="ml-3 font-roboto text-lg font-semibold text-white md:text-[20px]">
                  Gabriel Oke Adedayo
                </h2>
                <div className=" flex flex-row items-start ml-2">
                  <span className="ml-3 font-roboto text-xs font-normal text-white "> online</span>
                  <span className="h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#241C3F80] ml-4"></span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="absolute bottom-0 flex w-full flex-col bg-[#0F072C] px-4 py-3 md:flex-row md:px-10 md:py-5">
              <div className="flex w-full flex-row items-center rounded-full bg-white px-3 py-2 md:w-[80%]">
                <input
                  type="text"
                  placeholder=""
                  className="flex-1 px-2 text-sm outline-none md:text-base"
                />
                <div className="flex flex-row items-center space-x-3">
                  <div className="h-6 w-6 md:h-10 md:w-10">
                    <Image
                      src={GallaryIcon}
                      width={500}
                      height={500}
                      alt="gallery icon"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-6 w-6 md:h-10 md:w-10">
                    <Image
                      src={VoiceIcon}
                      width={500}
                      height={500}
                      alt="voice icon"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="h-6 w-6 md:h-10 md:w-10">
                    <Image
                      src={SendToken}
                      width={500}
                      height={500}
                      alt="token icon"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Send Message Button */}
              <div className="ml-0 mt-3 md:ml-10 md:mt-0">
                <div className="h-6 w-6 md:h-10 md:w-10">
                  <Image
                    src={SendMessageIcon}
                    width={500}
                    height={500}
                    alt="send message icon"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (

          // display if a friend or group has not been selected yet
          <div className="flex h-full w-full items-center justify-center text-center text-white px-2">
            <div className="my-2 p-4">
              <Image
                width={500}
                height={500}
                src={MessageIcon}
                alt="profile icon"
                className="h-14 w-14"
              />
            </div>
            <p className="font-roboto text-sm text-black md:text-xl">
              Select a friend or group to start chatting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
