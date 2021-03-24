(function(){
   console.log("I am IIFE ...");
})();

// self executing anonymous function.

(function(){
    var username ="John Smith";
    console.log(username);
    function display(name){
        console.log(" I have user as ",name);
    }
    display(username)
})();