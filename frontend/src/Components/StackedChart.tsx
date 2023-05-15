import React from 'react';
import { BarChart as RechartsBarChart, XAxis, YAxis, Bar, Legend, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface Data {
  name: string;
  value1: number;
  value2: number;
}

interface Props {
  data: Data[];
}

const StackedBarChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width={"60%"} height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value1" stackId="a" fill="#8884d8" />
        <Bar dataKey="value2" stackId="a" fill="#82ca9d" />
        <Bar dataKey="value3" stackId="a" fill="#ffc658" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
