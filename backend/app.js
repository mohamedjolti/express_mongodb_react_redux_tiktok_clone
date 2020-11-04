const { Send } = require("@material-ui/icons");
const express=require("express")
const app=express();
const mongoose=require("mongoose");
const Video=require("./models/Video")

var bodyParser=require("body-parser");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/Tiktok",{useNewUrlParser:true});

function json(res,data){
     return res.status(200).json(data)

}


app.get("/Video",(req,res)=>{
     Video.find({},(err,videos)=>{
         if(err) return "error"
         else return json(res,videos)
     })
})

app.post("/Video",(req,res)=>{
    const video={
        name:req.body.name,
        description:req.body.description,
        user:req.body.user,
        url:req.body.url 
    }
       
    Video.create(video,(err,newVideo)=>{
        if(err) console.log(err);
        else return json(res,newVideo)
    })
})



var todos = ['buy the milk', 'rent a car', 'feed the cat'];

app.get('/videos', (request, response) => response.status(200).json(todos));

app.listen(8000,()=>{
    console.log("server working");
})
