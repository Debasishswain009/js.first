//const num = 100;

// const num1 = new Number(100.0998);
// console.log(num1);

// console.log(num1.toString().length);
// console.log(num1.toFixed(1));//1 digit after decimal
// console.log(num1.toPrecision(5));//round off to 5 significant digit
//const num2 = new Number(10009988778);
// console.log(num2.toLocaleString());//add commas for better reading(default-us convention)
// console.log(num2.toLocaleString('en-IN'));//indian convension

//*******************MATH********************** 
console.log(Math);
console.log(Math.min(1,8,33,22,0,-1));
console.log(Math.max(9,23333,4444444,2));

//RANDOM
console.log(Math.random());
  
let min = 10;
let max = 20;
console.log(Math.floor(Math.random()*(max - min +1) + min));//number between 10 and 20