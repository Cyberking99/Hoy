import Image from "next/image";
import GroupImage from "../../../public/assets/GroupImage1.png";
import AddFriendIcon from "../../../public/assets/profile-add.png";

const Friends = ({ onSelect }) => {
  return (
    <div>
      <div 
      onClick={()=> onSelect("Gabriel")}
      className="mb-3 flex flex-col md:items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-3 md:py-2">
        {/* Friend Name and Location */}
        <div className="flex flex-row items-center md:mb-0">
          <div className="relative h-6 w-6 rounded-full">
            <Image
              src={GroupImage}
              width={500}
              height={500}
              alt="group icon"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-green-500 ring-2 ring-[#241C3F80]"></span>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="ml-3 font-roboto text-sm font-semibold text-white">
              Gabriel Oke Adedayo
            </h2>
            <span className="ml-3 font-roboto text-xs font-normal text-gray-400 md:text-sm">
              Jos,Nigeria
            </span>
          </div>
        </div>
      </div>

      <div className="mb-3 flex flex-col md:items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-3 md:py-2">
        {/* Friend Name and Location */}
        <div className=" flex flex-row items-center md:mb-0">
          <div className="relative h-6 w-6 rounded-full">
            <Image
              src={GroupImage}
              width={500}
              height={500}
              alt="group icon"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-green-500 ring-2 ring-[#241C3F80]"></span>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="ml-3 font-roboto text-sm font-semibold text-white">
              Gabriel Oke Adedayo
            </h2>
            <span className="ml-3 font-roboto text-xs font-normal text-gray-400 md:text-sm">
              Jos,Nigeria
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
