const myObject = {
    name: "Akram Rickon",
    age: 23,
    anotherObject: {
        name: "Akram Hossain rickon",
        age: 23,
        details: function () {
            console.log(this);
        },
        getName: function () {
            console.log('Person name is ' + this.name);
        }
    }
}

myObject.anotherObject.details();
let detailsFunction = myObject.anotherObject.details.bind(myObject);
detailsFunction();

myObject.anotherObject.getName();
let getNameFunction = myObject.anotherObject.getName.bind(myObject);
getNameFunction();

// example 02
function printName(v1, v2) {
    console.log(`Person name is : ${this.first} ${this.last}. He is a ${v1} and a ${v2}`);
}

const person1 = {
    first: 'Akram',
    last: 'Khan'
}

const person2 = {
    first: "Masud",
    last: 'Rana'
}

let v1 = 'Good person';
let v2 = 'Handsome person';
let v3 = 'Lazy person'

let printFunction = printName.bind(person1, v1, v3);
printFunction();
printFunction = printName.bind(person2, v1, v2);
printFunction();

//example 03
function CalculateAge(msg, currentYear) {
    console.log(`${msg} ${this.name} is ${currentYear - this.dob} years old`);
}

const rahim = {
    name: "Abdul Rahim",
    dob: 1996
}

const karim = {
    name: 'Abdul Karim',
    dob: 1994
}

const ageCalculator = CalculateAge.bind(rahim);
ageCalculator('Hello Murad!', 2022);
ageCalculator('Hello Kauser!', 2020);
ageCalculator('Hello Rana!', 2025);