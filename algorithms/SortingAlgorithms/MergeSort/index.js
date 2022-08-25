let arrayToSort = [10, 4, -2, 8, -6];

const mergeSort = (arr) => { // O(logn)
  const baseCase = arr.length < 2;
  if (baseCase) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray)); 
};

const merge = (leftArray, rightArray) => {
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray];
};

console.log(mergeSort(arrayToSort));   // O(nlogn)
