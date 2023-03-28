function logErrors(err, req, resp, next){
console.log("logErrors");
console.log(err);
next(err);

}


function errorHandler(err, req, resp, next){
 console.log("errorHandler");
 resp.status(500).json({

  message: err.menssage,
  stack: err.stack

 });




  }

  function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    }else{
    next(err);
  }
  }


  module.exports = { logErrors, errorHandler, boomErrorHandler }
