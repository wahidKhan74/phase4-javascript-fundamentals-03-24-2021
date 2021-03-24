// function  :- an action

// function decleration syntax
function functionName(parameters) {
    // function body.
}

// zero parameter function
function showMessage(){
    console.log("Hello, Welcome to JavaScript !");
}

// one parameter
function greeting(name){
    console.log("Hello, Today is a wonderfull day , ",name)
}

// multi parameter
function fetchContent(name,age,gender){
    console.log("Hello, user "+name +", you have a age "+age +" , with gender "+gender)
}


// function calls
showMessage();

greeting("John Smith");


fetchContent("Jennei Smith",29,"female")