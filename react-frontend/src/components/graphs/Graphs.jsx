import React from 'react'

import useFetch from '../../useFetch';
import GraphDisplay from '../graphDisplay/GraphDisplay';

export default function Graphs() {
  const {data:sensors, pending, error} = useFetch('http://localhost:5000/sensors');
  return (
        <div className="sensors">
          {error && <p>Error: {error}</p>}
          {pending && <p>Loading...</p>}
          {sensors && <GraphDisplay datapoints = {sensors.map((sensor)=>{return sensor.temp})} />}
          {/* This makes sure that the child components are not called when sensors is null */}
        </div>
      );
}
