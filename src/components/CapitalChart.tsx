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

interface CapitalChartProps {
  workingCapitals:Array<CapitalInterval>
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
  plugins: {
    legend: {display:false},
  },
};


  const CapitalChart:React.FC<CapitalChartProps> = ({workingCapitals}) => {
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
    <div className="border rounded-[10px] border-cultured pt-4 pb-4 pl-6 pr-6 max-h-72.5 w-[716px]">
    <div>CapitalChart</div>
    <Line options={options} data={data} />
    </div>
  )
}

export default CapitalChart