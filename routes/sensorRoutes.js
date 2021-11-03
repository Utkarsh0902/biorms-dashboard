const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController')

router.get('/', sensorController.sensor_index);
router.post('/', sensorController.sensor_create_post);

module.exports = router;

