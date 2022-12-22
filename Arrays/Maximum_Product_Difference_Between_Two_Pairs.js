var maxProductDifference = function(nums) {
  const numsSorted = nums.sort((a, b) => a - b);
  const smallMultiply = numsSorted[0] * numsSorted[1]
  const largeMultiply = numsSorted[nums.length - 1] * numsSorted[nums.length - 2]
  return largeMultiply - smallMultiply;
};


maxProductDifference([5, 6, 2, 7, 4])