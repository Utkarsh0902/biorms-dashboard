import SensorTable from "../sensorTable/SensorTable.jsx";

import useFetch from "../../useFetch";

const Sensors = () => {
    const {data:sensors, pending, error} = useFetch('http://localhost:5000/sensors');
    return (
        <div className="sensors" >
          {error && <p>Error: {error}</p>}
          {pending && <p>Loading...</p>}
          {sensors && <SensorTable sensors = {sensors} title="All sensor values"/>}
          {/* This makes sure that the child components are not called when sensors is null */}
        </div>
      );
}
 
export default Sensors;