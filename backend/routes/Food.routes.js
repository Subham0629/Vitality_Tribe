const express=require("express");
const { FoodModel } = require("../models/Food.model");

const foodRouter=express.Router()


foodRouter.get("/",async(req,res)=>{
    try {
        const notes=await FoodModel.find()
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send({"err":err.message})
    }
})
foodRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
       await FoodModel.insertMany(payload);
       res.send("Data is added");
    }catch(err){
       res.send({"msg":err.message});
    }
})

// foodRouter.patch("/update/:noteID",async(req,res)=>{
//     const {noteID}=req.params;
//     const note= await FoodModel.findOne({_id:noteID})
//     try {
//         if(req.body.userId!==note.userId){
//             res.status(200).send({"msg":`You are not authoried for this action`})

//         }else{
//             await FoodModel.findByIdAndUpdate({_id:noteID},req.body)
//             res.status(200).send({"msg":`The note with id:${noteID} has been updated`})

//         }
//     } catch (err) {
//         res.status(400).send({"err":err.message})
//     }
// })

// foodRouter.post("/delete/:noteID",async(req,res)=>{
//     const {noteID}=req.params;
//     const note= await FoodModel.findOne({_id:noteID})
//     try {
//         if(req.body.userId!==note.userId){
//             res.status(200).send({"msg":`You are not authoried for this action`})

//         }else{
//             await FoodModel.findByIdAndUpdate({_id:noteID})
//             res.status(200).send({"msg":`The note with id:${noteID} has been deleted`})

//         }
//     } catch (err) {
//         res.status(400).send({"err":err.message})
//     }
// })

module.exports={foodRouter}