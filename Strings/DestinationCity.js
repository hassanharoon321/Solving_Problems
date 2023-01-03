var destCity = function(paths) {
  const seen = new Set(paths.map(el => el[0]))

  for (let i of paths) {
    if (!seen.has(i[1]))
      return i[1]
  }

  return ''
};

destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]])