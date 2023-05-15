const mongoose=require("mongoose")

const foodSchema=mongoose.Schema({
    name:{type:String,required:true},
    Energy:{type:Number,required:true},
    Protein:{type:Number,required:true},
    Fat:{type:Number,required:true},
    Netcarbs:{type:Number,required:true},
    type:{type:String,required:true,default:"food"}
},{
    versionKey:false
})

const FoodModel=mongoose.model("food",foodSchema)

module.exports={
    FoodModel
}