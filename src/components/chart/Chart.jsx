import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
 {name:"jan" , Total:2131},
 {name:"feb" , Total:123},
 {name:"mar" , Total:3213},
 {name:"april" , Total:3123},
 {name:"may" , Total:321},
 {name:"june" , Total:2123}
];

function Chart({aspect,title}) {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
         
          </defs>
          <XAxis dataKey="name" stroke="gray" />
        
          <CartesianGrid strokeDasharray="3 3" className="charGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
