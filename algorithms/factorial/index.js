const factorialMine = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialMine(n - 1);
};

console.log(factorialMine(5));

const factorialUsingForLoop = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};
console.log(factorialUsingForLoop(5));
