//var c = 300
let a = 300
if (true) {
    let a = 10//block variable
    const b = 20//block variable
    var c = 30//global variable
    console.log("INNER: ", a);//10
}



// console.log(a);//300
// console.log(b);//can't get as it is block scoped
// console.log(c);//global


function one(){
    const username = "hitesh";//block scope
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//can't be accesed 

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//can be accesed before declaration

function addone(num){
    return num + 1
}



addTwo(5)//due to hoistiong can't be used before declaration
//here as we have used variable to store the functon we can't use it before ddclaration
const addTwo = function(num){
    return num + 2
}