//express is a javascript function 
const express = require('express');
const path = require('path');
//when you invoke that function it gives you an object
const app = express();
//This object will deliver multiple methods .one of those methods is get which is useful to route the webrequest to a paricular web page
//Takes in the route and a function as arguments

console.log(__dirname);
//console.log(__filename);
//console.log(path.join(__dirname),'../public'); //refers to public folder
 
const publicDir = path.join(__dirname,'../public');
console.log('The public directory is'+publicDir)
app.use(express.static(publicDir));

app.get('',function(req,res){
res.send('Hello Express!')
})

app.get('/Home',function(req,res){
res.send('<h1> Home page </h1>');
});

app.get('/About',function(req,res){
    res.send('This is the about page!');

});

app.get('/weather',function(req,res){
    res.send('You weather is perfect!');

});
app.listen(3000,function(){
    console.log('server is up on port 3000!');
});