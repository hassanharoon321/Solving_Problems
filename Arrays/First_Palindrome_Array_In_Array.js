var firstPalindrome = function(words) {
  for (let i = 0; i < words.length; i++) {
    let wordArr = words[i].split("").reverse().join("");
    if (words[i] === wordArr) {
      return words[i]
    }

  }
  return ""
};
firstPalindrome(["abc", "car", "ada", "racecar", "cool"])
firstPalindrome(["def", "ghi"])
