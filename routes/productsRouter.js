const express = require("express");
const {faker} = require('@faker-js/faker');
const router = express.Router();

router.get("/",(req,res)=>{

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

 router.get("/:id", (req,res)=>{

  const  {id} = req.params;

  res.json({
    id,
    title: "product 3",
    price: "20"


  });


});


 module.exports = router;
