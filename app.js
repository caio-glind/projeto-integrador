const express= require("express");
const path = require('path')
const app = express();
 const usuario=require("./routes/usuarios")
const produto =require("./routes/produto")


//config
app.use(express.static("public"));

 app.get("/",(req,res)=>{
    res.render(path.join(__dirname +'/views/index.ejs'))//rota de principal
 })



app.use("/usuario",usuario)
app.use("/produto",produto)


app.listen(8078,function(){
    console.log(" servido ta ligado na url : http://localhost:8078/")
  })
