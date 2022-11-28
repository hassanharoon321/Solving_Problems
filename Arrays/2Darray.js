var maximumWealth = function(accounts) {
  const some = accounts.map((account) => {
    return account.reduce((a, b) => a + b);
  })
  some.sort((a, b) => a - b);
  return some[some.length - 1]
};

const result = maximumWealth([[1, 2, 3], [3, 2, 1]]);
console.log(result)