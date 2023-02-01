 import express from "express"
 import dotenv from "dotenv"
 import mongoose from "mongoose"
 import carRouter from './api/routes/car.js'
 const app = express()
 dotenv.config()


 const connect= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongo Db")
      } catch (error) {
       throw error
      }
 }

mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected from Mongo")
})


app.use(express.json())

app.use("/car", carRouter)




 app.listen(8008,()=>{ 
    connect()
    console.log("Connected to backend server")
 })