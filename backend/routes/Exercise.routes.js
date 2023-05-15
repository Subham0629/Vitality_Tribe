const express=require("express");
const { ExerciseModel } = require("../models/Exercise.model ");

const exerciseRouter=express.Router()


exerciseRouter.get("/",async(req,res)=>{
    try {
        const notes=await ExerciseModel.find()
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send({"err":err.message})
    }
})
exerciseRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
       await ExerciseModel.insertMany(payload);
       res.send("Data is added");
    }catch(err){ 
       res.send({"msg":err.message});
    }
})

// exerciseRouter.patch("/update/:noteID",async(req,res)=>{
//     const {noteID}=req.params;
//     const note= await ExerciseModel.findOne({_id:noteID})
//     try {
//         if(req.body.userId!==note.userId){
//             res.status(200).send({"msg":`You are not authoried for this action`})

//         }else{
//             await ExerciseModel.findByIdAndUpdate({_id:noteID},req.body)
//             res.status(200).send({"msg":`The note with id:${noteID} has been updated`})

//         }
//     } catch (err) {
//         res.status(400).send({"err":err.message})
//     }
// })

// exerciseRouter.post("/delete/:noteID",async(req,res)=>{
//     const {noteID}=req.params;
//     const note= await ExerciseModel.findOne({_id:noteID})
//     try {
//         if(req.body.userId!==note.userId){
//             res.status(200).send({"msg":`You are not authoried for this action`})

//         }else{
//             await ExerciseModel.findByIdAndUpdate({_id:noteID})
//             res.status(200).send({"msg":`The note with id:${noteID} has been deleted`})

//         }
//     } catch (err) {
//         res.status(400).send({"err":err.message})
//     }
// })

module.exports={exerciseRouter}