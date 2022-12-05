// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".


// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Input: jewels = "badc", stones = "ccc"
// Output: 3


var numJewelsInStones = function(jewels, stones) {
  const jew = [...jewels];
  const sto = [...stones];

  const arr = []
  for (let i = 0; i < sto.length; i++) {
    for (let j = 0; j < jew.length; j++) {
      if (sto[i] === jew[j]) {
        arr.push(jew[i])
      }
    }
  }
  console.log(arr)
  return arr.length;
};

const ans = numJewelsInStones("badc", "ccc");
console.log(ans);