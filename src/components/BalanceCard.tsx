import React from "react";
import Text from "./Text";

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
}) => {
  const textColor=dark ? "text-white" : "text-dark-gunmetal"
  const circleColor = dark ? "bg-davy-grey" : "bg-bright-grey"

  return (
    <div className={"w-55.5 h-26.25 bg-onyx rounded-[10px] flex items-center"}>
      <div className="p-5 h-full flex items-center justify-center">
        <div className={`${circleColor} w-10.5 h-10.5 bg-davy-grey flex justify-center items-center rounded-full`}>
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
