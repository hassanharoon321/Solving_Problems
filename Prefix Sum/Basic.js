// Input: nums = [1,2,3,4]
//Output: [1,3,6,10]
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// pechla wala or agay wala element pakkarna hai

const sumOfOneDimArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
}

const out = sumOfOneDimArray([1, 2, 3, 4]);
console.log(out);

