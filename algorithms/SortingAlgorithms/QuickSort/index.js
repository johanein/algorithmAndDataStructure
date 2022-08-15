const parentArray = [10, 10, 4, -2, 8, 8, 8, -6, 5, 9, -10, 90];

const quickSortMine = (arrayToSort) => {
  const pivotElement = arrayToSort[arrayToSort.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let index = 0; index < arrayToSort.length - 1; index++) {
    const element = arrayToSort[index];
    const leftSortCondition = element <= pivotElement;
    if (leftSortCondition) {
      leftArray.push(element);
    } else {
      rightArray.push(element);
    }
  }
  const isLeftArraySingle = leftArray.length <= 1;
  const isRightArraySingle = rightArray.length <= 1;
  leftArray = isLeftArraySingle ? leftArray : quickSortMine(leftArray);
  rightArray = isRightArraySingle ? rightArray : quickSortMine(rightArray);
  return [...leftArray, pivotElement, ...rightArray];
};

const quickSort = (arrayToSort) => {
  const arrayLength = arrayToSort.length;
  const baseCase = arrayLength < 2;
  if (baseCase) {
    return arrayToSort;
  }
  const pivotElement = arrayToSort[arrayLength - 1];
  let leftArray = [];
  let rightArray = [];

  for (let index = 0; index < arrayLength - 1; index++) {
    const element = arrayToSort[index];
    const leftSortCondition = element < pivotElement;
    if (leftSortCondition) {
      leftArray.push(element);
    } else {
      rightArray.push(element);
    }
  }
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
};

console.log({ sortedArray: quickSortMine(parentArray) });
console.log({ sortedArray: quickSort(parentArray) });

// worst case O(nˆ2)
// Avg case O(nlogn)
