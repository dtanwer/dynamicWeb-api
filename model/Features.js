import mongoose from "mongoose";
const FeaturesSchma= new mongoose.Schema({
    featuresData:[{type:mongoose.Schema.Types.ObjectId,ref:"featuresData"}]
}); 
export const FeaturesModel=mongoose.model("feature",FeaturesSchma);