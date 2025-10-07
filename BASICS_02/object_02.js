//singleton
//object.create//--will talk later(Constructor method)
// object literals
const mySym = Symbol("key1")//have to declare symbol before using it in object
const jsUser ={
    name: "Hitesh",
    "full name": "hitesh choudhary",
    [mySym]: "myKey-1",
    age:18,
    location: "paradeep",
    email: "HiteshChoudhary@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday","friday"]
}
// console.log(jsUser.email)//not recommended as it has many drawbacks
// console.log(jsUser["email"])
// console.log(jsUser["full name"])//full name can only be used using [] form
// console.log(jsUser[mySym]);//same for symbol cases
// console.log(typeof(jsUser.mySym));
// console.log(typeof(jsUser[mySym]));

jsUser.email = "hitesh@chatgpt.com";//chabges value in object
//Object.freeze(jsUser);//now further no changes can occur
jsUser.email = "hitesh@mycrosoft.com";//doesn't give error but won't change a thing
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("hii js user");
}
jsUser.greetingsTwo = function(){
    console.log(`hii ${this.name}`);//'this' is a reference to the user
}
console.log(jsUser.greetings)//returns function referrene
console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())