//DECLARING GLOBAL VARIABLES//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//MIDDLEWARE//
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set(express.static('public'));

//ROUTING//


//LISTENING TO SERVER//
app.listen(process.env.PORT ||3000,function(){
    console.log('Server Listening on Port 3000');
});