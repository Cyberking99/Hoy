"use client";
import Friends from "@/components/chatFolder/Friends";
import Group from "@/components/chatFolder/Group";
import Image from "next/image";
import GallaryIcon from "../../../../public/assets/imageGallary.png";
import SendToken from "../../../../public/assets/money-send.png";
import VoiceIcon from "../../../../public/assets/keyboard_voice.png";
import SendMessageIcon from "../../../../public/assets/Send_Submit_Success_Icon_UIA.png";
import { useState } from "react";
const page = () => {
  const [activeStatus, setActiveStatus] = useState("chat");

  const handleStatusChange = (state: string) => {
    setActiveStatus(state);
  };
  return (
    <div className="flex h-full w-full flex-col md:flex-row bg-[#0F072C]">
    {/* Chat and Group Section */}
    <div className="flex h-full w-full md:w-[30%] flex-col px-3 py-3 md:px-5">
      {/* Chat and Group Buttons */}
      <div className="mt-5 flex h-10 w-full md:w-[70%] flex-row justify-between">
        <button
          onClick={() => handleStatusChange("chat")}
          className={`font-openSan text-sm md:text-lg font-bold ${
            activeStatus === "chat" ? "text-[#3ECF8E]" : "text-white"
          }`}
        >
          Chat
        </button>
        <button
          onClick={() => handleStatusChange("group")}
          className={`font-openSan text-sm md:text-lg font-bold ${
            activeStatus === "group" ? "text-[#3ECF8E]" : "text-white"
          }`}
        >
          Group
        </button>
      </div>
  
      {/* List of Friends and Group */}
      <div className="mt-5 overflow-y-auto max-h-[80vh]">
        {activeStatus === "chat" ? <Friends /> : <Group />}
      </div>
    </div>
  
    {/* Chat Section */}
    <div className="relative h-full w-full bg-gray-100 md:bg-red-200">
      {/* Chat Input */}
      <div className="absolute bottom-0 flex w-full items-center flex-col px-4 py-3 md:flex-row md:px-10 md:py-5 bg-[#0F072C]">
        <div className="flex w-full md:w-[80%] flex-row items-center rounded-full bg-white px-3 py-2">
          <input
            type="text"
            placeholder="Type Message...."
            className="flex-1 px-2 text-sm md:text-base outline-none"
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
  </div>
  
  );
};

export default page;
