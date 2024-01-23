import "../chats/Chats.css"

import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
 
  {name:"jan" , Total:1200},
  {name:"feb" , Total:2100},
  {name:"mar" , Total:800},
  {name:"apl" , Total:1600},
  {name:"May" , Total:900},
  {name:"jnu" , Total:1700},
];

const Chats = ({aspect , title}) => {
  return (
    <div className=" chart">
 <div className="taitel">{title}</div>
<ResponsiveContainer width="100%" aspect={aspect }>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
  <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
   
  </defs>
  <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chats