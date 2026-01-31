const express=require("express");
const mongoose=require("mongoose");
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err));