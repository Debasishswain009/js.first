//immediately invoked function expresion
//Used to immediately form an function and call it immediately
//Sometimes the Global variables pollute the function ,Hence we opt to use IIFE in order to prevent that
(function chai(){
    console.log("HI function-1")
})();//incase of using multiple IIFE  we have to manually terminate the program using  ";"
//as the ide dont doit for us
//that too after each IIFE

(function chai2(num1,num2){
    console.log(`${num1} + ${num2} = ${num1+num2}\n`);
    console.log("welcome to function 2.")
})(1,2);

//ARROW FUNCTION IN IIFE
(() =>{
    console.log("ARROW FUNCTION....=1");
})();

((name) => {
    console.log(`${name} ,welcome to the ARROW FUNCTION2..........`);
})("KAnmha")