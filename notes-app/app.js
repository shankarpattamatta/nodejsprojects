const cf = require('./utils.js');
const yargs= require('yargs')
const fs = require('fs');

console.log("Args from process "+process.argv);
console.log("Args from yargs"+yargs.argv);
//add remove  read and List notes 
yargs.command({
 describe:"Used to add notes",
 command:"add",
 builder:{
   // build  the arguments here 
   title:{
    describe: "This is the title of the notes",
    type: "String",
    demandOption: true
   },
   body:{
    describe: "This is the body of the notes",
    type: String,
    demandOption:true

   }
 },
 handler:function(argv){
    //do whaterver you want to do with the arguments
    console.log('Title:'+ argv.title);
    console.log('body-'+argv.body)
 }
})



yargs.command({
    command: 'remove',
    describe: 'remove a  Note to the notes application',
    handler: function()
    {
        console.log('removing a  note');
    }
})

yargs.command({
command: 'list',
describe: 'List all the Items',
handler: function()
{
    console.log('This is the list function');
}
})

yargs.command({
    command:'read',
    describe: 'Read the list of items',
    handler: function(){
        console.log('This is the read function')
    }
})
console.log(yargs.argv);
/*
console.log("Enter the name of the notes application");
 const title =process.argv[2];
 console.log("Enter 1 to add to the notes and 2 to remove from notes ");
 if(process.argv[3]===1)
 {

     addNotes();

 }
 else if (process.argv[3]===0)
 {
     removeNotes();

 }
 else{
     console.log("Invalid Input");

 }

 function addNotes(data){
    fs.appendFileSync(sampletext,data);

 }


 function removeNotes(data)
 {

 }
 */