const mongoose=require("mongoose");

const albumSchema=new mongoose.Schema({

    title:{type: String,required:true},
    genre:{type: String,required:true},
   
    year:{type: Number,required:true},
    song:[{
        song_name:{type:String},
        duration:{type: Number}
    }]
   
},{
    versionKey:false,
    timestamps: true
})

const Album=mongoose.model("album",albumSchema);

module.exports=Album;