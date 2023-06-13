import { React, useEffect, useState } from 'react'
import { CartesianAxis, CartesianGrid, LineChart, XAxis, YAxis, Line, ResponsiveContainer } from 'recharts';
import './custom-linechart.css'

export default function CustomLinechart({ data, valueKey, keyName, unitName }) {
    useEffect(() => {
    }, [])
    return (
        < div className='dashboard-block line-container' >
            <div className="line-name">
                <div className='line-name-element'>
                    {keyName + ', ' + unitName}
                </div>
            </div>
            <ResponsiveContainer width="100%" aspect={3.6}>
                <LineChart data={data} width={500} height={500}>
                    <CartesianGrid strokeDasharray={"3 3"} />
                    <XAxis dataKey={(value, index) => { return new Date(value.timestamp).toLocaleTimeString('ru').substring(0,5) }} />
                    <YAxis></YAxis>
                    <Line type="monotone" dataKey={valueKey} stroke="#8884d8"></Line>
                </LineChart>
            </ResponsiveContainer>
        </div >
    )
}
