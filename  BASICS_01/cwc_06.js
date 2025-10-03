//----------------------STRING----------------------------------
const name = 'hitesh'
const lname = 'choudhary'
//Comcatination
//outdated
// console.log(name + lname + "is a student");

console.log(`Hi my name is ${name} and my lastname is ${lname}...........`)//easy to see 

//another way to make a string
const gamename = new String("Hiteshh_ss        ")
console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.trim())//remove all trailling spaces
console.log(gamename.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));