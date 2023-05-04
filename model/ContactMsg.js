import mongoose from "mongoose";

const UserMsgSchma= new mongoose.Schema({
    userName:{type:String, required:true},
    UserEmail:{type:String, required:true},
    Message:{type:String, required:true} 
}); 

export const UserMsgModel=mongoose.model("message",UserMsgSchma);