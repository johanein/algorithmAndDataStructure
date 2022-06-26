const fibonacci = (n) => {
  let returnArray = [0, 1];
  if (n < 3) {
    switch (n) {
      case 1:
        return [0];
        break;
      case 2:
        return returnArray;
        break;

      default:
        return [0];
    }
  }
  for (let i = 2; i < n; i++) {
    returnArray[i] = returnArray[i - 1] + returnArray[i - 2];
  }
  return returnArray;
};

console.log(fibonacci(7));
