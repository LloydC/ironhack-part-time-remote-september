class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health= this.health - damage;
    }
}

class Saxon extends Soldier {
    receiveDamage(damage) {
        return genericReceiveDamage(this.health, damage, "A Saxon")
    }
}

const testSaxon = new Saxon(10, 10);

console.log('testSaxon', testSaxon);
console.log(testSaxon.receiveDamage(10))

function genericReceiveDamage(health, damage, prefix) {
    health -= damage;

    if(health > 0){
        return `${prefix} has received ${damage} points of damage`
    }
    return `${prefix} has died in act of combat`;
}