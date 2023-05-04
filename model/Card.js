import mongoose from "mongoose";

const CardSchma=new mongoose.Schema({
    content:{type:String, required:true},
    img:{type:String, required:true},
})

export const CardModel=mongoose.model("card",CardSchma);