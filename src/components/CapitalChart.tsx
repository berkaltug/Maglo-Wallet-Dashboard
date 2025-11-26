import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { CapitalInterval } from '../services/financialTypes';
import Skeleton from 'react-loading-skeleton';

interface CapitalChartProps {
  workingCapitals:Array<CapitalInterval>
  pending:boolean
}

ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend);

  const options = {
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {display:false},
  },
};


  const CapitalChart:React.FC<CapitalChartProps> = ({workingCapitals,pending}) => {
    const labels=workingCapitals?.map(item=>item.month)
    const incomeList=workingCapitals?.map(item=>item.income)
    const expenseList=workingCapitals?.map(item=>item.expense)
    const data={
      labels,
      datasets:[{
          label:"Income",
          data:incomeList,
          borderColor:getComputedStyle(document.documentElement).getPropertyValue("--color-emerald"),
          tension:0.3
      },
      {
          label:"Expenses",
          data:expenseList,
          borderColor:getComputedStyle(document.documentElement).getPropertyValue("--color-max-green-yellow"),
          tension:0.3
      }
      ]
    }

  return (
    <div className="border rounded-[10px] border-cultured pt-4 pb-4 pl-6 pr-6 mb-3.75 mt-3.75 max-h-72.5">
    <div>CapitalChart</div>
    {pending && <Skeleton count={1} height={194}/>}
    {!pending && <Line options={options} data={data} />}
    </div>
  )
}

export default CapitalChart