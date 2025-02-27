import SideBar from "@/components/dashboardComponents/SideBar";
import NavBar from "@/components/dashboardComponents/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col  md:flex-row">
      <div className="flex h-full w-full flex-row items-start ">
      <ToastContainer />
        {/* Sidebar */}
        <div className="hidden md:block">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="flex h-full w-full flex-col">
          {/* NavBar */}
          <div className="h-[50px] w-full flex-none md:h-[10%]">
            <NavBar />
          </div>

          {/* Content */}
          <div className="flex-grow ">{children}</div>
        </div>
      </div>
    </div>
  );
}
