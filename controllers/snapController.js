const mongoose = require('mongoose');
const Snap = mongoose.model('Snap');
const uuid = require('uuid');


exports.send = async (req, res) => {
    const snap = await (new Snap(req.body)).save();
    return res.json('OK');
}

exports.getSnapById = async (req, res) => {
    const id = req.params.id
    const snap = await Snap.find({to: id});
    const number = await Snap.find({to: id}).count();
    return res.json({snap, message: number});
}

exports.seen = async (req, res) => {
    const id = req.params.id;
    const snap = await Snap.findOneAndDelete({_id: id});
    if(snap){
        return res.json('snap deleted');
    }
    return res.json('error message');
}