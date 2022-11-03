
//Polymorphism 
// Here we will se method overrinding 
// কোন devired class / child class যদি parent class এর কোন মেথডকে modify করে তাহলে এ মেকানিজমকে বলা হয় Polymorphism   
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`Person is eating`);
    }
    play() {
        console.log(`Person is playing`);
    }
}

class Cricketer extends Person {
    constructor(name, age, type, nationality) {
        super(name, age);
        this.type = type;
        this.nationality = nationality;
    }
    //overriding paernt method
    //Interesting fact this play() method now in Cricketr prototype. And Persons play() method in the 
    //prototype chain of Cricketer. When we invoke play() method from object, Crieketr play() method will be returned

    play() {
        // we can also use Parent's method here
        super.play();
        console.log(`Person is playing cricket`)
    }
}

const tamim = new Cricketer('Tamim', 32, 'Batsman', 'Bangladesh');
const shakib = new Cricketer('Shakib', 35, 'All Rounder', 'Bangladesh')
console.log(shakib);
shakib.play();