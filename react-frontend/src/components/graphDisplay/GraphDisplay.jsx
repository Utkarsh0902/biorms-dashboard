import React from 'react'

import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto' 
// this is used to import and register chart components without tree-shaking

export default function GraphDisplay({datapoints}) {
    console.log(datapoints);
    const state = {
        labels: Array.from({length:datapoints.length},(x,i)=>i+1),
        datasets: [
          {
            data: datapoints,
            label: 'Temperature',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,100,0,0.8)',
            borderColor: 'orange'
          }
        ]
      }
    return (
    
    <div>
        <Line 
            data={state}
            />
    </div>
  )
}
