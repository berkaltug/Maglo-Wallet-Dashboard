export interface SummarySuccess {
    success: boolean;
    message: string;
    data:    SummaryData;
}

export interface SummaryData {
    totalBalance: Total;
    totalExpense: Total;
    totalSavings: Total; 
    lastUpdated:  Date;
}

export interface Total {
    amount:   number;
    currency: string;
    change:   Change;
}

export interface Change {
    percentage: number;
    trend:      string;
}

export interface WorkingCapitalSuccess {
    success: boolean;
    message: string;
    data:    WorkingCapitalData;
}

export interface WorkingCapitalData {
    period:   string;
    currency: string;
    data:     CapitalInterval[];
    summary:  Summary;
}

export interface CapitalInterval {
    month:   string;
    income:  number;
    expense: number;
    net:     number;
}

export interface Summary {
    totalIncome:  number;
    totalExpense: number;
    netBalance:   number;
}

export interface WalletSuccess {
    success: boolean;
    message: string;
    data:    WalletData;
}

export interface WalletData {
    cards: Card[];
}

export interface Card {
    id:          string;
    name:        string;
    type:        string;
    cardNumber:  string;
    bank:        string;
    network:     string;
    expiryMonth: number;
    expiryYear:  number;
    color:       string;
    isDefault:   boolean;
}

export interface RecentTransactionsSuccess {
    success: boolean;
    message: string;
    data:    TransactionsData;
}

export interface TransactionsData {
    transactions: Transaction[];
    summary:      TransactionSummary;
}

export interface TransactionSummary {
    totalIncome:  number;
    totalExpense: number;
    count:        number;
}

export interface Transaction {
    id:       string;
    name:     string;
    business: string;
    image:    string;
    type:     string;
    amount:   number;
    currency: string;
    date:     string;
    status:   string;
}

export interface ScheduledTransfersSuccess {
    success: boolean;
    message: string;
    data:    ScheduledTransfersData;
}

export interface ScheduledTransfersData {
    transfers: Transfer[];
    summary:   TransferSummary;
}

export interface TransferSummary {
    totalScheduledAmount: number;
    count:                number;
}

export interface Transfer {
    id:       string;
    name:     string;
    image:    string;
    date:     string;
    amount:   number;
    currency: string;
    status:   string;
}
