const express = require("express");
const ProductServices = require("../services/productServices");
const router = express.Router();

const service = new ProductServices();

router.get("/",(req,res)=>{

  let {size} = req.query;

service.generate(size);
  const products = service.find();

 res.json(products);

 });

 router.get("/:id", (req,res)=>{

  const  {id} = req.params;

  const product = service.findOne(id);

  res.json(product);
/*
  if(id==999){

    res.status(404).json({
     messege:"Not Found"

    });
  }else{

  res.status(201).json({
    id,
    title: "product 3",
    price: "20"


  });
}*/


});



router.post('/', (req,res)=>{

const productos = req.body;

const products = service.create(productos);

res.json({

    messege:"create",
    data:products

})

});


router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }

});

  router.delete("/:id",(req,res)=>{


    const {id} = req.params;

    res.json({
      messege:"delete",
      id

    });



});

 module.exports = router;
