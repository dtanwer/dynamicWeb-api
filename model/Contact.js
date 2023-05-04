import mongoose from "mongoose";

const ContactSchma= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
    facebook:{type:String, required:true},
    insagram:{type:String, required:true},
    linkdin:{type:String, required:true}
}); 

export const ContactModel=mongoose.model("contact",ContactSchma);