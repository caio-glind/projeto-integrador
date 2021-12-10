const express= require("express");
const path = require('path')
const app = express();
const router = express.Router()

app.use(express.static("public"));



router.get("/produtoa",(req,res)=>{
   
    res.sendFile('/home/caio/Documentos/GitHub/projeto-integrador/public/views/produto/produtoa.html')//rota de login

})


module.exports=router;