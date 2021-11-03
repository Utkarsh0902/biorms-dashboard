const express = require('express');
const app = express();
const mongoose = require('mongoose');
const sensorRoutes = require('./routes/sensorRoutes');

// connect to the database
const dbURI = 'mongodb+srv://admin:test123@nodetuts.r2xr3.mongodb.net/biogas-rms?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result)=>{
    console.log("Connected to the database.");
    //now listen for requests on port 3000
    app.listen(3000);
})
.catch((err)=>{
    console.log(err);
})

//register the view engine
app.set('view engine', 'ejs');

// MIDDLEWARE 
app.use(express.json()); // takes all the JSON data and passes that to the request object.
app.use(express.static('public'));

//Route handlers
app.get('/', (req,res)=>{
    res.redirect('/sensors');
})

//sensor routes: through a middleware
app.use('/sensors', sensorRoutes);

app.use((req, res)=>{
    // 404 page: The app.use() needs to be at the end of the other route handlers
    // It acts like the default case of 'switch'. (but needs to be placed at the end.)
    res.render('404', {title: 404});
})