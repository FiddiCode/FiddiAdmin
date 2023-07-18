import React from 'react'
import './chartbox.scss'
import {Link} from 'react-router-dom'
import {ResponsiveContainer,LineChart,Line, Tooltip} from 'recharts'

// type Props={
//     color:string;
//     icon:string;
//     title:string;
//     datakey:string;
//     number:number | string;
//     percentage:number;
//     chartData:object;

// }

const ChartBox = (props) => {


  return (
    <div className='chartBox'>
        <div className="boxInfo">
            <div className="title">
                <img src={props.icon} alt='user'/>
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to='/' style={{color:props.color}}>View All</Link>
        </div>
        <div className="chartInfo">
            <div className="chart">
                <ResponsiveContainer width='99%' height='100%'>
                    <LineChart data={props.chartData}>
                        <Tooltip
                        contentStyle={{background:'transparent',border:'none'}}
                        labelStyle={{display:'none'}}
                        position={{x:10,y:78}}
                        />
                        <Line 
                        type='monotone'
                        datakey={props.datakey}
                        stroke={props.color}
                        stokewidth={2}
                        dot={true}
                        />
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className='percentage' style={{color: props.percentage <8 ? "tomato": "limegreen"}}>{props.percentage}%</span>
                    <span className='duration'>this month</span>
                </div>
            </div>
      </div>
  )
}

export default ChartBox;