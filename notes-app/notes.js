const fs = require('fs');
const listNotes = function(){

    let dataBuffer= loadNotes();
    //write the data to the output 
    console.log("Here is the list of the data stored in notes.json-");
    dataBuffer.forEach(function(element){
        console.log(element);
    });
        
    
}
const loadNotes=function()
{
    //load the json file 
    //convert to js array 
    //return it
    try{
    let dataBuffer= fs.readFileSync('notes.json').toString();
    return JSON.parse(dataBuffer);

    }
    catch(err)
    {
        console.log(err.toString());
        return [];
    }

}
const saveNotes = function(notes){
    try {
        //change the array type to json type and add it to file.
        let jsonData= JSON.stringify(notes);
        fs.writeFileSync('notes.json',jsonData);
    } 
    catch (error) {
        console.log("Error in the save notes function-"+error.toString());
    }
}
const addNote=function(title,body)
{
    try{
    //Read the entire array to notes
    let notes = loadNotes();
    //push the new data to the array
    //check for duplicity before adding the data 
    const duplicateArray = notes.filter(function(note){
        return (note.title===title);
    })

    //This returns as soon as it finds a duplicate ..however it returns the value not an array
    const duplicatevalue = notes.find(function(note){
        return note.title===title
    });


    if(duplicatevalue===undefined){
    notes.push({
        "title":title,
        "body":body
    });
    } 
    else{
        console.log("Title already exist!!")
    }
    const saveData=saveNotes(notes);
    console.log("Data Saved!!")
    }
    catch(err)
    {
        console.log(err.toString());
    }
}
const getNotes=function()
{
    try{
        let getDataBuffer = fs.readFileSync('./notes.json');
        return JSON.parse(getDataBuffer);

    }
    catch(err){
        console.log(err.toString());

    }
}
const removeNote = function(title)
{
    try{
        let getData= loadNotes();
        const titletoRemove = getData.filter(function(note){
            return note.title===title;
        })
        if(titletoRemove.length===0){
            console.log("Title not found!!")
        }
        else{
            //Remove the element of the title 
            getData.splice(getData.indexOf(titletoRemove),1);

        }
        saveNotes(getData);
    }
    catch(err){
        console.log(err.toString());
    }

}
const readNote = function(title){
    let dataBuffer = loadNotes();
    //find if it exixts 
    
    const value =dataBuffer.find(function(element){
        return element.title===title;
    });
    if(value!=undefined){
        
        console.log('Here is the elmenet:'+value.title +','+value.body);
    }
    else{
        console.log('Element mnot found!!');
    }

}
module.exports = {addNote,getNotes,removeNote,listNotes,readNote};