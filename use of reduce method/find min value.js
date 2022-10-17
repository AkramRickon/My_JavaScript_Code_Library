

const nums = [1, 2, 3, 9, 8, 5, 6, 7];

const minValue = (nums) => {
    return nums.reduce((prev, curr) => prev < curr ? prev : curr, nums[0])
}

console.log(minValue(nums));