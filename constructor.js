// constrctor : constructor is a special function with allows us to create dynamic object from same blueprint. 
// var account1 = { 
//     id: 1001,
//     name: "John Smith",
//     balance: 30000.23,
//     email: "john.smitjh@gmail.com"
// };

// Account blueprint
function Account(id, name,balance,email){
    this.id= id;
    this.name = name;
    this.balance=balance;
    this.email = email;
}

// create object of account type

var account1 = new Account(10001,"John Doe",70000,"joh.doe@gmail.com");
var account2 = new Account(10002,"Tony Stark",9880000,"tony.stark@gmail.com");
var account3 = new Account(10003,"Will Smith",87670000,"will.smith@gmail.com");

console.log(account1);
console.log(account2);
console.log(account3);
