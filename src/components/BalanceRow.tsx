import React from 'react'
import BalanceCard from './BalanceCard'
import WalletGreenSVG from '../assets/wallet-green.svg'
import WalletSVG from '../assets/wallet.svg'
import WalletAddSVG from '../assets/wallet-add.svg'

const BalanceRow = () => {
  return (
    <div className='flex pt-7.5 pb-7.5 justify-around flex-wrap'>
        <BalanceCard className={"mb-2"} dark={true} icon={WalletGreenSVG} title={'Total balance'} amount={5240.21}/>
        <BalanceCard className={"mb-2"} dark={false} icon={WalletSVG} title={'Total spending'} amount={250.80}/>
        <BalanceCard className={"mb-2"} dark={false} icon={WalletAddSVG} title={'Total saved'} amount={550.25}/>
    </div>
  )
}

export default BalanceRow