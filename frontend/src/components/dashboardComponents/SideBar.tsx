import Image from "next/image";
import Menu from "../../../public/assets/menu.png";
import Group from "../../../public/assets/group.png";
import Chat from "../../../public/assets/chat.png";
import Link from "next/link";

const SideBar = () => {
    return (
      <div className="flex flex-col items-center bg-[#141023] pt-20 md:w-20 w-full min-h-screen px-2">
        {/* Menu Icon */}
        <div className="h-5 w-5 md:h-10 md:w-10">
          <Image src={Menu} alt="menu Image" width={500} height={500} />
        </div>
  
        {/* Chat and Group */}
        <div className="flex flex-col items-center mt-10 space-y-10">
            {/* explore */}

            <Link href={'/dashboard/explore'} className="h-5 w-5 md:h-10 md:w-10">
                <Image src={Group} alt="group Image" width={500} height={500} />
            </Link>

          {/* chat */}


          <Link href={'/dashboard/chat'} className="h-5 w-5 md:h-10 md:w-10">
          <Image src={Chat} alt="chat Image" width={500} height={500} />
            </Link>
        
        </div>
      </div>
    );
  };
  
export default SideBar;
