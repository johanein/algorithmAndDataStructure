const isPowerOf2Mine = (n) => {
  if (n <= 0) return false;
  if (n <= 2) return true;
  let powerValue = 1;
  while (powerValue <= n) {
    powerValue *= 2;
    if (powerValue === n) return true;
  }
  return false;
};
const isPowerOf2 = (n) => {
  if (n < 1) return false;
  let divisionValue = n;
  while (divisionValue > 1) {
    if (divisionValue % 2 !== 0) return false;
    divisionValue /= 2;
  }
  return true;
};

const isPowerOf2Bitwise = (n) => {
  if (n < 0) return false;
  return (n & (n - 1)) === 0;
};

console.log(isPowerOf2Mine(1));
console.log(isPowerOf2(1)); //O(logn)
console.log(isPowerOf2Bitwise(32)); //O(1)
