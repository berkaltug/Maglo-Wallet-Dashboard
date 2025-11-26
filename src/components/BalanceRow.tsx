import React from "react";
import BalanceCard from "./BalanceCard";
import WalletGreenSVG from "../assets/wallet-green.svg";
import WalletSVG from "../assets/wallet.svg";
import WalletAddSVG from "../assets/wallet-add.svg";
import type { Total } from "../services/financialTypes";
import { formatCurrency } from "../helper/util";

export interface BalanceRowProps {
  totalBalance: Total;
  totalExpense: Total;
  totalSavings: Total;
}

const BalanceRow: React.FC<BalanceRowProps> = ({
  totalBalance,
  totalExpense,
  totalSavings,
}) => {
  return (
    <div className="flex pt-7.5 pb-7.5 justify-around flex-wrap">
      <BalanceCard
        className={"mb-2"}
        dark={true}
        icon={WalletGreenSVG}
        title={"Total balance"}
        amount={formatCurrency(totalBalance.currency, totalBalance.amount)}
      />
      <BalanceCard
        className={"mb-2"}
        dark={false}
        icon={WalletSVG}
        title={"Total spending"}
        amount={formatCurrency(totalExpense.currency, totalExpense.amount)}
      />
      <BalanceCard
        className={"mb-2"}
        dark={false}
        icon={WalletAddSVG}
        title={"Total saved"}
        amount={formatCurrency(totalSavings.currency, totalSavings.amount)}
      />
    </div>
  );
};

export default BalanceRow;
