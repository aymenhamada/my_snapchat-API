const mongoose = require('mongoose');
const sha1 = require('sha1');
const User = mongoose.model('User');


exports.register = async(req, res) => {
    findUser = await User.find({email: req.body.email}).count();
    if(findUser == 0){
        user = await (new User(req.body)).save()
        return res.json('saved to the database');
    }
    return res.status(400).json({
        error: ["This adress email is already used"]
      })
}


exports.login = async (req, res) => {
    user = await User.findOne({email: req.body.email});
    if(user && user.password == sha1(req.body.password)){
        return res.json('OK')
    }
    return res.status(400).json({
        error: ['Incorrect login: inccorect password or email ! please try again']
    })
}


exports.all = async (req, res) => {
    user = await User.find();
    return res.json(user);
}