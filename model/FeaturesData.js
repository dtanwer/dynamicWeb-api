import mongoose from "mongoose";

const FeaturesDataSchma= new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:String, required:true},
    img:{type:String}
}); 

export const FeaturesDataModel=mongoose.model("featuresData",FeaturesDataSchma);