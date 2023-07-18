import React from 'react'
import './pieChartBox.scss'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'



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
            .option
            )}
        </div>
    </div>
  )
}

export default PieChartBox;