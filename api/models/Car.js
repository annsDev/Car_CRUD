import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  type:{
    type:String,
    required:true,
  },
  color:{
    type:String,
    required:true,
  },
  model:{
    type:Number,
  },
  category:{
    type:String,
  },

});

export default mongoose.model('Car',carSchema)