const express = require('express');
const app = express();
const User = require('./User')


app.use(express.json())


app.get("/", async(req,res)=>{
    res.send("<h4> Nova página inicial 3 </h4>")
})

app.post("/cadastrar", async(req,res)=>{
    
    await User.create(req.body)
    .then(()=>console.log("cê é foda"))
    .catch(()=>console.log('deu treta'))

    res.send("<h4> cadastrado </h4>")
})


app.put("/update", async(req,res)=>(
    await User.update(req.body,{
        where: {
          id: req.body.id
        }
      }),
      
      res.send("<h4> atualizado </h4>")))

app.delete("/delete", async(req,res)=>{
    await User.destroy({
        where: {
          id: req.body.id
        }
      })


    .then(()=>console.log("cê é foda"))
    .catch(()=>console.log("erro ao deletar"))

    res.send("<h4> deletado </h4>")
})

app.listen(8080, ()=>{
    console.log("servidor iniciado: http://localhost:8080/ ")
})