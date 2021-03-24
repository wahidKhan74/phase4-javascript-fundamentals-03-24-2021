// we can declare varible in js by three ways
// 1. var keyword , 2. let keyword 3. const keyword

var x = 100;    // var give function level scope
console.log("X: ",x);

var x = 200;    // idealy it should be illegal syntax;
console.log("X: ",x);


let y = 50;    // let gives block level scope
console.log("Y :" ,y);

//let y = 200; /// Uncaught SyntaxError: Identifier 'y' has already been declared
// console.log("Y :" ,y);

const z = 100;  // not reasignable value
console.log("Z: ", z);

// re assign the value.
z = 2000;   // Uncaught TypeError: Assignment to constant variable.
console.log("Z: ", z);

