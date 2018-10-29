//DECLARING GLOBAL VARIABLES//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//MIDDLEWARE//
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set(express.static('public'));

//ROUTING//
app.get('/',function(req,res){
    res.render('home');
});
app.get('/profile', function(req,res){
    res.send('This is the Profile Page - Create profile.ejs and render');
});
app.get('/profile/:id',function(req,res){
    var id = req.params.id;
    res.send('This is the profile page of ' + id);
});


//LISTENING TO SERVER//
app.listen(process.env.PORT ||3000,function(){
    console.log('Server Listening on Port 3000');
});