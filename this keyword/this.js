
// 1.this in global context refers to global object

let x = this;
console.log(x);

// 2.this inside a function  refers to global object in non-strict mode

function root() {
    console.log(this);
}
root();

//3.this inside nested function or scope refers to window object

function parent() {
    function child() {
        console.log(this);
    }
    child();
}
parent();

// 4.this inside object method refers to the object it associated with

const person = {
    firstName: 'Masud',
    lastName: 'Rana',
    fullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}
person.fullName();

//5.this inside inner object refers to closed object 

const object = {
    firstName: 'Masud',
    lastName: 'Rana',
    anotherObject: {
        firstName: 'Akram',
        lastName: 'Rickon',
        fullName: function () {
            console.log(this.firstName + ' ' + this.lastName);
        }
    }
}
object.anotherObject.fullName();

// 6.inside an inner function (inside a method) this refers to global object

const player = {
    firstName: 'Tamim',
    lastName: 'Iqbal',
    fullName: function () {
        console.log(this.firstName + ' ' + this.lastName);

        function innerFunction() {
            console.log('This this is from inner function from a method ', this);
        }
        innerFunction();
    }
}

player.fullName();

// 7.this inside constructor function this refers to the object that is created by  constructor function

function Car(model, brand) {
    this.model = model;
    this.brand = brand;
    console.log(this);
}

let newCar = new Car(2022, 'BMW');
