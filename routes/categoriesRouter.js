const express = require("express");
const {faker} = require("@faker-js/faker");
const router = express.Router();


router.get("/", (req,res)=>{
let count = 20;
let categories = [];


for(let i=0; i<count;i++)
{

categories.push({

id:i,
name: faker.commerce.department()


});

}

  res.json({
categories
  });


});


module.exports = router;
