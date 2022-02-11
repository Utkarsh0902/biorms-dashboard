// user_index, user_details, user_create_get, user_create_post, user_delete
const User = require('../models/users');


const user_index = (req, res)=>{
    User.find().sort({createdAt: -1})
    .then((result)=>{
        // res.render('users/index', {title: 'All users', users:result});
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}

const user_create_post = (req, res)=>{
    const user = new User(req.body);
    console.log(req.body);
    user.save()
    .then((result)=>{
        res.redirect('/'); 
        // try to reload when new data comes in
    })
    .catch((err)=>{
        console.log(err);
    })
}
const user_emails = (req, res)=>{
    User.find({}).select('email')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = {
    user_index,
    user_create_post,
    user_emails
}