
// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, [11, 12, [13]]]], 14], 15];
const arr = [1, 2, 3, 4, 5, 6, 7, [8, 9, 10]];

const flatten = (inputArray) => {

    return inputArray.reduce((prev, curr) => prev.concat(curr), []);
}

console.log(flatten(arr));
