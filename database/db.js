const mongoose = require("mongoose")

const connection = async()=>{
    try{
        await mongoose.connect(`${process.env.DBURL}`)
            console.log(`databse is connected successfully !`)
    }catch(err){
        console.log(err)
    }
}

module.exports = connection;