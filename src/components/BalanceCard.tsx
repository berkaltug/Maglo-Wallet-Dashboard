import React from "react";
import Text from "./Text";
import { twMerge } from "tailwind-merge";

interface BalanceCardProps {
  icon: string;
  dark: boolean;
  title: string;
  amount: number;
  className?: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  dark,
  amount,
  title,
  icon,
  className,
}) => {
  const textColor = dark ? "text-white" : "text-dark-gunmetal";
  const circleColor = dark ? "bg-davy-grey" : "bg-bright-grey";
  const bgColor = dark ? "bg-onyx" : "bg-cultured";
  return (
    <div
      className={twMerge(`${bgColor} w-55.5 h-26.25 rounded-[10px] flex items-center`,className)}
    >
      <div className="p-5 h-full flex items-center justify-center">
        <div
          className={`${circleColor} w-10.5 h-10.5 flex justify-center items-center rounded-full`}
        >
          <img src={icon} className="w-5 h-5" alt="" />
        </div>
      </div>
      <div className="flex flex-col self-stretch pt-6 pb-6 justify-between">
        <Text className="text-cadet-grey text-sm">{title}</Text>
        <Text className={` ${textColor} text-2xl font-bold`}>{amount}</Text>
      </div>
    </div>
  );
};

export default BalanceCard;
