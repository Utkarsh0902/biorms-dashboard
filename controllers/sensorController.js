// sensor_index, sensor_details, sensor_create_get, sensor_create_post, sensor_delete
const Sensor = require('../models/sensors');

const sensor_index = (req, res)=>{
    Sensor.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('sensors/index', {title: 'All sensors', sensors:result});
    })
    .catch((err)=>{
        console.log(err);
    })
}

const sensor_create_post = (req, res)=>{
    const sensor = new Sensor(req.body);
    console.log(req.body);
    sensor.save()
    .then((result)=>{
        res.redirect('/'); 
        // try to reload when new data comes in
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = {
    sensor_index,
    sensor_create_post
}