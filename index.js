const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const connection = require("./database/db")
const userRoute = require('./routes/users.js')

const app = express()

app.use(express.json())
app.use(cors())

app.use((err,req,res,next)=>{
   const  errstatus = err.status || 500
   const errMessage = err.mesage || "something went wrong !"
   return res.status(errstatus).send(errMessage)
})

app.use('/api/v1/auth',userRoute)

const Port = process.env.PORT || 5000;

app.listen(Port,()=>{
    connection()
    console.log(`app is listening at the port ${Port}`)
})