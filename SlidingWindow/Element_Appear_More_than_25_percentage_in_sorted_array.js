var findSpecialInteger = function(arr) {
  const ws = Math.floor(arr.length / 4);
  for (let i = 0; i < arr.length - ws; i++) {
    if (arr[i] === arr[i + ws]) {
      return arr[i];
    }
  }
  return -1;
};

findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]) //6
findSpecialInteger([1, 1]) //6

