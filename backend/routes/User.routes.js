const express=require("express");
const { UserModel } = require("../models/User.model");
const userRouter=express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

userRouter.post("/register",async(req,res)=>{
    const {email,pass,firstname,lastname}=req.body
    const user = await UserModel.findOne({email:email});
    console.log(user);
    if(user==null){
    try {
        bcrypt.hash(pass, 5, async(err, hash)=> {
            const user=new UserModel({email,firstname,lastname,pass:hash});
            await user.save()   
            res.status(200).send({"msg":"Added new User"})
            
        });
    } catch (err) {
        res.status(200).send({"err":err.message})

    }
  }else{
    res.status(200).send({"msg":"User alredy exists"});
  }
})


userRouter.post("/login",async(req,res)=>{
    try {
       const {email,pass}=req.body;
       console.log(req.body);
       const user=await UserModel.findOne({email})
       if(user){
           bcrypt.compare(pass, user.pass, (err, result)=> {
            console.log(result)
            if(result){
                token = jwt.sign({userID:user._id,user:user.firstname}, 'masai');
                res.status(200).send({"msg":"Login Successfull","token":token, "user" : user})
            }else{
                res.status(200).send({"msg":"Wrong Password!!"})
               }
        });
        
       }else{
        res.status(200).send({"msg":"Wrong Credentials!!"})
       }
    } catch (err) {
        res.status(200).send({"err":err.message})
    }
    console.log("last");
})
userRouter.patch("/update/:noteID",async(req,res)=>{
    const {noteID}=req.params;
    const note= await UserModel.findOne({_id:noteID})
    try {
        if(req.body.userID!==note.userID){
            res.status(200).send({"msg":`You are not authoried for this action`})

        }else{
            await UserModel.findByIdAndUpdate({_id:noteID},req.body)
            res.status(200).send({"msg":`The note with id:${noteID} has been updated `,"user" : note})

        }
    } catch (err) {
        res.status(400).send({"err":err.message})
    }
})
userRouter.get("/single/:id",async(req,res)=>{
    
    const {id}=req.params
    try {
        const notes=await UserModel.find({_id:id})
        res.status(200).send(notes)
    } catch (err) {
        res.status(400).send({"err":err.message})
    }
})


// userRouter.patch("/update/:noteID",async(req,res)=>{
//     const {noteID}=req.params;
//     const note= await UserModel.findOne({_id:noteID})
//     try {
//         if(req.body.userID!==note.userID){
//             res.status(200).send({"msg":`You are not authoried for this action`})

//         }else{
//             await UserModel.findByIdAndUpdate({_id:noteID},req.body)
//             res.status(200).send({"msg":`The note with id:${noteID} has been updated`})

//         }
//     } catch (err) {
//         res.status(400).send({"err":err.message})
//     }
// })

module.exports={
    userRouter
}