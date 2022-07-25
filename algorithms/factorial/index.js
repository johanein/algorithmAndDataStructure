const factorialMine = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialMine(n - 1);
};
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorialMine(n - 1);
};

console.log(factorialMine(5));
console.log(factorial(5)); //O(n)

const factorialUsingForLoop = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};
console.log(factorialUsingForLoop(5)); //O(n)
