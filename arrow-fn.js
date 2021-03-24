// zero parm fn
let showMessage =  () => {
    console.log("Hello, Welcome to JavaScript !");
}

// one parameter fn
let greeting = (name) => {
    console.log("Hello, Today is a wonderfull day , ",name)
}

// iife with arrow fn
(()=>{
    console.log("I am a Arrow IIFE ..");
})();


showMessage();
greeting("John Smith");