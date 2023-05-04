import express from 'express';
import { FeaturesDataModel } from '../model/FeaturesData.js';
import {FeaturesModel } from '../model/Features.js';

const router=express.Router();

router.get('/',async (req,res)=>{
    try {
        const data=await FeaturesDataModel.find();
        res.json(data);
    } 
    catch (err) {
        console.log(err)
    }
})
router.get('/:id',async (req,res)=>{
    try {
        const data=await FeaturesDataModel.findById(req.params.id);
        res.json(data);
    } 
    catch (err) {
        console.log(err)
    }
})

router.post('/',async (req,res)=>{
    try {
        const features= await FeaturesModel.findById("64541048019e391658f36bf4");
        const newfeaturesData=new FeaturesDataModel(req.body);
        await newfeaturesData.save();
        features.featuresData.push(newfeaturesData)
        await features.save();
        res.json({features,data:newfeaturesData});
    } 
    catch (err) {
        console.log(err)
    }
})



router.put("/:Id", async (req,res)=>{
    
    try {
        const features= await FeaturesDataModel.findByIdAndUpdate(req.params.Id ,{$set: req.body });
        res.json(features); 
    } catch (err) {
        res.json(err);
    }
});




router.delete("/:Id", async (req,res)=>{
    await FeaturesDataModel.findByIdAndDelete(req.params.Id);
    try {
        await FeaturesModel.findOneAndUpdate("64541048019e391658f36bf4", { $pull: {featuresData:req.params.cardId}},)
        res.json("Features has been Deleted !!"); 
    } catch (err) {
        res.json(err);
    }
});







export {router as featuresDataRouter}