console.log("hello")

let a=9;
let b=9;
// a++; a=a+1
// b++; b=b+1;
// a+=1;
// console.log(a);

// let stu1 = {
//     name:"Rahul",
//     age:18
// }
// let stu2 = {
//     name:"amit",
//     age:20
// }
// let stu3 = {
//     name:"Rocky",
//     age:25
// }

// let students = [
//     {
//         name:"Rahul",
//         age:18
//     },
//      {
//         name:"amit",
//         age:20
//     },
//      {
//         name:"Rocky",
//         age:25
//     }
// ]
// let i ;
// for (i=0;i<students.length;i++){
//     // console.log(students[i].name);
//     console.log(students[i].age);
// }
// console.log(students);

// console.log(stu1.name);
// console.log(stu2.name);
// console.log(stu3.name);
// console.log(b);

// Function

function greet(){
    console.log("Hello! how are you");
}
// greet();

// Addition of two Numbers
function add(a,b){
    console.log(a+b);
}
add(5,4)
let arr = [23, 54, 64, 27, 39];
function findEven(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2===0){
            console.log(arr[i]);
        }
    }
}

// findEven(arr);

(function(){
    console.log("Hello students")
})();



