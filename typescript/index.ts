class Hero{
    
    // properties or fields
    id:number;
    name:string;
    power:any;
    city;

    // constructor
    constructor(id:number,name:string,power:any){
        this.id= id;
        this.name= name;
        this.power= power;
    }

    showInfo(){
        console.log("Hero is :"+this.name +", with power : "+this.power+ ", rank is : "+this.id);
    }
}

let hero = new Hero(1,"Super Man","lazer eye");
hero.showInfo();