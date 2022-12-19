var percentageLetter = function(s, letter) {
  const some = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === letter) {
      some.push(s[i])
    }
  }
  return Math.floor(some.length / s.length * 100)
};

percentageLetter("foobar", "o")