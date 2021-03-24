var firstName = "John";  // global varible

function fullName(){
    var lastName = "Smith"; // outer variable
    // nested fn or clouser function
    function join(){
        var middleName ="William";   // inner variable
        return firstName +" "+ middleName +" "+lastName;
    }
    return join();
}

console.log(fullName());

// closures is simple nested function which has acces to three different scope chain.
// 1. inner varibles  2. outer varaibles 3. global varible