import Car from "../models/Car.js"

export const addNewCar =async (req,res)=>{
    const newCar = new Car(req.body)
    try{
        const saveCar= await newCar.save()
        res.status(200).json(saveCar)
    }catch(err){
        console.log("err",err)
        res.status(500).json(err)
    }
}

export const getAllCars =async (req,res)=>{
    try{
        let car = await Car.find()
         res.status(200).json(car)
     }catch(err){
         console.log("er333333r",err)
         res.status(500).json(err)
     }
}

export const getSingleCar=async (req,res)=>{
    try{
        let singleCar= await Car.findById(req.params.id)
         res.status(200).json(singleCar)
     }catch(err){
         console.log("err",err)
         res.status(500).json(err)
     }
}

export const deleteCar =async (req,res)=>{
    try{
        await Car.findByIdAndDelete(req.params.id)
         res.status(200).json("Delete Successfully")
     }catch(err){
         console.log("err",err)
         res.status(500).json(err)
     }
}

export const updateCar =async (req,res)=>{
    try{
        const updateCar = await Car.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateCar)
    }catch(err){
        console.log("err",err)
        res.status(500).json(err)
    }
}