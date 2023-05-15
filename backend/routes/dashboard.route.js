const express=require("express");
const { DashboardModel } = require("../models/dashboard.model");
const dashboardRouter=express.Router();

dashboardRouter.get("/",async(req,res)=>{
    const userID=req.body.userID;
    try{
       const dashboard=await DashboardModel.find({"userID":userID});
       res.send(dashboard);
    }catch(err){
        res.send(err.message);
    }
})

dashboardRouter.post("/add",async(req,res)=>{
   console.log(req.body)
    try{
       let data=new DashboardModel(req.body);
         await data.save();
         res.send("Added in Dashboard");  
    }catch(err){
        res.send(err.message);
    }

})

// dashboardRouter.patch("/updatecart/:id",async(req,res)=>{
//     const {id}=req.params;
//     const cart= await DashboardModel.findOne({_id:id})
//     try {
//         if(req.body.userID!==cart.userID){
//             res.status(200).send({"msg":`You are not authoried for this action`})

//         }else{
//             await DashboardModel.findByIdAndUpdate({_id:id},req.body)
//             res.status(200).send({"msg":`The cart with id:${id} has been updated`})

//         }
//     } catch (err) {
//         res.status(400).send({"err":err.message})
//     }
// })


// dashboardRouter.delete("/deletecart/:id",async(req,res)=>{
//     const {id}=req.params;
//     const cart= await DashboardModel.findOne({_id:id});
//     try {
//         if(req.body.userID!==cart.userID){
//             res.status(200).send({"msg":`You are not authoried for this action`})

//         }else{
//             await DashboardModel.findByIdAndDelete({_id:id})
//             res.status(200).send({"msg":`The cart with id:${id} has been deleted`})

//         }
//     } catch (err) {
//         res.status(400).send({"err":err.message})
//     }
// })

module.exports={
    dashboardRouter
}



