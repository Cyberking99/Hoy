import Image from "next/image";
import DesignImage1 from "../../../public/assets/pseudo1.png";
import DesignImage2 from "../../../public/assets/pseudo2.png";
import JoinGroupPic from "../../../public/assets/JoinGroup.png";
const JoinGroup = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center bg-[#0F072C] px-10 py-20">
      <div className="flex flex-col items-center">
        <h1 className="font-roboto text-center text-xl font-bold text-white md:text-3xl">
          Join various group of experts
        </h1>
        <p className="font-openSan mt-5 text-center text-sm font-normal md:w-[63%] md:text-[30px]">
          Whenever you are ready, just ask about your health and get detailed
          responds on how to improve your general living and also get to know
          more
        </p>
      </div>
      <div className="mt-10 md:h-[20rem] md:w-[67rem]">
        <Image
          src={JoinGroupPic}
          width={500}
          height={500}
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </div>

      {/* design images */}
      <div className="absolute right-0 top-0 w-[10rem] md:h-[40rem] md:w-[40rem]">
        <Image
          src={DesignImage1}
          width={500}
          height={500}
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 h-[10rem] md:h-[30rem] md:w-[40rem]">
        <Image
          src={DesignImage2}
          width={500}
          height={500}
          alt="Logo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default JoinGroup;
