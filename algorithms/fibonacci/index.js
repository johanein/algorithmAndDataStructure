const fibonacci = (n) => {
  let returnArray = [0, 1];
  if (n < 3) {
    switch (n) {
      case 1:
        return [0];
      case 2:
        return returnArray;

      default:
        return [0];
    }
  }
  for (let i = 2; i < n; i++) {
    returnArray[i] = returnArray[i - 1] + returnArray[i - 2];
  }
  return returnArray;
};

const fibonacciRecursionElementMine = (n) => {
  if (n <= 2) {
    switch (n) {
      case 1:
        return 0;
      case 2:
        return 1;
      default:
        return 0;
    }
  }
  return (
    fibonacciRecursionElementMine(n - 1) + fibonacciRecursionElementMine(n - 2)
  );
};
const fibonacciRecursionElement = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursionElement(n - 1) + fibonacciRecursionElement(n - 2);
};
console.log(fibonacci(8)); // O(n)
console.log(fibonacciRecursionElementMine(8));
console.log(fibonacciRecursionElement(8)); // O(2ˆn)
