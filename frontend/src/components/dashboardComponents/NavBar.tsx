import Image from "next/image";
import ProfilePicture from "../../../public/assets/profilePicture.png"

const NavBar = () => {
  return (
    <div className="relative flex w-full flex-row items-center justify-between bg-[#000000] px-4 py-3 sm:px-6 md:py-4">
      {/* Logo */}
     

      {/* profile picture and wallet address */}

      <div className=" flex flex-row items-center ml-auto">
         <div className="w-10 h-10">
           <Image src={ProfilePicture} width={500} height={500} alt="profile image" className="w-full h-full object-contain"/>
         </div>
         <h2 className="text-[#3ECF8E] font-roboto ml-2">0xeb7C....38B41</h2>
      </div>

      
    </div>
  );
};

export default NavBar;
