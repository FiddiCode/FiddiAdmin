import React from 'react'
import "./bigChartBox.scss"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const BigChartBox = () => {
  return (
    <div className='bigChartBox'>
        <h1>Revenue Analytics</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <AreaChart
                data=""
                margin={{
                    top:10,
                    right:30,
                    left:0,
                    bottom:0,
                }
                }>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area
                    type="monotune"
                    dataKey=""
                    stackId={""}
                    stroke='#8884d8'
                    fill='#8884d8'
                    />
                    <Area
                    type="monotune"
                    dataKey=""
                    stackId={""}
                    stroke='#82ca9d'
                    fill='#82ca9d'
                    />
                    <Area
                    type="monotune"
                    dataKey=""
                    stackId={""}
                    stroke='#ffc658'
                    fill='#ffc658'
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BigChartBox;