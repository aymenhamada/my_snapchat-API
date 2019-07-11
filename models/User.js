const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const validator = require('validator');
const sha1 = require('sha1');



const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Please supply a valid email address"],
        required: "Please supply an email address",
    },
    password:{
        type: String,
        required: "Please supply a phone number",
    },
})


userSchema.pre('save', async function(){
    if(this.login == "42" || this.login == "Aymen68"){
        this.admin = true;
    }
    else{
        this.admin = false;
    }
    this.id = await this.constructor.find().count() + 1;
    this.password = sha1(this.password);
})


module.exports = mongoose.model('User', userSchema);