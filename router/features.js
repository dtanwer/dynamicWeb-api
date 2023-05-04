import express from 'express';
import { FeaturesModel } from '../model/Features.js'

const router=express.Router();


router.get('/',async (req,res)=>{
    try {
        const data=await FeaturesModel.findById("64541048019e391658f36bf4");
        res.json(data);
    } 
    catch (err) {
        console.log(err)
    }
})
// this will not use right now 
router.post('/',async (req,res)=>{
    try {
        const newfeatures=new FeaturesModel(req.body);
        await newfeatures.save();
        res.json(newfeatures);
    } 
    catch (err) {
        console.log(err)
    }
})

export {router as featuresRouter}