
// callback function
function x(){
    console.log("I am called from inside a function ");
}

function y(callback){
    console.log(" Do somthing !");
    callback();
}

y(x);