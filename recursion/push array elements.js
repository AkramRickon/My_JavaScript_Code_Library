

// example 01

function countUp(n) {
    if (n > 5) return [];
    const arr = countUp(n + 1);
    arr.push(n);
    return arr;
}

console.log(countUp(1));

// example 02

function countDown(n) {
    if (n < 1) return [];
    const arr = countDown(n - 1);
    arr.push(n);
    return arr;
}

console.log(countDown(5))

