// In javascrip function can be declared in following two ways:-
// 1. function decleration
// 2. function expression

// 1. function decleration
function showMessage(name){
    console.log("Hello , user ",name);
}

// 2. function expression
var greeting = function(name) {
    console.log("Hola ,",name);
    return name;
}

console.log(greeting);

// function cals
showMessage("Marry Smith");
greeting("John Smith");
