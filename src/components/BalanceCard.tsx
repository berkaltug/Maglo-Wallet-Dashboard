import React from "react";
import Text from "./Text";
import { twMerge } from "tailwind-merge";
import Skeleton from "react-loading-skeleton";

interface BalanceCardProps {
  icon: string;
  dark: boolean;
  title: string;
  amount: number | string | false | undefined;
  className?: string;
  pending:boolean;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  dark,
  amount,
  title,
  icon,
  className,
  pending,
}) => {
  const textColor = dark ? "text-white" : "text-dark-gunmetal";
  const circleColor = dark ? "bg-davy-grey" : "bg-bright-grey";
  const bgColor = dark ? "bg-onyx" : "bg-cultured";
  
  return (
    <div
      className={twMerge(`${bgColor} min-w-55.5 h-26.25 rounded-[10px] flex items-center p-5`,className)}
    >
      <div className="h-full flex items-center justify-center">
        <div
          className={`${circleColor} w-10.5 h-10.5 flex justify-center items-center rounded-full`}
        >
          <img src={icon} className="w-5 h-5" alt="" />
        </div>
      </div>
      <div className="flex flex-col self-stretch pt-6 pb-6 ml-5 justify-center">
        <Text className="text-cadet-grey text-sm">{title}</Text>
        {pending && <Skeleton count={1}/>}
        {!pending && amount && <Text className={` ${textColor} text-2xl font-bold`}>{amount}</Text>}
      </div>
    </div>
  );
};

export default BalanceCard;
