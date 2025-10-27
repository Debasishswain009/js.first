//for of loop
//for array
const arr = [1,2,3,4,5];
for (const num of arr) {
      //  console.log(num);
}
const greetings = "Hello world!";
for (const greet of greetings) {
    // console.log(`Each character of greet: ${greet}`);
}


//map
const map = new Map()//new Map()-->case sensitive
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF INDIA")
map.set('FR',"FRANCE")
//console.log(map);
//Applying for of loop on it
// for (const key of map) {
//     console.log(key)
// }//this type give array format so we do like bellow
for (const [key,value] of map) {
    console.log(key,"-:",value)
}
//object are not iterable using for of loop
const obj1 = {
    'game1':'spiderman',
    'game2':'nfs'
}
// for (const [key,value] of obj1) {
//     console.log(key,":-",value)
// }