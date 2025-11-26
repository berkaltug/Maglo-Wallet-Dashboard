import React from "react";
import SectionTitle from "./SectionTitle";
import TransactionListItem from "./TransactionListItem";
import type { Transaction } from "../services/financialTypes";
import Skeleton from "react-loading-skeleton";
export interface RecentTransactionsProps {
  transactions: Array<Transaction>;
  pending:boolean;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
  pending,
}) => {
  return (
    <div className="border rounded-[10px] border-cultured pt-4 pb-4 pl-6 pr-6 mt-3.75 mb-3.75">
      <SectionTitle moreButton={false} title="Recent Transaction" />
      {pending && <Skeleton count={5} height={40} />}
      {!pending && (
        <table className="justify-self-stretch">
          <thead>
            <tr>
              <th className="text-left text-xs font-semibold text-cadet-grey">
                NAME/BUSINESS
              </th>
              <th className="text-xs font-semibold text-cadet-grey">TYPE</th>
              <th className="text-xs font-semibold text-cadet-grey">AMOUNT</th>
              <th className="text-xs font-semibold text-cadet-grey">DATE</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((item) => (
              <TransactionListItem
                key={item.id}
                name={item.name}
                business={item.business}
                image={item.image}
                date={item.date}
                amount={item.amount}
                currency={item.currency}
                type={item.type}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecentTransactions;
