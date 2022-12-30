const findFinalValue = (a, x) => {
  let se = new Set(a);
  while (se.has(x)) x *= 2;
  return x;
};

findFinalValue([5, 3, 6, 1, 12], 3)