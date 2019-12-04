const location = require('./utils.js');

if(!process.argv[2]){
    console.log('No location details entered!, please try again!');

}

else
{
location.getGeoCode(process.argv[2],function(error,data){
    if(error)
    {
        return console.log(error);
    }
    
    location.getForecast(data.longitude,data.latitude,function(error,forecastdata){
        if(error)
        {
            return console.log(error);
        }
       
        console.log(data.location);
        console.log('Latitude:'+data.latitude +','+'Longitude:'+data.longitude);
        console.log(forecastdata);
    });
});
}