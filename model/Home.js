import mongoose from "mongoose";

const HomeSchma= new mongoose.Schema({
    heading:{type:String, required:true},
    img:{type:String, required:true},
    card:[{type:mongoose.Schema.Types.ObjectId,ref:"card"}] 
}); 

export const HomeModel=mongoose.model("home",HomeSchma);