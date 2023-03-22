const express = require("express");
const {faker} = require('@faker-js/faker');
const router = express.Router();


router.get("/",(req,res)=>{

  const {limit, offset} = req.query;
/*
  if(limit && offset){
  res.json({limit,
            offset
  });

  }else{
  res.send("no hay querys");

  }
*/

let count = 20;
let users = [];


for(let i=0; i<count;i++)
{

users.push({

  id:i,
  name: faker.name.fullName(),
  lastName: faker.name.jobArea(),
  age: faker.name.age


});

}

  res.json({
    users
  });



  });

  module.exports = router;
