const express=require('express');
const mongoes=require('mongoose');
const app=express();
mongoes.connect("mongodb://localhost:27017/employee",{useNewUrlParser:true,useUndefiedTopology:true},(err)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Hello Would");
    }
})
app.listen(3000,()=>{
    console.log("Success fully");
})