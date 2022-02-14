import './sensorTable.css'

const SensorTable = ({sensors, title}) => {
    var index = sensors.length;
    const sensorData = sensors.map(
        (sensor)=>{
            const date = sensor.updatedAt.split("T")[0];
            const time = sensor.updatedAt.split("T")[1]

            return(
                <tr>
                    <td>{index--}</td>
                    <td>{sensor.temp}</td>
                    <td>{sensor.pressure}</td>
                    <td>{sensor.ph}</td>
                    <td>{sensor.humidity}</td>
                    <td>{time}</td>
                    <td>{date}</td>
                </tr>
            )
        }
    )
    return (
        <div className="sensor-list">
            <h2>{title}</h2>
            <table class='sensor-table'>
                <thead>
                    <tr>
                        <th>Index no.</th>
                        <th >Temp</th>
                        <th >Pressure</th>
                        <th >pH</th>
                        <th >Humidity</th>
                        <th >Timestamp</th>
                        <th >Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sensorData}
                </tbody>
            </table>

        </div>
    );
}
 
export default SensorTable;