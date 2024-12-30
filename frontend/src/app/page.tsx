"use client";
import HeroSection from "@/components/landingPageComponents/HeroSection";
import ConnectComponent from "@/components/landingPageComponents/ConnectComponent";
import SendMoneyComponent from "@/components/landingPageComponents/SendMoneyComponent";
import JoinGroup from "@/components/landingPageComponents/JoinGroup";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#0F072C] via-[#291d55] to-[#0F072C] h-full">
      <HeroSection/>
      <ConnectComponent/>
      <JoinGroup/>
      <SendMoneyComponent/>
      <Footer/>
    </main>
  );
}
