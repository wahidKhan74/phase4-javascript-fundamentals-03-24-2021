// callback : callback is a function that argument pass to another function 
// A callback is simple a function that is passed as an argument 
// to another function  in a hope it will get executed at a certain time.
function functionOne(x) {
    console.log(x);
}

function functionTwo(y,callback){
    console.log(callback);
    
    callback(y);
}

// call a function we passsed another funcion body as argument.
functionTwo(100,functionOne)