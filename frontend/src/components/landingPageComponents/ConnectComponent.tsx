import Image from "next/image";
import GroupPic from "../../../public/assets/groupImage.png"
import DesignImage1 from "../../../public/assets/pseudo1.png"
import DesignImage2 from "../../../public/assets/pseudo2.png"
import ConnectButton from "../../app/components/lib/Connect";
const ConnectComponent = () => {
  return (
    <div className=" relative flex h-screen  w-full flex-col items-center bg-[#0F072C] py-20 px-10">
      <div className="flex flex-col items-center">
        <h1 className="font-bold font-roboto text-xl text-center md:text-3xl text-white">Connect with people around the World</h1>
        <p className="font-normal text-sm md:text-[30px] md:w-[63%] text-center mt-5 font-openSan">Whenever you are ready, just ask about your health and get detailed responds on how to improve your general living and also get to know more</p>
      </div>
      <div className="md:w-[67rem] md:h-[20rem]  mt-10">
        <Image src={GroupPic} width={500} height={500} alt="Logo" className="w-full h-full object-contain"/>
      </div>

      {/* design images */}
      <div className="top-0 right-0 absolute w-[10rem] md:w-[40rem] md:h-[40rem]">
        <Image src={DesignImage1} width={500} height={500} alt="Logo" className="w-full h-full object-cover"/>
      </div>
      <div className="bottom-0 left-0 absolute h-[10rem] md:w-[40rem] md:h-[30rem]">
        <Image src={DesignImage2} width={500} height={500} alt="Logo" className="w-full h-full object-cover"/>
      </div>

    </div>
  );
};

export default ConnectComponent;
