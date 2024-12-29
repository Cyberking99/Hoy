import Image from "next/image";
import Menu from "../../../public/assets/menu.png";
import Group from "../../../public/assets/group.png";
import Chat from "../../../public/assets/chat.png";
import LogoPng from "../../../public/assets/App Logo Inspiraton 104.png";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[#141023] px-2 pt-5 md:w-20">
      <Link href={"/"} className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-11">
        <Image src={LogoPng} alt="logo" width={500} height={500} />
      </Link>

      <div className="mt-16">
        {/* Menu Icon */}
        <div className="h-5 w-5 md:h-10 md:w-10">
          <Image src={Menu} alt="menu Image" width={500} height={500} />
        </div>

        {/* Chat and Group */}
        <div className="mt-10 flex flex-col items-center space-y-10">
          {/* explore */}

          <Link href={"/dashboard/explore"} className="h-5 w-5 md:h-10 md:w-10">
            <Image src={Group} alt="group Image" width={500} height={500} />
          </Link>

          {/* chat */}

          <Link href={"/dashboard/chat"} className="h-5 w-5 md:h-10 md:w-10">
            <Image src={Chat} alt="chat Image" width={500} height={500} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
