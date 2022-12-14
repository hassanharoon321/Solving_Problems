//set creates a obj also ignore unique
var checkIfPangram = function(sentence) {
  return new Set(sentence).size === 26
};

checkIfPangram("thequickbrownfoxjumpsoverthelazydog")