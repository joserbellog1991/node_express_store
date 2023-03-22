const express = require("express");
const {faker} = require('@faker-js/faker');
const app = express();

const port = 3000;
//get simple
app.get("/",(req, res)=>{

  res.send("Hola Mundo!");

});

app.get("/server",(req,res)=>{

  res.send("Server");
});
//end get simple

//get json

app.get("/json",(req,res)=>{

  res.json({

    nombre:"jose",
    apellido: "bello"


  });
});

app.get("/products",(req,res)=>{

 let {size} = req.query;

let count = 0;

 if(size){

  if(!isNaN(size))
  {
  count = size;
}else{

  res.send("Error. Parametro "+size+" no es un número");
  return false;

}

}else {count = 100}

const products=[{size}];

for(let i=0;i<count;i++)
{

products.push({

  id: i,
  name: faker.commerce.productName(),
  price: parseInt(faker.commerce.price(),10),
  image: faker.image.imageUrl(),
  size


});

}

res.json( products);

});
//end get json

//get con parametros

app.get("/products/:id", (req,res)=>{

  const  {id} = req.params;

  res.json({
    id,
    title: "product 3",
    price: "20"


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
//end get con paramateros

//get con querys

app.get("/users",(req,res)=>{

const {limit, offset} = req.query;

if(limit && offset){
res.json({limit,
          offset
});

}else{
res.send("no hay querys");

}



});

//end  get con querys

app.listen(port, ()=>{

  console.log("Puerto:"+port);

});
