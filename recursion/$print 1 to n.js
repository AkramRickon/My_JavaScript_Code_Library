

const printNums = (n) => {
    if (n < 1) return;
    printNums(n - 1);
    console.log(n);
}
printNums(10);

