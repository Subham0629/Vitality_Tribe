const mongoose = require("mongoose");



const socialSchema=mongoose.Schema({
    userID: String,
    user: String,
    Energy: { type: Number },
    name: { type: String },
    Protein: { type: Number },
    Fat: { type: Number },
    Netcarbs: { type: Number },
    time: { type: Number },
    caloriesburnt: { type: Number },
    caloriesremaining: { type: Number },
    caloriesconsumed: { type: Number } ,
    Energy_percentage:{type : Number},
    Protein_percentage:{type : Number},
    Fat_percentage:{type : Number},
    Netcarbs_percentage:{type : Number}, 
},{
    versionKey:false                   
})


const SocialModel = mongoose.model("social", socialSchema);

module.exports = {
    SocialModel
}