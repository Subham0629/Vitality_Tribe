const mongoose=require("mongoose")

const exerciseSchema=mongoose.Schema({
    name:{type:String,required:true},
    Energy:{type:Number,required:true},
    time:{type:Number,required:true},
    type:{type:String,required:true,default:"exercise"}

},{
    versionKey:false
})

const ExerciseModel=mongoose.model("exercise",exerciseSchema)

module.exports={
    ExerciseModel
}