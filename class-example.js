class User{
    //properties
    id;
    name;
    age;

    // constructor
    constructor(id,name,age){
        this.id= id;
        this.name = name;
        this.age =age;
    }

    // method 
    greeting(){
        console.log("Hi, "+this.name);
    }

}

let user = new User(101,"John Smith",29);
user.greeting();
console.log(user);
