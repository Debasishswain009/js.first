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

//console.log("a", myArr);
const myn1 = myArr.slice(1,3);
// console.log("b", myArr);
// console.log(myn1);

const myn2 = myArr.splice(1,3);//removes the splice element also
// console.log("c", myArr);
// console.log(myn2);

const marvelHeroes = ["iron man","hulk","falcon"];
const dcHeroes = ["superman","batman","flash"];
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);//to get element of inner array
const allHeroes = marvelHeroes.concat(dcHeroes);//creates new array having concatboth arrray
//console.log(allHeroes);//not used much

const allMyHeroes = [...marvelHeroes, ...dcHeroes];
//console.log(allMyHeroes);//more prefered as can be used for multiple arrays

const oneArray = [1,2,3,4,[9,8,7,[90,87]]];
const anotherArray = oneArray.flat(3);//or simply pass infinity as arg so it take it as auto
//console.log(anotherArray);


// console.log(Array.isArray("hitesh"));//checks if arfray or not
// console.log(Array.from("hitesh"));//convert it

// console.log(Array.from({name : "kanha"}));//we have specify betn keyword and value to make string of

let score1 = 123;
let sccore2 = 654;
let score3 = 987;

console.log(Array.of(score1,sccore2,score3));//variable  to array
