//user account object
// var account = new Object({});
var account = { 
    id: 1001,
    name: "John Smith",
    balance: 30000.23,
    email: "john.smitjh@gmail.com"
};

// show balance
function showBalance(accountId) {
    if(accountId == account.id){
        console.log("Account User, "+account.name +" , with id "+account.id +" has balance "+account.balance)
    } else{
        console.log("Account does not exist !");
    }
}
    
var res = showBalance(1001);
console.log(res);


// deposit amount
function depositAmount(accountId, amount){
    if(accountId == account.id){
        account.balance = account.balance + amount;
        console.log("Account User, "+account.name +" , with id "+account.id +" has balance "+account.balance)
        return account.balance;
    } else{
        console.log("Account does not exist !");
        return -1;
    }
}
var response = depositAmount(1001,10000);
console.log(response);

// withdraw amount
// fix deposit -> fix year , depositAmt, 
