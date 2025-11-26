import React from "react";
import Text from "./Text";
import { formatCurrency, formatDateForList } from "../helper/util";
interface ScheduledTransferItemProps {
  name: string;
  image: string;
  date: string;
  amount: number;
  currency: string;
}

const ScheduledTransferItem: React.FC<ScheduledTransferItemProps> = ({
  name,
  image,
  date,
  amount,
  currency,
}) => {
  
  return (
    <div className="flex items-center justify-between mt-3 mb-3.75">
      <div className="flex items-center">
        <img src={image} className="h-8.25 w-8.25 mr-3.75" />
        <div className="flex flex-col justify-between">
          <Text className="text-sm font-semibold">{name}</Text>
          <Text className="text-xs font-medium text-cadet-grey">
            {formatDateForList(date)}
          </Text>
        </div>
      </div>
      <Text className="font-semibold">{formatCurrency(currency, amount)}</Text>
    </div>
  );
};

export default ScheduledTransferItem;
