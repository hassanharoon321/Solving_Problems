var searchMatrix = function(matrix, target) {
  let isNumber = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        console.log(matrix[i][j])
        isNumber = true;
      }
    }
  }
  return isNumber;
};

searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)