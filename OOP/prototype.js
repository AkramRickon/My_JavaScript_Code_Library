
// Lets create a  object
let person = {};

person.name = 'Tamin';
person.age = 35;

person.eat = function () {
    console.log(`Person is eating`);
}

person.sleep = function () {
    console.log(`Person is sleeping`);
}

//Now we neeed to create more than one person
// so we will use constructor function for this 
//using Functional Instantiation pattern

function Person(name, age) {
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = function () {
        console.log(`Person is eating`);
    }
    person.sleep = function () {
        console.log(`Person is sleeping`);
    }
    return person;
}

let shakib = Person('Shakib', 35);
let tamim = Person('Tamim', 34);
console.log(shakib);

// eat() & sleep() এই  method গুলো হচ্ছে  common method।।
// অর্থাৎ  Person এর যতগুলো instance  তৈরি হবে প্রত্যেকটি instance এর মধ্যেই এই মেথডগুলো নতুন করে তৈরি হবে 
// এবং এই মেথডগুলো কিন্তু কম্পিউটারে জায়গা নেয়।।
// তো এই কোড ডুলিকেসন এর জন্য কম্পিউটারের মেমরি ওয়েস্ট হবে ।।
//তার বার বার অবজেক্ট instance  তৈরি করার সময় এই মেথডগুলো নতুন করে তৈরি করার প্রয়োজন নেই।।
// আমরা একটা সেয়ার্ড অবজেক্ট তৈরি করতে পারি যেখানে এই কমন মেথডগুলো থাকবে
// এবং এই  সেয়ার্ড অবজেক্ট এর রেফারেন্স ইউজ করে আমরা Person অবজেক্টে এই মেথড গুলোকে ইউজ করতে পারবো।।
//  this pattern is called Functional Instantiation with Shared Methods।।

const personMethods = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`);
    }
}

function Person1(name, age) {
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = personMethods.eat;
    person.sleep = personMethods.sleep;

    return person;
}

let mushfiq = Person1('Mushfiq', 34);
console.log(mushfiq);

//কিন্তু এইখানেও ঝামেলা আছে ।। শেয়ার্ড অব্জেক্টে নতুন কোন মেথডে এড করলে সেটার রেফারেন্স Person এও এড করতে হচ্ছে।। 
//অর্থাৎ ২বারে কাজটা করা লাগতেছে ।।  যেটা standard না ।। 
//এই কাজটা একবারেই কর সম্ভব ।। এর জন্য আমাদের Object.create() method use করতে হবে।।
// Object.create(obejct) method এর ভিতর যেই অবজেক্টটাকে পাস করা হয় সেই অবজেক্টটাকে ইউজ করে নতুন একটা অবজেক্ট তৈরি করে ।।
//এবং ঐ  অবজেক্টটাকে নতুন তৈরি হওয়া অবজেক্টের prototype এ সেট করে ।। 

function Person2(name, age) {
    let person = Object.create(personMethods);

    person.name = name;
    person.age = age;

    return person;
}

let riyad = Person2('Riyad', 37);
console.log(riyad);

// এখানেও ইম্প্রভমেন্টের সুযোগ আছে ।। 
//আমাদের কে এই Person function এর বাহিরেও আলাদা একটা অবজেক্ট ইউজ করতে হচ্ছে  বা মেইন্টেইনা করতে হচ্ছে ।।
//এই কাজটা আমরা prototype use করে করতে পারি ।। তখন আমাদের আর এক্সট্রা অবজেক্ট মেইন্টেইন করতে হবে না ।। 
//আর আমরা জানি প্রতেকটা ফাংশনের মধ্যে prototype নাকে একটা property থাকে ।। আর ঐ constructor function 
// থেকে যে অবজেক্ট তৈরি করা হয় সেই অবজেক্ট ঐ  constructor function এর prototype কে ইনহেরিট করে নেয়।। 

function Person3(name, age) {
    //আমরা যদি নিচের লাইনটা না লিখি তাহলে কি হবে ?
    //1. আমাদের কে অবজেক্ট literal use করে একটা অবজেক্ট তৈরি করতে হবে ।। যেটা মাদার অবজেক্ট এর prototype
    //কে ইনেরিট করবে ।। কিন্তু আমরা চাই আমাদের construction function এর prototype কে inherit করুক।।
    // let person={};
    //2. সে জন্য আমাদের Object.create() method use করতে হবে।। এবং যে অবজেক্টটা তৈরি হবে সেই অবজেক্টটের 
    //prototype এর মধ্যে আমাদের construction function এর prototype কে সেট করে  সেট করে দিবে ।।
    // this pattern is called Prototypal Instantiation

    let person = Object.create(Person3.prototype);

    person.name = name;
    person.age = age;
    return person;
}

Person3.prototype = {
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`);
    }
}

let mash = Person3('Mashrafee', 40);
console.log(mash)

// still এখন পর্যন্ত constructor function নিয়ে কাজ করতে অনেক কোড লিখা লাগতেছে ।। Javascript এতোটাও খারাপ 
// না ।। Javascript আমাদের built-in কিছু একটা provide করে যেটা দিয়ে আমরা সহজে object instance তৈরি করতে পারি।।
// আমরা new keyword দিয়ে আরো সহজে  অবজেক্ট instacne তৈরি  করতে পারি ।।

function Person4(name, age) {
    //এই ২ লাইন এখন আর লিখতে হবে না 
    // let person = Object.create(personMethods);
    this.name = name;
    this.age = age;

    // return person;
}
Person4.prototype = {
    constructor: Person4,
    eat() {
        console.log(`Person is eating`);
    },
    sleep() {
        console.log(`Person is sleeping`);
    },
    play() {
        console.log(`Person is playing`);
    }
}

let liton = new Person4('Liton', 26);
console.log(liton)

//Impliment class
class newPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`Person is eating`);
    }
    sleep() {
        console.log(`Person is sleeping`);
    }
    play() {
        console.log(`Person is playing`);
    }
}

let afif = new newPerson('Afif', 24);
console.log(afif);