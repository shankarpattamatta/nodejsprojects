//name='raviteja';
// const square =function(x)
// {
//     return x*x;

// }
// console.log(square(3));

// const square1 =(x) => {
//  return x*x
// }

// const square2 = (x) => x * x
// console.log("from square2-"+square2(3));

const event ={
name:"BirthdayParty",
getGuestList: function(){
    console.log('Guest List for '+this.name);
}
}
//lets try a arrow function - arrow functions have an issue with methods that have reference to this
// getGuestList: () => console.log('Guest List from arrow function '+ name);
// }
event.getGuestList();
