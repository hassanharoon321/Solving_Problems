var detectCapitalUse = function(word) {
  return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase()
};

detectCapitalUse("USA")
detectCapitalUse("fLag")