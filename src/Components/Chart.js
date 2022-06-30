import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Contxt } from './Context';



function Chart() {
    let labels=[]
    let min=[]
    let max=[]




    let val=Contxt()
    let d=val.data
    d.map((e)=>{
        min.push(e.temp.min)
        max.push(e.temp.max)
         const n =new Date(e.dt * 1000).toLocaleString("en-us", {
             weekday: "long"
         });
        labels.push(n)
       })



const data = [
  {
    name: labels[0],
    Temprature_Min: min[0],
    Temprature_Max: max[0],
    amt: 2400,
  },
  {
    name: labels[1],
    Temprature_Min: min[1],
    Temprature_Max: max[1],
    amt: 2210,
  },
  {
    name: labels[2],
    Temprature_Min: min[2],
    Temprature_Max: max[2],
    amt: 2290,
  },
  {
    name: labels[3],
    Temprature_Min: min[3],
    Temprature_Max: max[3],
    amt: 2000,
  },
  {
    name: labels[4],
    Temprature_Min: min[4],
    Temprature_Max: max[4],
    amt: 2181,
  },
  {
    name: labels[5],
    Temprature_Min: min[5],
    Temprature_Max: max[5],
    amt: 2500,
  },
  {
    name: labels[6],
    Temprature_Min: min[6],
    Temprature_Max: max[6],
    amt: 2100,
  },
  {
    name: labels[7],
    Temprature_Min: min[7],
    Temprature_Max: max[7],
    amt: 2100,
  },
];
  
 
  
  

   
    return (
      <ResponsiveContainer width="100%" aspect={1}>
        <BarChart
          width={50}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Temprature_Max" fill="red" />
          <Bar dataKey="Temprature_Min" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}

export default Chart;