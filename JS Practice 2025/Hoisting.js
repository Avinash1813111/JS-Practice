// Hoisting is a phenomena where we can access function and variable before intializing it

console.log(a) //undefined
var a=10;
console.log(a); //10


console.log(b) // refrence error
console.log(c) // refrence error
let b=20;
const c=30;
console.log(b) // 20
console.log(c) //30

// Hoisting is diffrent in LET and CONST case

