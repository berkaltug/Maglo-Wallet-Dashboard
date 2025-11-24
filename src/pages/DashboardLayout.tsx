import React from "react";
import { Outlet } from "react-router";
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

const DashboardLayout = () => {
    const defaultLinkStyle="h-12 bg-lotion flex items-center rounded-[10px] pl-4.25 pr.4.25"
  return (
    <div className="w-screen h-screen">
      {/* sidebar */}
      <div className="h-full w-62.5 pt-7.5 pl-6.25 pr-6.25 pb-7.5 bg-lotion fixed md:static -translate-x-62 md:translate-x-0 flex flex-col justify-between">
        <div>
          <MagloLogo />
          <ul className="mt-10">
            <li className={twMerge(defaultLinkStyle,"bg-max-green-yellow")} >
              <img src={DashboardSVG} className="w-5 h-5 mr-3" />
              <Text>Dashboard</Text>
            </li>
            <li className={defaultLinkStyle} >
              <img src={TransactionsSVG} className="w-5 h-5 mr-3" />
              <Text>Transactions</Text>
            </li>
            <li className={defaultLinkStyle} >
              <img src={Invoices} className="w-5 h-5 mr-3" />
              <Text>Invoices</Text>
            </li>
            <li className={defaultLinkStyle} >
              <img src={MyWalletsSVG} className="w-5 h-5 mr-3" />
              <Text>My Wallets</Text>
            </li>
            <li className={defaultLinkStyle} >
              <img src={SettingsSVG} className="w-5 h-5 mr-3" />
              <Text>Settings</Text>
            </li>
          </ul>
        </div>
        <div className="self">
          <ul>
            <li className={defaultLinkStyle} >
              <img src={HelpSVG} className="w-5 h-5 mr-3" />
              <Text>Help</Text>
            </li>
            <li className={defaultLinkStyle} >
              <img src={LogoutSVG} className="w-5 h-5 mr-3" />
              <Text>Logout</Text>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
