import React from 'react'

import useFetch from '../../useFetch';
import GraphDisplay from '../graphDisplay/GraphDisplay';

import './graphs.css'
export default function Graphs() {
  const {data:sensors, pending, error} = useFetch('http://localhost:5000/sensors');
  return (
        <div className="graphs">
          {error && <p>Error: {error}</p>}
          {pending && <p>Loading...</p>}
          {sensors && 
          <div>
            <h3>Temperature</h3>
            <GraphDisplay datapoints = {sensors.map((sensor)=>{return sensor.temp})} title="Temperature" color="rgba(255,100,0,0.8)" border="orange"/>

            <h3>Pressure</h3>
            <GraphDisplay datapoints = {sensors.map((sensor)=>{return sensor.pressure})} title="Pressure" color="rgba(5, 105, 107,0.8)" border="darkseagreen"/>

            <h3>pH</h3>
            <GraphDisplay datapoints = {sensors.map((sensor)=>{return sensor.ph})} title="pH" color="rgba(50,205,50,0.8)" border="darkgreen"/>

            <h3>Humidity</h3>
            <GraphDisplay datapoints = {sensors.map((sensor)=>{return sensor.humidity})} title="Humidity" color="rgba(255,99,71,0.8)" border="red"/>
          </div>
            }
          {/* This makes sure that the child components are not called when sensors is null */}
        </div>
      );
}
