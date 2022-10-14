
// example 01
const myObject = {
    name: "Akram Hossain",
    age: 23,
    roll: 2029,
    anotherObject: {
        name: "Akram Hossain Rickon",
        age: 23,
        roll: 1676,
        details: function () {
            console.log(this)
        },
        getName: function () {
            console.log(this.name);
        }
    }
}

myObject.anotherObject.details();
myObject.anotherObject.details.apply(myObject);

myObject.anotherObject.getName();
myObject.anotherObject.getName.apply(myObject);

// example 02
function printName(v1, v2) {
    console.log('Person name is :', this.first, this.last + `. He is a ${v1} and ${v2}.`);
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

printName.apply(person1, [v1, v2]);
printName.apply(person2, [v1, v3]);

//example 03

const rahim = {
    name: 'Abdur Rahim',
    dob: 1996,
    age: function (currentYear, msg) {
        console.log(msg, `You are ${currentYear - this.dob} years old`);
    }
}

const karim = {
    name: "Abdul Karim",
    dob: 1994,
}
let valuesOfKarim = Object.entries(karim);

rahim.age(2022, 'Hello Rahim!');
rahim.age.apply(karim, [2022, 'Hello Karim!']);

