const cf = require('./utils.js');
const yargs= require('yargs')
const fs = require('fs');
const notes = require("./notes.js");

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
    console.log("Im in handler");
    notes.addNote(argv.title,argv.body);
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