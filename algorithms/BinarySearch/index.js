// Binary search only works in a sorted array
const binarySearch = (array, searchInput) => {
  let leftIndex = 0;
  let rightIndex = array.length;
  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const middleElement = array[middleIndex];
    if (searchInput === middleElement) {
      return middleIndex;
    }
    if (searchInput < middleElement) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 5)); // O(log n)
