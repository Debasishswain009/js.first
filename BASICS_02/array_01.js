//ARRAY
const myArr = [0,1,2,3,4,5,6,"harry","omm"];
const myHeroes = ["shaktiman","krish","goku"];
const myArr2 = new Array(1,2,3,4);
//console.log(myArr2[0])

//Arr methods

//myArr.push(6);
myArr.push(7);
myArr.pop();//remove last value in array
myArr.unshift(9);//add new element at index-0 shifting every other
myArr.shift();//remove first element of array
//console.log(myArr);
const newArr = myArr.join("    ");//arr->str ,with a separator
//console.log(newArr);

//slice and splice 

console.log("a", myArr);
const myn1 = myArr.slice(1,3);
console.log("b", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3);//removes the splice element also
console.log("c", myArr);
console.log(myn2);