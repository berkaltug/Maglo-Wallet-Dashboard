import React from "react";
import SectionTitle from "./SectionTitle";
import ScheduledTransferItem from "./ScheduledTransferItem";
import type { Transfer } from "../services/financialTypes";
import Skeleton from "react-loading-skeleton";

export interface ScheduledTransfersProps {
  transfers: Transfer[];
  pending:boolean;
}

const ScheduledTransfers: React.FC<ScheduledTransfersProps> = ({
  transfers,
  pending
}) => {
  return (
    <>
      <SectionTitle title="Scheduled Transfers" moreButton={false} />
      {pending && <Skeleton count={5} height={40}/>}
      {!pending && transfers?.map((item) => (
        <ScheduledTransferItem
          key={item.id}
          name={item.name}
          image={item.image}
          date={item.date}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </>
  );
};

export default ScheduledTransfers;
