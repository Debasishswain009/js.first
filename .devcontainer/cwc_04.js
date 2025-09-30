//type conversion between datatypes

// let num = 33;
//console.log(typeof num);
//console.log(typeof(num));

// let name = "33";
// let nameInInt = Number(name);
//console.log(typeof(nameInInt));
//console.log(nameInInt);


// let name2 = 'kanha';
// let name2ToBoolean = Boolean(name2);
//console.log(typeof(name2ToBoolean));
//console.log(name2ToBoolean);---->>//true

// let tr = 1;
// let trToBoolean = Boolean(tr);
//console.log(trToBoolean);------->>//true
// 1-->>true,0-->>false

// let empty = null;
// let emptyToBoolean = Boolean(empty);
//console.log(emptyToBoolean)---->>//false

// let udfd;
// let udfdToBoolean = Boolean(udfd);
//console.log(udfdToBoolean);---->>//false

// undefined<Boolean>-->>false
//null<Boolean>-------->>false
//string<Boolean>------>>true
//1<Boolean>----------->>true   
//0<boolean>---------->>false

let name = "Harry";
let nameToBoolean = Boolean(name);
console.log(nameToBoolean);

let nameToNum = Number(name);
console.log(nameToNum);

let num;
let numToNum = Number(num);
console.log(numToNum);

let nam = null;
let namToNum = Number(nam);
console.log(namToNum);

// null<number> -------->> 0
// undefined<number> --->> NaN
//string<number> ------->> NaN