const mongoose = require('mongoose')
const newSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    }
});

const Collection = mongoose.model('data',newSchema)
module.exports = Collection