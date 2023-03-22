const express = require("express");
const productsRouter = require("./productsRouter");
const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoriesRouter");
//const version = "v1";

function routerApi(app){
const route = express.Router()
app.use("/api/v1",route);
route.use("/products",productsRouter);
route.use("/users",usersRouter);
route.use("/categories",categoriesRouter);


}

module.exports =routerApi;
