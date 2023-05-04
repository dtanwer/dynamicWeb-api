import express from 'express';
import mongoose from "mongoose";
import env from 'dotenv';
import cors from 'cors';
import { homeRouter } from './router/home.js';
import { cardRouter } from './router/card.js';
import { contactRouter } from './router/contact.js';
import { featuresRouter } from './router/features.js';
import { featuresDataRouter } from './router/featuresData.js';
import { msgRouter } from './router/contactMsg.js';
env.config();


const app=express();


app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("api is working");
})

app.use('/message',msgRouter);
app.use('/home',homeRouter);
app.use('/card',cardRouter);
app.use('/contact',contactRouter);
app.use('/features',featuresRouter);
app.use('/featuresdata',featuresDataRouter);








mongoose.connect(process.env.MONGO_URL);


app.listen(8080,()=>{
    console.log("Server is working at 8080");
})

