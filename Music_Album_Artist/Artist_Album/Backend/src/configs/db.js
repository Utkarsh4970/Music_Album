const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/artist")
}



//  mongodb+srv://sumit:Sumit7979@cluster0.4txvh.mongodb.net/test