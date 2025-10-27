const myobj = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    java:'java by cwh'
}
for (const key in myobj) {
   // console.log(key)//keys
  // console.log(myobj[key])//values
  //console.log(`${key} -: ${myobj[key]}`)
}
//for in for ARRAY
const myArr = ['harry','hitesh','harkirat','shradha'];
for (const key in myArr) {
 // console.log(key)------> give array keys or what we call index
 console.log(`${key}-:${myArr[key]}`)
}
// MAPS are not iterable using For in loops
