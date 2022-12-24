var createTargetArray = function(nums, index) {
  const some = [];
  for (let i = 0; i < nums.length; i++) {
    some.splice(index[i], 0, nums[i]);
  }
  return some;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])