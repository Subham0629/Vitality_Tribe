const mongoose=require("mongoose");


const dashboardSchema=mongoose.Schema({
      userID:String,
      user:String,
      Energy:{type:Number},
      name:{type:String},
      Protein:{type:Number},
      Fat:{type:Number},
      Netcarbs:{type:Number},
      type:{type:String},
      time:{type:Number},
      quantity:{type:Number}     
},{
    versionKey:false                   
})


const DashboardModel=mongoose.model("dashboard",dashboardSchema);

module.exports={
    DashboardModel
}