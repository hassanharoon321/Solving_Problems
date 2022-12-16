/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const arr = [];
  for (let i = (s.length - 1); i >= 0; i--) {
    if (s[i] == 1) {
      arr.push("a")
    } else if (s[i] == 2) {
      arr.push("b")
    } else if (s[i] == 3) {
      arr.push("c")
    } else if (s[i] == 4) {
      arr.push("d")
    } else if (s[i] == 5) {
      arr.push("e")
    } else if (s[i] == 6) {
      arr.push("f")
    } else if (s[i] == 7) {
      arr.push("g")
    } else if (s[i] == 8) {
      arr.push("h")
    } else if (s[i] == 9) {
      arr.push("i")
    } else if (s[i] == "#") {
      console.log(s[i] + s[Number(i) - 1] + s[Number(i) - 2])
      if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#01") {
        arr.push("j")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#11") {
        arr.push("k")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#21") {
        arr.push("l")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#31") {
        arr.push("m")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#41") {
        arr.push("n")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#51") {
        arr.push("o")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#61") {
        arr.push("p")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#71") {
        arr.push("q")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#81") {
        arr.push("r")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#91") {
        arr.push("s")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#02") {
        arr.push("t")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#12") {
        arr.push("u")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#22") {
        arr.push("v")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#32") {
        arr.push("w")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#42") {
        arr.push("x")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#52") {
        arr.push("y")
      } else if (s[i] + s[Number(i) - 1] + s[Number(i) - 2] == "#62") {
        arr.push("z")
      }
      i -= 2;
    }
  }
  return arr.reverse().join("");
};