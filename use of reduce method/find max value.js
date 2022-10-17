

const nums = [1, 2, 3, 9, 8, 5, 6, 7];

const maxValue = (nums) => {
    return nums.reduce((prev, curr) => prev < curr ? curr : prev, 0);
}

console.log(maxValue(nums));