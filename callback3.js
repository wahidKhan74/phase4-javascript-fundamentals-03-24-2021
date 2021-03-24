// Calculator example
// Calculator without callback.
// function calculator(num1,num2,calcType){
//     if(calcType === "add"){
//         return  num1+num2;
//     } else  if(calcType === "sub"){
//         return  num1-num2;
//     }  else if(calcType === "mul"){
//         return  num1*num2;
//     } else  if(calcType === "div"){
//         return  num1/num2;
//     }
// }

// console.log("Addition : 10 + 20 : ",calculator(10,20,"add"));
// console.log("Substraction : 100 - 20 : ",calculator(100,20,"sub"));

function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num1/num2;
}

function avg(num1,num2){
    return (num1+num2)/2;
}

function calculator(num1,num2,callback){
    return callback(num1,num2);
}

console.log("Addtition 10+20 : ",calculator(10,20,add));
console.log("Substration 100-20 : ",calculator(100,20,sub));
console.log("Multiplication 100*20 : ",calculator(100,20,mul));
console.log("Division 100/20 : ",calculator(100,20,div));
console.log("Avg 100 & 20 : ",calculator(100,20,avg));
