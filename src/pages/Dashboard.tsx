import React from 'react'
import BalanceRow from '../components/BalanceRow'
import CardSchema from '../components/CardSchema'
import RecentTransactions from '../components/RecentTransactions'

const Dashboard = () => {
  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2">
        <BalanceRow />
        <RecentTransactions />
      </div>
      <div className="md:col-span-1">
        <CardSchema />
      </div>
    </div>
  )
}

export default Dashboard