const coding = ['js','cpp','java','python'];
// coding.forEach(function(val){
//     console.log(val);
// })
//same as above but using arrow function

// coding.forEach((val)=>(
//     console.log(val)
// ))

//same thing can be done by function
// function printMe(item){
//     console.log(item);
// }
//coding.forEach(printMe);//just pass the reference of object else give error

//foreach also have acess to other parameters like----
//  coding.forEach((item,index,arr)=>{
   // console.log(item,index,arr)
// })

//function inside array
const myArr3 =[
    {
        language:'javascript',
        filename:'js'
    },
    {
        language:'java',
        filename:'java'
    },
    {
        language:'python',
        filename:'py'
    }
]
myArr3.forEach((item)=>{
    console.log(item.language);
    console.log(item.filename);
    
})