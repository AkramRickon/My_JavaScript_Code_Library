
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

myObject.anotherObject.details.call(myObject);
myObject.anotherObject.getName();
myObject.anotherObject.getName.call(myObject);

// example 02
function personName() {
    console.log('Person Name is :', this.first + ' ' + this.last);
}

const person1 = {
    first: 'Akram',
    last: 'Khan'
}

const person2 = {
    first: "Masud",
    last: 'Rana'
}

personName.call(person1);
personName.call(person2);

// example 03
const karim = {
    name: "Abdul Karim",
    dob: 1996,
    age: function (msg, CurrentYear) {
        console.log(msg + ' ' + `You are ${CurrentYear - this.dob} years old`);
    }
}

const rahim = {
    name: "Abdul Rahim",
    dob: 1994
}

karim.age('Hello Karim!', 2022);
karim.age.call(rahim, "Hello Rahim!", 2018);

