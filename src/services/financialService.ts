import { apiClient } from "./axiosConfig";

export const getFinancialSummary=async ()=>{
    const response=await apiClient.get('financial/summary')
    return response.data;
}

export const getWorkingCapital=async ()=>{
     const response=await apiClient.get('financial/working-capital')
    return response.data;
}

export const getWallets=async ()=>{
     const response=await apiClient.get('financial/wallet')
    return response.data;
}

export const getRecentTransactions=async (limit:number)=>{
     const response=await apiClient.get(`financial/transactions/recent`,{params:{limit}})
    return response.data;
}

export const getScheduledTransfers=async ()=>{
     const response=await apiClient.get('financial/transfers/scheduled')
    return response.data;
}
