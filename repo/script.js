function Gracz(name, speed, power){
    this.name = name,
    this.speed = speed,
    this.power = power,
    this.pokazGracz = function(){
        return `Imie: ${this.name}, Speed: ${this.speed}, Power: ${this.power}`
    }
}

const tom = new Gracz('adam', 87, 55);
console.log(tom.pokazGracz())

document.getElementById("test").innerHTML = tom.pokazGracz();

class Person {
    constructor(name, surname){
this.name = name;
this.surname = surname;
    }
}