
//example 01 
const person = {
    firstName: 'Masud',
    lastName: 'Rana',
    fullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}
person.fullName();

//example 02
let printPlayerNameFunction = (obj) => {
    obj.playerName = function () {
        console.log('My name is :', this.name);
    }
}

const shakib = {
    name: 'Shakib',
    age: 35
}
const tamim = {
    name: "Tamim",
    age: 34
}
printPlayerNameFunction(shakib);
printPlayerNameFunction(tamim);
shakib.playerName();
tamim.playerName();

//example 03

function Cricketer(name, type) {
    return {
        name: name,
        type: type,
        describe: function () {
            console.log('Cricketer name :', this.name);
        },
        details: {
            team: 'HP',
            coach: 'Nannu',
            describe: function () {
                console.log('Coach :', this.coach, 'Team :', this.team)
            }
        }
    }
}

const mahedi = Cricketer('Mahedi', 'Allrounder');
mahedi.describe();
const emon = Cricketer('Emon', 'Opening Batsman');
emon.details.describe();