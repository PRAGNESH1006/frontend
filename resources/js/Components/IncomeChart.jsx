import { Select } from '@headlessui/react';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sampleData = [
  { name: 'Page A', income: 1500, profit: 2000 },
  { name: 'Page B', income: 800, profit: 400 },
  { name: 'Page C', income: 1200, profit: 1000 },
  { name: 'Page D', income: 1600, profit: 2000 },
  { name: 'Page E', income: 2000, profit: 1100 },
  { name: 'Page F', income: 1000, profit: 1300 },
  { name: 'Page G', income: 2800, profit: 1500 },
  { name: 'Page H', income: 3200, profit: 1700 },
];

const IncomeProfitChart = ({ data = sampleData, height = 250 }) => {
  return (
    <div className=" sm:col-span-5 bg-white dark:bg-darkGray rounded-lg p-4">
      <div className='flex justify-between items-center p-2 mb-4'>
        <h3 className="text-md font-semibold text-primary dark:text-darkPrimaryText">Income & Expense</h3>
        <Select className={`border-none focus:ring-0 text-[10px] font-bold rounded-2xl pr-6 pl-2 p-0 dark:text-darkBackground bg-secondary dark:bg-success`} >
          <option value="active">Yearly </option>
          <option value="paused">Monthly</option>
          <option value="delayed">Weekly</option>
          <option value="canceled">Daily</option>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray=" 3" stroke="#E0E0E0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'darkgrey', borderRadius: '5px' }} itemStyle={{ color: '#333333' }} />
          <Legend wrapperStyle={{ color: '#333333' }} />
          <Line type="monotone" dataKey="income" stroke="#3498DB" name="Income" />
          <Line type="monotone" dataKey="profit" stroke="#F39C12" name="Profit" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeProfitChart;
