
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


const Chart = ({data}:any) => {
    
    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
            >
                {data.map((entry:any, index:any) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    )
}

export default Chart;

