import React from 'react'
import './pieChartBox.scss'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'



const PieChartBox = () => {
    const data=[
        {name:"Mobile", value:400,color:"#0088FE"},
        {name:"Desktop", value:308,color:"#00c49f"},
        {name:"Laptop", value:380,color:"#FFBB28"},
        {name:"Tablet", value:280,color:"#FF8042"},
    ]

  return (
    <div className='pieChartBox'>
        <h1>Leads By Sources</h1>
        <div className="chart">
           <ResponsiveContainer width="99%" height={300}>
            <PieChart>
                <Tooltip
                contentStyle={{background:"white",borderRadius:"5px"}}
                />

                <Pie
                data={data}
                innerRadius={"68%"}
                outerRadius={"88%"}
                paddingAngle={5}
                dataKey="value"
                >
                {
                    data.map((item)=>
                        <Cell
                        key={item.name}
                        fill={item.color}
                        />
                    )
                }
                </Pie>
            </PieChart>
           </ResponsiveContainer>
        </div>
        <div className="options">
            {data.map((item)=>(
            <div className="option" key={item.name}>
                <div className="title">
                    <div className="dot" style={{backgroundColor:item.color}}></div>
                    <span>{item.name}</span>
                </div>
                <span>{item.value}</span>
            </div>
            ))}
        </div>
    </div>
  )
}

export default PieChartBox;