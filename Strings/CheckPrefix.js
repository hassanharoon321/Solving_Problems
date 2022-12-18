var prefixCount = function(words, pref) {
  const some = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      some.push(words[i]);
    }
  }
  return some.length
};

prefixCount(["pay", "attention", "practice", "attend"], "at")