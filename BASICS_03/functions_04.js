// console.log("k")
// console.log("a")
// console.log("n")
// console.log("h")
// console.log("a")

function name(){
    console.log("k")
    console.log("a")
    console.log("n")
    console.log("h")
    console.log("a")
 }
//  name()

function addTwoNumbers(num1,num2){
    let value = num1 + num2;
    return value;
    //code below return is unreachable inside function
}
// const value = console.log(addTwoNumbers(3,4));
// console.log(addTwoNumbers(3,4));
// console.log(value);//here value is function scope

function addTwoNumbers2(num1,num2){
    return num1 + num2;
    //code below return is unreachable inside function
}
// console.log(addTwoNumbers(3,4));
// const value = console.log(addTwoNumbers(3,4));//block scoped variable


function loginMessage(name = "guest"){
    if(!name){
        console.log("PLease enter your name!!!!!!")
        return;//this ensure that if your name is not entered then it don'trun later block and exits function
    }
    return `${name} is your name`
}
// console.log(loginMessage())

function loginMessage2(name = "guest"){
    if(!name){
        console.log(`${name} enter your name!!!!!!`)
        return;//this ensure that if your name is not entered then it don'trun later block and exits function
    }
    return `${name} is your name`
}
// console.log(loginMessage2())
// console.log(loginMessage2("kanah"))


const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    //interpolation of string
}
 handleObject(user)