const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    temp:{
        type: Number,
        required:true
    },
    pressure:{
        type: Number,
        required:true
    },
    ph:{
        type: Number,
        required:true
    },
    humidity:{
        type: Number,
        required:true
    }
}, {timestamps:true});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;