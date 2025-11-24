import React from "react";
import Text from "./Text";
import ChipSVG from "../assets/chip.svg";
import WifiSVG from "../assets/wifi.svg";
import MasterCardWhite from "../assets/mastercard-white.svg";
import { formatCardNo } from "../helper/util";
import VisaSVG from "../assets/visa.svg";
import SectionTitle from "./SectionTitle";

const CardSchema = () => {
  return (
    <>
    <SectionTitle title="Wallet" />
    <div className="relative w-88.5 h-52.5 bg-linear-to-r from-quartz to-raisin-black rounded-[15px] justify-self-center pt-4.5 pb-4.5 pl-7.5 pr-7.5 flex flex-col">
      <div className="flex items-center">
        <Text className="font-(Gordita) font-bold text-white">Maglo.</Text>
        <div className="border-l border-granite-grey ml-2 pl-2">
          <Text className="font-(Gordita) font-medium text-xs text-granite-grey ">
            Universal Bank
          </Text>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6.75 mb-5.25">
        <img src={ChipSVG} />
        <img src={WifiSVG} />
      </div>
      <Text className="font-(Gordita) font-bold tracking-wider text-[17px] text-white">
        {formatCardNo("5495  7381  3759  2321")}
      </Text>
      <div className="flex items-center justify-between">
        <Text className="text-white font-medium">04/24</Text>
        <img src={MasterCardWhite} className="self-end h-9 w-11.75" />
      </div>
      <div className="absolute w-81 h-43 rounded-[15px] bg-antiflash-white/50 backdrop-blur-xs left-1/2 -translate-x-1/2 top-38 flex flex-col pl-5 pr-5 pt-3.5 pb-3.5 ">
        <div className="flex items-center">
          <Text className="font-(Gordita) font-bold text-white">Maglo.</Text>
          <div className="border-l border-cultured ml-2 pl-2">
            <Text className="font-(Gordita) font-medium text-xs text-cultured">
              Commercial Bank
            </Text>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 mb-6">
          <img src={ChipSVG} className="h-6 w-7.5" />
          <img src={WifiSVG} className="h-8.5 w-8.5"/>
        </div>
        <Text className="font-(Gordita) font-bold tracking-wider">
          {'85952548****'}
        </Text>
        <div className="flex items-center justify-between">
          <Text className="text-cadet-grey font-medium self-end text-xs">09/25</Text>
          <img src={VisaSVG} className=" h-5.25 w-8" />
        </div>
      </div>
    </div>
    </>
  );
};

export default CardSchema;
