import React from 'react'
import SectionTitle from './SectionTitle'

const RecentTransactions = () => {
  return (
    <>
    <SectionTitle moreButton={false} title="Recent Transaction"/>
    <table className='justify-self-stretch'>
        <thead>
            <th className='text-left text-xs font-semibold text-cadet-grey'>NAME/BUSINESS</th>
            <th className='text-xs font-semibold text-cadet-grey'>TYPE</th>
            <th className='text-xs font-semibold text-cadet-grey'>AMOUNT</th>
            <th className='text-xs font-semibold text-cadet-grey'>DATE</th>
        </thead>
    </table>
    </>
    
  )
}

export default RecentTransactions