
const replaceString = (someStr) => {
  return someStr.replaceAll(".", "[.]")
}

const some = replaceString("1.1.1.1");

console.log(some);