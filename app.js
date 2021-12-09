const express= require("express");
const path = require('path')
const app = express();
 

//config
app.use(express.static("public"));

 app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname +'/public/views/index.html'))//rota de principal
 })
 
 app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname +'/public/views/login.html'))//rota de login
 })
 



app.listen(8078,function(){
    console.log(" servido ta ligado na url : http://localhost:8078/")
  })
  