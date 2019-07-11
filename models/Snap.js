const mongoose = require('mongoose');
mongoose.Promise = global.Promise;



const snapSchema = new mongoose.Schema({
    from: {
        type: String,
        lowercase: true,
        trim: true,
    },
    to:{
        type: String,
        lowercase: true,
        trim: true,
    },
    photo:{
        type: String,
    },
    duration:{
        type: Number
    }
})



module.exports = mongoose.model('Snap', snapSchema);