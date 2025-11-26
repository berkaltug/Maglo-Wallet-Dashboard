import React, { useEffect } from "react";
import BalanceRow from "../components/BalanceRow";
import CardSchema from "../components/CardSchema";
import RecentTransactions from "../components/RecentTransactions";
import ScheduledTransfers from "../components/ScheduledTransfers";
import CapitalChart from "../components/CapitalChart";
import { useQuery } from "@tanstack/react-query";
import type {
  RecentTransactionsSuccess,
  ScheduledTransfersSuccess,
  SummarySuccess,
  WalletSuccess,
  WorkingCapitalSuccess,
} from "../services/financialTypes";
import {
  getFinancialSummary,
  getRecentTransactions,
  getScheduledTransfers,
  getWallets,
  getWorkingCapital,
} from "../services/financialService";
import type { ApiError } from "../services/generalTypes";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  setCards,
  setRecentTransactions,
  setScheduledTransfers,
  setSummary,
  setWorkingCapital,
} from "../redux/financeSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { data: summaryData } = useQuery<SummarySuccess, ApiError>({
    queryKey: ["summary"],
    queryFn: getFinancialSummary,
  });

  useEffect(() => {
    dispatch(setSummary(summaryData?.data));
  }, [summaryData, dispatch]);

  const { isPending: capitalsPending, data: capitalData } = useQuery<
    WorkingCapitalSuccess,
    ApiError
  >({
    queryKey: ["capital"],
    queryFn: getWorkingCapital,
  });

  useEffect(() => {
    dispatch(setWorkingCapital(capitalData?.data?.data));
  }, [capitalData, dispatch]);

  const { data: walletsData } = useQuery<WalletSuccess, ApiError>({
    queryKey: ["wallets"],
    queryFn: getWallets,
  });

  useEffect(() => {
    dispatch(setCards(walletsData?.data.cards));
  }, [walletsData, dispatch]);

  const { isPending:transactionsPending,data: transactionsData } = useQuery<
    RecentTransactionsSuccess,
    ApiError
  >({
    queryKey: ["transactions", 5],
    queryFn: ({ queryKey }) => getRecentTransactions(queryKey[1] as number),
  });

  useEffect(() => {
    dispatch(setRecentTransactions(transactionsData?.data.transactions));
  }, [transactionsData, dispatch]);

  const { isPending:transfersPending,data: transfersData } = useQuery<ScheduledTransfersSuccess, ApiError>(
    {
      queryKey: ["transfers"],
      queryFn: getScheduledTransfers,
    }
  );

  useEffect(() => {
    dispatch(setScheduledTransfers(transfersData?.data.transfers));
  }, [transfersData, dispatch]);

  const summary = useAppSelector((state) => state.finance.summary);
  const workingCapitals = useAppSelector(
    (state) => state.finance.workingCapitals
  );
  const recentTransactions = useAppSelector(
    (state) => state.finance.recentTransactions
  );
  const scheduledTransfers = useAppSelector(
    (state) => state.finance.scheduledTransfers
  );
  const cards = useAppSelector((state) => state.finance.cards);

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="md:col-span-2">
        {summary && (
          <BalanceRow
            totalBalance={summary.totalBalance}
            totalExpense={summary?.totalExpense}
            totalSavings={summary?.totalSavings}
          />
        )}
        {workingCapitals && !capitalsPending && (
          <CapitalChart workingCapitals={workingCapitals} />
        )}
          <RecentTransactions transactions={recentTransactions} pending={transactionsPending}/>
      </div>
      <div className="md:col-span-1">
        {cards && cards.length>0 && <CardSchema cards={cards} />}
          <ScheduledTransfers transfers={scheduledTransfers} pending={transfersPending} />
      </div>
    </div>
  );
};

export default Dashboard;
