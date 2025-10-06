//----------------------DATE AND MATH-------------------------------
let myDate = new Date();//current date
// console.log(myDate);//not readable
// console.log(myDate.toDateString());// readable no time
// console.log(myDate.toJSON());// readable
// console.log(myDate.toLocaleString());// readable can be customized
// console.log(myDate.toString());// readable
// console.log(myDate.toTimeString());// readable

console.log(typeof myDate);//object
//to create an specific date
let spDate = new Date(2025,0,14,4,30);
let sp1Date = new Date("2025-01-14");
// console.log(spDate);
// console.log(sp1Date);

let myTimeStamp = Date.now();
console.log(myTimeStamp);//in milliseconds
console.log(sp1Date.getTime());//date-time conversion
//-----------costumization using .localeString()
