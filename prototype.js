// All JavaScript objects inherit properties and methods from a prototype.

// Account constructor blueprint
function Account(id, name,balance,email){
    this.id= id;
    this.name = name;
    this.balance=balance;
    this.email = email;
    this.natinality= "Indian";
}

// If No Direct access to constructor definition, add new porperties or methds by Protoype property.
Account.prototype.nominies ="ABC";



var account1 = new Account(10001,"John Doe",70000,"joh.doe@gmail.com");
account1.natinality= "Indian";
account1.nominies ="Marry Doe";

console.log(account1.nominies);

var account2 = new Account(10001,"Tony Strak",70000,"joh.doe@gmail.com");
account2.nominies = "Olivia Stark";
console.log(account2.nominies);