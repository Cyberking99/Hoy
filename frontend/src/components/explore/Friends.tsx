import Image from "next/image";
import GroupImage from "../../../public/assets/GroupImage1.png";
import AddFriendIcon from "../../../public/assets/profile-add.png";
import AddIcon from "../../../public/assets/plusIcon.png";
const Friends = () => {
  return (
    <div className="relative flex flex-col">
      {/* Friend 1 */}
      <div className="mb-5 flex flex-col items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-6 md:py-4">
        {/* Friend Name and Location */}
        <div className="mb-4 flex flex-row items-center md:mb-0">
          <div className="relative h-12 w-12 rounded-full">
            <Image
              src={GroupImage}
              width={500}
              height={500}
              alt="group icon"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#241C3F80]"></span>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="ml-3 text-lg font-roboto font-semibold text-white md:text-[20px]">
              Gabriel Oke Adedayo
            </h2>
            <span className="ml-3 text-xs font-roboto font-normal text-gray-400 md:text-sm">Jos,Nigeria</span>
          </div>
        </div>

        {/* send friend request */}
        <button className="flex items-center rounded-xl bg-[#13333C] px-4 py-2 text-white transition hover:bg-[#0A262D] hover:shadow-lg md:px-6">
          <span className="text-sm font-medium md:text-base">Add Friend</span>
          <Image
            src={AddFriendIcon}
            alt="join group icon"
            width={500}
            height={500}
            className="ml-2 h-5 w-5"
          />
        </button>
      </div>
     

      {/* Friend 1 */}
      <div className="mb-5 flex flex-col items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-6 md:py-4">
        {/* Friend Name and Location */}
        <div className="mb-4 flex flex-row items-center md:mb-0">
          <div className="relative h-12 w-12 rounded-full">
            <Image
              src={GroupImage}
              width={500}
              height={500}
              alt="group icon"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#241C3F80]"></span>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="ml-3 text-lg font-roboto font-semibold text-white md:text-[20px]">
              Gabriel Oke Adedayo
            </h2>
            <span className="ml-3 text-xs font-roboto font-normal text-gray-400 md:text-sm">Jos,Nigeria</span>
          </div>
        </div>

        {/* send friend request */}
        <button className="flex items-center rounded-xl bg-[#13333C] px-4 py-2 text-white transition hover:bg-[#0A262D] hover:shadow-lg md:px-6">
          <span className="text-sm font-medium md:text-base">Add Friend</span>
          <Image
            src={AddFriendIcon}
            alt="join group icon"
            width={500}
            height={500}
            className="ml-2 h-5 w-5"
          />
        </button>
      </div>

       {/* Friend 1 */}
       <div className="mb-5 flex flex-col items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-6 md:py-4">
        {/* Friend Name and Location */}
        <div className="mb-4 flex flex-row items-center md:mb-0">
          <div className="relative h-12 w-12 rounded-full">
            <Image
              src={GroupImage}
              width={500}
              height={500}
              alt="group icon"
              className="h-full w-full object-cover"
            />
            <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#241C3F80]"></span>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="ml-3 text-lg font-roboto font-semibold text-white md:text-[20px]">
              Gabriel Oke Adedayo
            </h2>
            <span className="ml-3 text-xs font-roboto font-normal text-gray-400 md:text-sm">Jos,Nigeria</span>
          </div>
        </div>

        {/* send friend request */}
        <button className="flex items-center rounded-xl bg-[#13333C] px-4 py-2 text-white transition hover:bg-[#0A262D] hover:shadow-lg md:px-6">
          <span className="text-sm font-medium md:text-base">Add Friend</span>
          <Image
            src={AddFriendIcon}
            alt="join group icon"
            width={500}
            height={500}
            className="ml-2 h-5 w-5"
          />
        </button>
      </div>

    </div>
  );
};

export default Friends;
