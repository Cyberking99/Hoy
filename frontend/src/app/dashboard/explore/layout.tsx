import SideBar from "@/components/dashboardComponents/SideBar";
import NavBar from "@/components/dashboardComponents/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[39rem] md:h-full w-full flex-col bg-blue-400 md:flex-row">
      <div className="flex w-full">{children}</div>
    </div>
  );
}
