import { HomeModel } from "../model/Home.js";
import express from "express";

const router=express.Router();

router.get('/',async (req,res)=>{
    try {
        const data=await HomeModel.findById("64540888d0a8d182ffa30e5a");
        res.json(data);
    } 
    catch (err) {
        console.log(err)
    }
})


router.put('/', async (req,res)=>{
    try{
        const data = await HomeModel.findByIdAndUpdate("64540888d0a8d182ffa30e5a",{$set: req.body }, { new: true });
        //show the updated data
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
})




// this api will not use right now!
router.post('/',async (req,res)=>{
    try {
        const newHome=new HomeModel(req.body);
        await newHome.save();
        res.json(newHome);
    } 
    catch (err) {
        console.log(err)
    }
})





export {router as homeRouter};