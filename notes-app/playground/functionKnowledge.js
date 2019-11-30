const exfs= require('./externalfs');
function normalfuncion()
{
    console.log('This is just a normal function');

}

normalfuncion();

function exfunccaller()
{
    try{

        console.log("calling external function inside caller function");
        
        exfs.externalFunction();
    }
    catch(err)
    {
        console.log(err.toString());
    }
}
exfunccaller();


