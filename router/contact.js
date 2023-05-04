import express from 'express'
import { ContactModel } from '../model/Contact.js';


const router=express.Router();

router.get('/',async (req,res)=>{
    try {
        const data=await ContactModel.findById("645415e4d05d92a9aa50562a");
        res.json(data);
    } 
    catch (err) {
        console.log(err)
    }
})

// this will never use
router.post('/',async (req,res)=>{
    try {
        const newContact=new ContactModel(req.body);
        await newContact.save();
        res.json(newContact);
    } 
    catch (err) {
        console.log(err)
    }
})

router.put("/", async (req,res)=>{
    
    try {
        const data= await ContactModel.findByIdAndUpdate("645415e4d05d92a9aa50562a" ,{$set: req.body });
        res.json(data); 
    } catch (err) {
        res.json(err);
    }
});




export {router as contactRouter}