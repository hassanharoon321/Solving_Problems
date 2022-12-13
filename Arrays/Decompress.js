/**
 * @param {number[]} nums
 * @return {number[]}
 */

var decompressRLElist = function(nums) {
  const result = [];
  for (let i = 1; i < nums.length; i += 2) {
    result.push(...new Array(nums[i - 1]).fill(nums[i]));
  }
  return result;
};

decompressRLElist([1, 2, 3, 4])


// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

// Input: nums = [1,1,2,3]
// Output: [1,3,3]