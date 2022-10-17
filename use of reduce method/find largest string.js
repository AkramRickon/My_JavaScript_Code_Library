
const persons = ['Shakib', 'Mahmudullah', 'Afif', 'Rickon', 'Sushmita'];

const largestString = (persons) => {
    return persons.reduce((prev, curr) => curr.length > prev.length ? curr : prev, "");
}

console.log(largestString(persons));