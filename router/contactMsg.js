import { UserMsgModel} from '../model/ContactMsg.js'
import express from "express";

const router=express.Router();

router.get('/',async (req,res)=>{
    try {
        const allmsg=await UserMsgModel.find();
        res.json(allmsg);
    } 
    catch (err) {
        console.log(err)
    }
})

router.post('/',async (req,res)=>{
    try {
        const newMsg=new UserMsgModel(req.body);
        await newMsg.save();
        res.json(newMsg);
    } 
    catch (err) {
        console.log(err)
    }
})





export {router as msgRouter};