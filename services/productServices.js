const {faker} = require('@faker-js/faker');

class ProductServices {

  constructor(){

    this.products = [];
    this.generate(100);

  }

  generate(size){

    let count = 0;

  if(size){

   if(!isNaN(size))
   {
   count = size;
 }else{


   return size;

 }

 }else {count = 100}

 //const products=[];

 for(let i=0;i<count;i++)
 {

 this.products.push({

   id: faker.datatype.uuid(),
   //id: i,
   name: faker.commerce.productName(),
   price: parseInt(faker.commerce.price(),10),
   image: faker.image.imageUrl(),
   size


 });

 }

  }

create(data){

  const newProduct = {
    id: faker.datatype.uuid(),
    ...data
  }
  this.products.push(newProduct);
  return newProduct;

}

find(){

  return this.products;
}


findOne(id){

  if(id==999)
  {
    const messege = {
      messege:"not found"
    }
    return messege;

  }else{
  return this.products.find(item => item.id == id);
}
}


update(){


}

delete(){


}


}

module.exports = ProductServices;
