const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://sumit:Sumit7979@cluster0.4txvh.mongodb.net/test")
}