const mongoose=require("mongoose");

const songSchema=new mongoose.Schema({
    title:{type: String,required:true},
    
    name:{type: String,required:true},
   
    duration:{type: Number,required:true},
   
},{
    versionKey:false,
    timestamps: true
})

const Song=mongoose.model("song",songSchema);
module.exports=Song;