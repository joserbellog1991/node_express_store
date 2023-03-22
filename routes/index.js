const productsRouter = require("./productsRouter");
const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoriesRouter");
const version = "v1";

function routerApi(app){

app.use("/"+version+"/products",productsRouter);
app.use("/"+version+"/users",usersRouter);
app.use("/"+version+"/categories",categoriesRouter);


}

module.exports =routerApi;
