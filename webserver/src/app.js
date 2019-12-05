//express is a javascript function 
const express = require('express');
const path = require('path');
const hbs = require('hbs');

//when you invoke that function it gives you an object
const app = express();
//This object will deliver multiple methods .one of those methods is get which is useful to route the webrequest to a paricular web page
//Takes in the route and a function as arguments

console.log(__dirname);
//console.log(__filename);
//console.log(path.join(__dirname),'../public'); //refers to public folder

//Define paths for express config -- __dirname corresponds to the current file's directory
const publicDir = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');
//set allows you to set a value for the express function

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

console.log('The public directory is'+publicDir)
app.use(express.static(publicDir));

app.get('',function(req,res){
    res.render('index',{
        title:'Weather App',
        name: 'Umashankar'
    })
});
app.get('/about',function(req,res){
    res.render('about',{
        title:'About Page',
        name:'umashankar'
    })
});
app.get('/home',function(req,res){
    res.render('home',{
         title:'home page',
         name:'umashankar'  
    });
});
app.get('/help',function(req,res){
    res.render('help',{
        title:'help page',
        message:'Helllo Viewer , Here is how use the weather app!!',
        name:'umashankar'
    })
});

app.get('',function(req,res){
res.send('Hello Express!')
});

// app.get('/Home',function(req,res){
// res.send('<h1> Home page </h1>');
// });

// app.get('/About',function(req,res){
//     res.send('This is the about page!');

// });

app.get('/weather',function(req,res){
    res.send('You weather is perfect!');

});
app.listen(3000,function(){
    console.log('server is up on port 3000!');
});