// this Inside Arrow Function
//arrow fuction doesnt have its own this 
//inside the arrow function, this refers to the parent scope.
//arrow function is used inside object method or as a callback function as it doesnt modify/change this.

const arrowFunction = () => {
    console.log(this);
}
arrowFunction();

//***********/
const teacher = {
    name: "MA Mojid",
    age: 50,
    major: "Mathematics",
    details: function () {

        const introduction = () => {
            console.log(this);
            console.log(`My name is ${this.name}. I am your ${this.major} teacher.`);
        }
        introduction();
    }
}
teacher.details();