class Bird {
    //private property are declared using # and must be declared outside the constructor first
    //private property and methods can not be accessed or modified directly 
    // to access or modify private property we have to use public methods written inside that class
    //Both functions will work that has shown bellow 
    #legs;
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.#legs = 2;

        this.eat = function () {
            return `Peck Peck Peck`;
        }
        
        this.changeLegs = function () {
            this.#legs = 4;
        }
    }

    describe() {
        return `Bird name ${this.name}. Bird color ${this.color}`;
    }

    haveLegs() {
        return this.#legs;
    }

    // changeLegs = function () {
    //     this.#legs = 4;
    // }

}

let duck = new Bird('Pati Hash', 'Brown');
duck.changeLegs();
console.log(duck.haveLegs());


//another example
class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
    area() {
        return this.#height * this.#width;
    }
}

let field = new Rectangle(30, 40)
console.log(field.area());



// private methods
class ClassWithPrivateMethod {
    #privateMethod() {
        return 'hello world';
    }

    getPrivateMessage() {
        return this.#privateMethod();
    }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());