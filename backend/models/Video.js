const mongoose=require("mongoose")



const VideoSchema=mongoose.Schema({
    name:{type:String},
    description:{type:String},
    user:{type:String},
    url:{type:String}
})

module.exports=new mongoose.model("video",VideoSchema)