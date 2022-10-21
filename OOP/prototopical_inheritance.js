//impliment inheritance using constructor function

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    constructor: Person,
    eat() {
        console.log(`Person is eating`);
    }
}

//creatng sub class of Person
function Cricketer(name, age, type, country) {

    // name,age এইগুলা already parent constructor এ define করা আছে ।। তাই নতুন করে আর লিখতে হবে না ।।
    // parent class  এর constructor কে কল করে দিলেই হবে ।। 
    // এইখানে this পাঠানো মানে Person constructor function এর সাথে Cricketer construction Fucntion কে   
    // associate করা বা যুক্ত করা ।। কারন Person এর আরো সাব ক্লাস থাকতে পারে ।। সো কার সাথে কে associated
    // সেটা বলে না দিলে javascript নিজ থেকে তা বুঝতে পারবে না ।। প্রোগ্রামও ঠিক মতো কাজ করবে না ।

    Person.call(this, name, age);
    this.type = type;
    this.country = country;
}

//inhert parents prototype
Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

let tamim = new Cricketer('Tamim', 34, 'Batsman', 'Bangladesh');
console.log(tamim);


