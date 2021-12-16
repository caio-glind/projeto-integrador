const express= require("express");
const path = require('path')
const app = express();
const router = express.Router()

app.use(express.static("public"));



router.get("/produtoa",(req,res)=>{
   
    res.render('../views/VerProduto.ejs')//rota de VER PRODUTO

})


module.exports=router;