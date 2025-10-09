
//-----------------deconstruction of an object-----------------------
const employee = {
    name: "Debasish swain",
    age: 18,
    salary:18888888888,
    employee_identity:"kanha0666"
}
// employee.employee_identity
const {employee_identity:id} = employee;
// console.log(employee_identity)
console.log(id);

//json Api
/*
json api are key to certain s/w that do the work for us
json api can be in format of object or Array containing multiple objects.
*/
// {
//     "name":"ksnhs",
//     "age":18,
//     "work":study
// }

[
    {},
    {},
    {}
]