import React from 'react'
import Text from './Text'
import { formatCurrency, formatDateForTable } from '../helper/util';

interface TransactionListItemProps {
    name:string;
    image:string;
    business?:string;
    date:string;
    amount:number;
    currency:string;
    type:string;
}

const TransactionListItem:React.FC<TransactionListItemProps> = ({name,business,image,date,amount,currency,type}) => {
  return (
            <tr >
            <td className="pt-3.5 pb-3.5 pl-2 pr-2 min-w-45">
              <div className="flex items-center ">
                <img src={image} className='w-10 h-10' />
                <div className="flex flex-col ml-2">
                  <Text className="font-medium">{name}</Text>
                  {business && <Text className="text-xs text-cadet-grey">{business}</Text>}
                </div>
              </div>
            </td>
            <td className="pt-3.5 pb-3.5 pl-2 pr-2 min-w-35">
              <Text className="text-cadet-grey font-medium text-center">
                {type}
              </Text>
            </td>
            <td className="pt-3.5 pb-3.5 pl-2 pr-2 min-w-40">
              <Text className={`font-semibold text-center ${amount>0 && "text-emerald"}`}>
                {formatCurrency(currency,Math.abs(amount)).toString()}
              </Text>
            </td>
            <td className="pt-3.5 pb-3.5 pl-2 pr-2 min-w-30">
              <Text className="text-center text-cadet-grey">
                {formatDateForTable(date)}
              </Text>
            </td>
          </tr>
  )
}

export default TransactionListItem