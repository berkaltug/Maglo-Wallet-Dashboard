import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import MagloLogo from "../components/MagloLogo";
import DashboardSVG from "../assets/Dashboard.svg";
import Text from "../components/Text";
import TransactionsSVG from "../assets/Transactions.svg";
import Invoices from "../assets/Invoices.svg";
import MyWalletsSVG from "../assets/My Wallets.svg";
import SettingsSVG from "../assets/Settings.svg";
import HelpSVG from "../assets/Help.svg";
import LogoutSVG from "../assets/Logout.svg";
import { twMerge } from "tailwind-merge";
import SearchSVG from "../assets/search.svg";
import NotificationSVG from "../assets/notification.svg";
import CadetDownSVG from "../assets/Dropdown.svg";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { loggedOut } from "../redux/userSlice";
import Skeleton from "react-loading-skeleton";
import CrossSVG from "../assets/cross.svg";
import MenuSVG from "../assets/menu.svg";

const DashboardLayout = () => {
  const dispatch = useAppDispatch();
  const defaultLinkStyle =
    "h-12 bg-lotion flex items-center rounded-[10px] pl-4.25 pr.4.25 cursor-pointer hover:bg-slate-100";
  const navigate = useNavigate();
  const logout = () => {
    dispatch(loggedOut());
    navigate("/");
  };
  const user = useAppSelector((state) => state.user.user);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const close = () => {
    setSidebarOpen(false);
  };
  const open = () => {
    setSidebarOpen(true);
  };

  return (
    <div className="w-screen min-h-screen flex">
      {/* sidebar */}
      <div
        className={`w-62 pt-7.5 pl-6.25 pr-6.25 pb-7.5 bg-lotion
           fixed h-full xl:h-auto xl:static transition-transform duration-300 ease-in-out shrink-0
            flex flex-col justify-between 
            ${sidebarOpen ? "translate-x-0 " : "-translate-x-full"}`}
      >
        <div>
          <div className="flex justify-between">
            <MagloLogo />
            <button className="cursor-pointer xl:hidden" onClick={close}>
              <img src={CrossSVG} className="w-6 h-6" />
            </button>
          </div>
          <ul className="mt-10">
            <li className={twMerge(defaultLinkStyle, "bg-max-green-yellow")}>
              <img src={DashboardSVG} className="w-5 h-5 mr-3" />
              <Text className="text-sm font-medium">Dashboard</Text>
            </li>
            <li className={defaultLinkStyle}>
              <img src={TransactionsSVG} className="w-5 h-5 mr-3" />
              <Text className="text-sm font-medium">Transactions</Text>
            </li>
            <li className={defaultLinkStyle}>
              <img src={Invoices} className="w-5 h-5 mr-3" />
              <Text className="text-sm font-medium">Invoices</Text>
            </li>
            <li className={defaultLinkStyle}>
              <img src={MyWalletsSVG} className="w-5 h-5 mr-3" />
              <Text className="text-sm font-medium">My Wallets</Text>
            </li>
            <li className={defaultLinkStyle}>
              <img src={SettingsSVG} className="w-5 h-5 mr-3" />
              <Text className="text-sm font-medium">Settings</Text>
            </li>
          </ul>
        </div>
        <div className="self">
          <ul>
            <li className={defaultLinkStyle}>
              <img src={HelpSVG} className="w-5 h-5 mr-3" />
              <Text className="text-sm font-medium">Help</Text>
            </li>
            <li className={defaultLinkStyle} onClick={logout}>
              <img src={LogoutSVG} className="w-5 h-5 mr-3" />
              <Text className="text-sm font-medium">Logout</Text>
            </li>
          </ul>
        </div>
        <button
          className={`absolute -right-14 top-27 p-4  bg-slate-100 transition-[opacity] duration-500 ease-in-out border-r-xl cursor-pointer hover:shadow xl:hidden ${
            sidebarOpen ? "opacity-0" : "opacity-100"
          }`}
          onClick={open}
        >
          <img src={MenuSVG} className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col grow pl-10 pr-10 pt-7.5 pb-7.5">
        {/* header */}
        <div className="flex self-stretch h-12 items-center justify-between">
          <Text className="font-semibold text-[25px]">Dashboard</Text>
          <div className="flex h-12 items-center">
            <img src={SearchSVG} className="h-6 w-6 md:mr-11.25" alt="" />
            <img src={NotificationSVG} className="h-6 w-6 md:mr-11.25" alt="" />
            <div className="flex items-center h-full bg-lotion rounded-full pr-2 pl-2">
              <div className="h-9 w-9 rounded-full bg-cadet-grey mr-4"></div>
              {!user && <Skeleton count={1} />}
              {user && (
                <Text className="invisible md:visible md:mr-4">
                  {user.fullName}
                </Text>
              )}
              <button>
                <img src={CadetDownSVG} className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
