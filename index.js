//String => 1
//Hash Table => 0
//Two pointers => 1
//Math => 1
//Arrays => 0

const sumOfOneDimArray = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i]
  }
  return nums
}

const out = sumOfOneDimArray([1, 2, 3, 4])
console.log(out);
