// JS is dynamically typed language ,

// So the type of variable can change during runtime

let x = 10;       // x is a Number
x = "Hello";      // now x is a String
x = true;         // now x is a Boolean

// WE ALSO DON'T HAVE A NEED TO SPECIFY THE DATA TYPE OF VARIABLE ,IT IS DECIDED AT THE RUN TIME......

let T = 10;       // x is a Number

//SYMBOL
const Id = Symbol('1234');
const anotherId = Symbol('1234');
//console.log(Id === anotherId);//both are same but the use of symbol make them unique


//const numberbig = 1234567665456545654322222222222234;
const numberbig = 1234567665456545654322222222222234n;//use of BIGINT

//NON PRIMITIVE DATATYPE
//ARRAY,FUNCTION,OBJECT
//Array
const namess= ["hitesh","kanah","kjhgf"];
//OBJECT    
let myObj = {
    name : "hitesh",
    age : 123,
    salary : 12345,
}

//FUNCTION
const myFunction = function(){
    console.log("hiii");
}




//-----------------------------------------------------------------------------------------------------//
//MEMORY
let myYoutubeName = "Hiteshchoudhary"
let anotherName = myYoutubeName
anotherName = "chaiAurCode"


let userOne = {
    email:"user@google.com",
    upi:"user@upi"
}
let userTwo = userOne;
userTwo.email = "KAnah@msndh.com";
console.log(userOne)
console.log(userTwo)
console.log(myYoutubeName)
console.log(anotherName)