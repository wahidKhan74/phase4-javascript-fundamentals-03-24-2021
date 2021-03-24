var add = function(num1,num2){
    return num1+num2;
}

var sub = function(num1,num2){
    return num1-num2;
}

var mul = function(num1,num2){
    return num1*num2;
}

var div = function(num1,num2){
    return num1/num2;
}

var avg = function(num1,num2){
    return (num1+num2)/2;
}

var calculator = function(num1,num2,callback){
    return callback(num1,num2);
}

console.log("Addtition 10+20 : ",calculator(10,20,add));
console.log("Substration 100-20 : ",calculator(100,20,sub));
console.log("Multiplication 100*20 : ",calculator(100,20,mul));
console.log("Division 100/20 : ",calculator(100,20,div));
console.log("Avg 100 & 20 : ",calculator(100,20,avg));