const fiboSeries = (n) => {
    if (n <= 1) return [0, 1];
    const fibo = fiboSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
console.log(fiboSeries(5));
