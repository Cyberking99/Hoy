import Image from "next/image";
import GroupImage from "../../../public/assets/GroupImage1.png";
import JoinGroupIcon from "../../../public/assets/profile-2user.png";
const Group = ({ onSelect }) => {
  return (
    <div>
      <div className="mb-5 flex flex-col md:items-center justify-between rounded-xl bg-[#241C3F80] px-4 py-3 md:flex-row md:px-3 md:py-2">
        {/* Group Name and Icon */}
        
        <div className="flex flex-row items-center md:mb-0">
          <div
            onClick={() => onSelect("Cohort 1")}
            className="relative h-6 w-6 rounded-full"
          >
            <Image
              src={GroupImage}
              width={500}
              height={500}
              alt="group icon"
              className="h-full w-full object-cover"
            />
            {/* <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#241C3F80]"></span> */}
          </div>
          <h2 className="ml-3 text-lg font-semibold text-white md:text-[20px]">
            Cohort 1
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Group;
