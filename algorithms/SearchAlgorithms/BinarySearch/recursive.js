const recursiveMine = (array, searchElement, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;
  const middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  const middleElement = array[middleIndex];
  const isElementFound = searchElement === middleElement;
  if (isElementFound) {
    return middleIndex;
  } else {
    const isSearchElementInLeft = searchElement < middleElement;
    if (isSearchElementInLeft) {
      return recursiveMine(array, searchElement, leftIndex, middleIndex - 1);
    } else {
      return recursiveMine(array, searchElement, middleIndex + 1, rightIndex);
    }
  }
};

const search = (array, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) return -1;
  const middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  const middleElement = array[middleIndex];
  const isElementFound = target === middleElement;
  if (isElementFound) {
    return middleIndex;
  } else {
    const isTargetInLeft = target < middleElement;
    if (isTargetInLeft) {
      return search(array, target, leftIndex, middleIndex - 1);
    } else {
      return search(array, target, middleIndex + 1, rightIndex);
    }
  }
};

const recursive = (array, target) => {
  return search(array, target, 0, array.length);
};

const testArray = [1, 2, 3, 4, 5];
// const testArray = [];
const elementToSearch = 5;
console.log(recursiveMine(testArray, elementToSearch, 0, testArray.length - 1)); // O(log n)
console.log(recursive(testArray, elementToSearch, 0, testArray.length - 1)); // O(log n)
