function logErrors(err, req, resp, next){
console.log("logErrors");
console.log(err);
next(err);

}


function errorsHandler(err, req, resp, next){
 console.log("errorHandler");
 resp.status(500).json({

  message: err.menssage,
  stack: err.stack

 });




  }

module.exports = {logErrors, errorsHandler};
