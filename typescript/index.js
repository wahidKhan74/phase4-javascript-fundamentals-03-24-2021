var Hero = /** @class */ (function () {
    // constructor
    function Hero(id, name, power) {
        this.id = id;
        this.name = name;
        this.power = power;
    }
    Hero.prototype.showInfo = function () {
        console.log("Hero is :" + this.name + ", with power : " + this.power + ", rank is : " + this.id);
    };
    return Hero;
}());
var hero = new Hero(1, "Super Man", "lazer eye");
hero.showInfo();
