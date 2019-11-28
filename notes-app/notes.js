const fs = require('fs');

function loadNotes(){

    try{
         let dataBuffer = fs.readFileSync('notes.json')
            console.log("The value of databuffer before converting it to String is :"+dataBuffer);
         dataBuffer=dataBuffer.toString();
         console.log('Helloooooooooooo');
         console.log("The value of databuffer after parsing  it to String is :"+JSON.parse(dataBuffer));
         console.log('Helloooooooooooo1');
         return  JSON.parse(dataBuffer); //converts JSON to JS Object
    }
    catch (e)
    {
      console.log('Git in to exception'+e.toString());
        return []; //return empty array in case if the file is absent;
    }

}
function saveNotes(jsonArray){
    try{
 const jsonString = JSON.stringify(jsonArray);
 console.log("Appending the added object")
  fs.writeFileSync('notes.json',jsonString);
  
    }
    catch(e){
        console.log(e.toString());
    }
}
function addNote(title, body)
{
    //load the notes from the file and add it to array 
    let jsonArray=loadNotes();
    jsonArray.push({
        "title":title,
        "body":body

    });
    //save the data to the file 
    saveNotes(jsonArray);

}
module.exports={
    addNote:addNote,
    
}