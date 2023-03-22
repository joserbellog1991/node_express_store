const express = require("express");
const app = express();
const routerApi = require("./routes/index");
const port = 3000;

routerApi(app);


//get simple
app.get("/",(req, res)=>{

  res.send("Hola Mundo!");

});

app.get("/server",(req,res)=>{

  res.send("Server");
});


app.get("/json",(req,res)=>{

  res.json({

    nombre:"jose",
    apellido: "bello"


  });
});






app.get("/categories/:categoryID/products/:productID",(req,res)=>{

const {categoryID, productID} = req.params;

res.json({
  categoryID,
  productID,
  name:"category 2",
  title:"product "+productID
});

});

app.get("/categories/:categoryID/users/:usertID",(req,res)=>{

  const {categoryID, userID} = req.params;

  res.json({
    categoryID,
    userID,
    name:"category 2",
    title:"product "+userID
  });

  });




app.listen(port, ()=>{

  console.log("Puerto:"+port);

});
