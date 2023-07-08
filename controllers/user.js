const userModel = require("../models/user.js")

const errController = (status, message) =>{
    const err = new Error()
    err.status = status,
    err.message = message

    return err;
}


exports.register = async(req,res,next)=>{
    try{
        const user = await userModel.findOne({phNo:req.phNo})
        if(user) return next(errController(401, "user with this mobile number is already exists !"))

        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(200).json(newUser)
    }catch(err){
        next(err)
    }
}

exports.getAllDoc = async(req,res,next)=>{
    try{
        const users = await userModel.find();
        res.status(200).json(users)
    }catch(err){
        next(err)
    }
}