/**
 * @param {string} s
 * @return {string[]}
 */
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var cellsInRange = function(s) {
  const letters = [];
  const indOne = alphabet.findIndex((e) => e === s[0]);
  const indTwo = alphabet.findIndex((e) => e === s[s.length - 2]);

  for (let i = indOne; i <= indTwo; i++) {
    for (let j = s[1]; j <= s[s.length - 1]; j++) {
      letters.push(alphabet[i] + j)
    }
  }
  return letters;
};

cellsInRange("K1:L2")

// Output: ["K1","K2","L1","L2"]