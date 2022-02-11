const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController')

router.get('/', sensorController.sensor_index);
router.post('/', sensorController.sensor_create_post);

router.get('/graphs', sensorController.sensor_graphs);

// Sending alerts through mail
router.post('/alert', sensorController.sensor_alert);

module.exports = router;

