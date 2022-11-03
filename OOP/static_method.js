
// Static methods can not be accessed from class instance/object
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        `Person is eating`;
    }
    static isEqual(cricketr1, cricketr2) {
        return cricketr1.age === cricketr2.age;
        //this person class কেই return করবে
        //static method এর ভিতর this মানেই হলো এই Person class
        // return this;
    }

}

let rahim = new Person('Rahim', 25);
let tamim = new Person('Tamim', 25);

console.log(Person.isEqual(rahim, tamim));

