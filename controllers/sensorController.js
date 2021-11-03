// sensor_index, sensor_details, sensor_create_get, sensor_create_post, sensor_delete
const Sensor = require('../models/sensors');

// Setup to send email alerts
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: 'biorms21@gmail.com',
            pass: 'Password@1234'
        }
});

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

const sensor_graphs = (req, res)=>{
    Sensor.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('sensors/graphs', {title: 'All sensors', sensors:result});
    })
    .catch((err)=>{
        console.log(err);
    })

}

const sensor_alert = (req, res)=>{
    // Alert through mail
    console.log("Alert raised.")
    const mailOptions = {
        from: 'biorms21@gmail.com', // sender address
        to: 'f20180456@hyderabad.bits-pilani.ac.in', // list of receivers
        subject: 'BIORMS ALERT!', // Subject line
        html: '<p>There is an alert from the biorms!</p>'// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else{
            console.log(info);
            res.redirect("/");
        }
          
    });

}

module.exports = {
    sensor_index,
    sensor_create_post,
    sensor_graphs,
    sensor_alert
}