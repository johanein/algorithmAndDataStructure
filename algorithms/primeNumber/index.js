const isPrimeMine = (num) => {
  if (num < 2) return false;
  for (let index = 2; index <= num / 2; index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
};
const isPrimeOptimised = (num) => {
  if (num < 2) return false;
  for (let index = 2; index <= Math.sqrt(num); index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeMine(19)); // O(n/2 - 2)
console.log(isPrimeOptimised(9)); // O(sqrt(n) - 2)
