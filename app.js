var express =require('express');
var logger = require('morgan');
var app=express();
var users= require('./routes/users')
var cars= require('./routes/cars')
var mongoose=require('mongoose')
const bodyParser=require('body-parser')
var http= require('http')
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/apiproject');

//middle ware
app.use(logger('dev'));
app.use(bodyParser.json());


//routes
app.use('/users',users);
app.use('/cars',cars)

//catch 404 errors and forword them to err handlers
app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status=404;
    next(err);
});
//error handlers functions
app.use((err,req,res,next)=>{
    const error=app.get('env')==='development'? err:{};
    const status=err.status || 500;
    
//respond to client
res.status(status).json({
    error:{
        message:error.message
    }
});
//respond to our self
console.log(err);
});


//start the server
const port=app.get('port') || 3000;
app.listen(port,()=>console.log(`server was running at port:${port}`));



// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//     });
    
//     }).listen(3000);