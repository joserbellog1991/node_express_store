const express = require("express");
const cors = require('cors');
const app = express();
const routerApi = require("./routes/index");
const {errorHandler, logErrors,boomErrorHandler} = require("./middlewares/error.handler");
const port = process.env.PORT || 3000;

const whitelist = ['http://localhost:3000', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}

app.use(express.json());
//app.use(cors(options));
app.use(cors());
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


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
