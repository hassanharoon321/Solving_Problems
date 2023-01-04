var diStringMatch = function(s) {
  let increase = 0;
  let decrease = s.length;
  const some = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      some.push(increase)
      increase += 1
    }
    if (s[i] === "D") {
      some.push(decrease)
      decrease -= 1
    }
  }
  some.push(s[s.length - 1] === "I" ? increase : decrease);
  return some;
};

diStringMatch("IDID")