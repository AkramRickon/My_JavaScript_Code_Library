

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`Person is eating`);
    }
}

class Cricketer extends Person {
    constructor(name, age, type, nationality) {
        super(name, age);
        this.type = type;
        this.nationality = nationality;
    }
}

const tamim = new Cricketer('Tamim', 32, 'Batsman', 'Bangladesh');
const shakib = new Cricketer('Shakib', 35, 'All Rounder', 'Bangladesh')
console.log(shakib);