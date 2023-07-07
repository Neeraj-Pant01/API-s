const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phNo:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    location:{
        long:{
            type:String,
            required:true
        },
        lat:{
            type:String,
            required:true
        }
    }
})

module.exports = mongoose.model('users',userSchema)