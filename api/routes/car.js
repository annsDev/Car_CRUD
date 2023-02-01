import express from 'express';
import { 
    addNewCar,
    deleteCar,
    getAllCars, 
    getSingleCar, 
    updateCar 
} from '../controller/car.js';

const router = express.Router(); 

router.post("/newcar",addNewCar)

router.put("/newcar/:id",updateCar)

router.delete("/:id",deleteCar)

router.get("/singleCar/:id",getSingleCar)

router.get("/getAllCars",getAllCars)

export default router