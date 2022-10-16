
const names = ['Shakib', 'Murad', 'Pabel', 'Rakib', 'Mim'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printValues = (arr, n) => {
    if (n < 0) return;
    console.log(arr[n]);
    printValues(arr, n - 1);
    console.log(arr[n]);
}

console.log(printValues(names, names.length - 1));
console.log(printValues(numbers, numbers.length - 1));





