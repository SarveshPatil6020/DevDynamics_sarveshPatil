// src/components/CommitChart.tsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DayWiseActivity {
  date: string;
  items: {
    children: {
      count: string;
      label: string;
    }[];
  };
}

interface CommitChartProps {
  dayWiseActivity: DayWiseActivity[];
}

const CommitChart: React.FC<CommitChartProps> = ({ dayWiseActivity }) => {
  console.log("Day-wise activity:", dayWiseActivity);

  const data = dayWiseActivity.map(({ date, items }) => ({
    date,
    commits: parseInt(items.children.find(item => item.label === 'Commits')?.count || '0'),
  }));

  console.log("Processed data:", data);

  return (
    <ResponsiveContainer width="100%" height={710}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="commits" stroke="#c3d2eb" activeDot={{ r: 10 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CommitChart;
