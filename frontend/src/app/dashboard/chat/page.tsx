"use client"
import Friends from "@/components/chatFolder/Friends";
import Group from "@/components/chatFolder/Group";
import { useState } from "react";
const page = () => {
  const [activeStatus,setActiveStatus]=useState("chat")

  const handleStatusChange=(state:string)=>{
    setActiveStatus(state)
  }
  return (
    <div className="flex h-full w-full flex-row  bg-[#0F072C]">
      {/* chat and group section */}
      <div className="h-full w-[20%]  flex flex-col  px-5">
        <div className="w-[60%] flex flex-row justify-between  h-10  mt-5">
          <button onClick={()=> handleStatusChange("chat")} className="font-openSan text-[20px] font-bold text-white">Chat</button>
          <button onClick={()=> handleStatusChange("group")} className="font-openSan text-[20px] font-bold text-white">Group</button>
        </div>

        {/* list of friends and group section */}

        <div className="mt-5">
          {activeStatus === "chat" ?  <Friends/> : <Group/>}
        </div>
      </div>

      {/* chat section */}

     <div className="relative h-full w-full">


      {/* chat input  */}
      <div>
          <div>

          </div>
          <div>
            
          </div>
      </div>
     </div>
    </div>
  );
};

export default page;
