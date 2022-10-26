
// getter and setter allows us to  access the methods using dot notation (.)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        `Person is eating`;
    }
    // getter
    get personName() {
        return this.name;
    }
    //setter
    set personAge(age) {
        this.age = age;
    }
}

let rahim = new Person('Rahim', 25);
console.log(rahim.name);
rahim.age = 20;
console.log(rahim);



