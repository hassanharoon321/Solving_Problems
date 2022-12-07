let store = ""
let code = ""
let resUrl = ""

var encode = function(longUrl) {
  store = longUrl
  code = makeid()
  resUrl = "http://tinyurl.com/" + code
  return resUrl
};

var decode = function(shortUrl) {
  return store;
};

// Generates random id for tinyurl
function makeid() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// "https://leetcode.com/problems/design-tinyurl"
