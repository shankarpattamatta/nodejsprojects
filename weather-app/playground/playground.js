setTimeout(function(){
    console.log('Thinktime from global timeout function')
},1000);


//using call back functions in filters
const names =['shankar','phani','gupta']
const filteredArray = names.filter(function(name){

    return name.length>5;

});
console.log(filteredArray);


const getGeoCode= function(location,callBack){
   
   let  myCountryName='India';
    //Lets have a node function here 
    setTimeout(function(){
        myCountryName='Pakistan'
    },1000);
    return myCountryName;
};

console.log('from get geo code-'+getGeoCode('India'));

