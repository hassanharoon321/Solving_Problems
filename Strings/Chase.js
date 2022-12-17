var squareIsWhite = function(coordinates) {
  const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const some = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      some.push({
        "alpha": alphabets[j] + numbers[i],
        "numbers": Number(numbers[i]) + Number([j + 1])
      })
    }
  }
  const data = some.find((e) => e.alpha === coordinates)
  if (Number(data.numbers) % 2 === 0) {
    return false;
  } else {
    return true;
  }
};

squareIsWhite("a1")