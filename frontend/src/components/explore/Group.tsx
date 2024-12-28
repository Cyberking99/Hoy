import Image from "next/image";
import GroupImage from "../../../public/assets/GroupImage1.png";
import JoinGroupIcon from "../../../public/assets/profile-2user.png";
import AddIcon from "../../../public/assets/plusIcon.png"
const Group = () => {
  return (
    <div className="relative flex flex-col">
      {/* group 1 */}
      <div className="mb-5 flex flex-col items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-6 md:py-4">
        {/* Group Name and Icon */}
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
          <h2 className="ml-3 text-lg font-semibold text-white md:text-[20px]">
            Cohort 1
          </h2>
        </div>

        {/* Join Group Button */}
        <button className="flex items-center rounded-xl bg-[#13333C] px-4 py-2 text-white transition hover:bg-[#0A262D] hover:shadow-lg md:px-6">
          <span className="text-sm font-medium md:text-base">Join Group</span>
          <Image
            src={JoinGroupIcon}
            alt="join group icon"
            width={500}
            height={500}
            className="ml-2 h-5 w-5"
          />
        </button>
      </div>

      {/* group 1 */}
      <div className="mb-5 flex flex-col items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-6 md:py-4">
        {/* Group Name and Icon */}
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
          <h2 className="ml-3 text-lg font-semibold text-white md:text-[20px]">
            Cohort 1
          </h2>
        </div>

        {/* Join Group Button */}
        <button className="flex items-center rounded-xl bg-[#13333C] px-4 py-2 text-white transition hover:bg-[#0A262D] hover:shadow-lg md:px-6">
          <span className="text-sm font-medium md:text-base">Join Group</span>
          <Image
            src={JoinGroupIcon}
            alt="join group icon"
            width={500}
            height={500}
            className="ml-2 h-5 w-5"
          />
        </button>
      </div>

      {/* group 1 */}
      <div className="mb-5 flex flex-col items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-6 md:py-4">
        {/* Group Name and Icon */}
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
          <h2 className="ml-3 text-lg font-semibold text-white md:text-[20px]">
            Cohort 1
          </h2>
        </div>

        {/* Join Group Button */}
        <button className="flex items-center rounded-xl bg-[#13333C] px-4 py-2 text-white transition hover:bg-[#0A262D] hover:shadow-lg md:px-6">
          <span className="text-sm font-medium md:text-base">Join Group</span>
          <Image
            src={JoinGroupIcon}
            alt="join group icon"
            width={500}
            height={500}
            className="ml-2 h-5 w-5"
          />
        </button>
      </div>
       
        {/* group 1 */}
      <div className="mb-5 flex flex-col items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-6 md:py-4">
        {/* Group Name and Icon */}
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
          <h2 className="ml-3 text-lg font-semibold text-white md:text-[20px]">
            Cohort 1
          </h2>
        </div>

        {/* Join Group Button */}
        <button className="flex items-center rounded-xl bg-[#13333C] px-4 py-2 text-white transition hover:bg-[#0A262D] hover:shadow-lg md:px-6">
          <span className="text-sm font-medium md:text-base">Join Group</span>
          <Image
            src={JoinGroupIcon}
            alt="join group icon"
            width={500}
            height={500}
            className="ml-2 h-5 w-5"
          />
        </button>
      </div>

      {/* create group button */}

      <button className="absolute bottom-0 right-0 mt-4 w-9 h-9 bg-gradient-to-r from-[#0F072C] to-[#1789FC] rounded-full overflow-hidden">
        <Image src={AddIcon} width={500} height={500} alt="add group icon" className="w-full h-full object-contain"/>
      </button>
    </div>
  );
};

export default Group;
