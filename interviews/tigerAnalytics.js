const findRecursiveSum = (arr, total = 0) => {
  //   return arr.reduce((acc, each) => {
  //     return acc + each;
  //   }, 0);
  let sum = total + arr[0];
  if (arr.length === 1) return total;
  let slicedArray = arr.slice(1);
  return findRecursiveSum(slicedArray, sum);
};

// duplex and transfer
