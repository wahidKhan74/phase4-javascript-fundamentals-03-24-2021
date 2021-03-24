var age  = prompt("Please, Enter Your age ! ");

function ageValidator(){
    if(age>18){
        console.log("You have a valid age !")
        console.log("Welcome, to facebook !");
    } else{
        console.log("Your age is not valid to access facebook!");
    }
}

ageValidator();