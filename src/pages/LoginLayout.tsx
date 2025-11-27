import type { ReactNode } from "react";
import MagloLogo from "../components/MagloLogo";
import heroImage from "../assets/image.png"

interface LoginLayoutProps {
    children:ReactNode
}
const LoginLayout:React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-screen min-h-screen flex-col md:flex-row">
      <div className="flex-1 grid  grid-cols-[1fr_auto_1fr] grid-rows-[1fr_4fr_1fr]">
        <div className="row-1 col-2  pt-4 md:pt-10 lg:pt-17.5">
          <MagloLogo />
        </div>
        {children}
      </div>
      <div className="xl:block hidden">
        <img src={heroImage} className="min-h-screen" alt="" />
      </div>
    </div>
  );
};

export default LoginLayout;
