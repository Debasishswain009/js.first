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


//--------------function and object----------------------------------------
//using object as  parameters of another object
const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    //interpolation of string
}
 handleObject(user)
 //we can also use value in source object using latter function,but the value doesn't change in source object
 handleObject({
    username:"kanha",
    prices:19909
 })
//  console.log(user);


 //same using array as function parameter
 const array_1 = [1,2,3,432];
 function greet(anyArray){
    return anyArray[1];
 }
 console.log(greet(array_1));
 console.log(greet([100,200,340,509]));

 function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
/* In above function calculate cart price ....
(...)->Rest operator->This create Array of each passed value in parameter of function
val1 takes -> 1st element of array
val2 takes -> 2nd element of array
rest operator takes remaining elements..............
*/