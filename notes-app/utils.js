const fs = require('fs');
const validator = require('validator');

function createFile(fileName)
{
    
    fs.open(fileName,'a+', function (err, file) 
    {
        if (err) throw err;
        console.log('Saved!');
     }
    );

}
console.log("Here is the file name for your notetaking appication-"+process.argv[2]);
fileName=process.argv[2];
if(validator.isAlpha(fileName)){
    createFile(fileName);
}
else{
    console.log('Invalid input');
}
module.exports=fs;
