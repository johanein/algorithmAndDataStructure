let arrayToSwap = [10, 4, -2, 8, -6];

const insertionSortMine = () => {
  for (let i = 1; i < arrayToSwap.length; i++) {
    let element = arrayToSwap[i];
    for (let j = i - 1; j >= 0; j--) {
      let innerElement = arrayToSwap[j];
      const swappingCondition = innerElement > element;
      if (swappingCondition) {
        arrayToSwap[j + 1] = innerElement;
        arrayToSwap[j] = element;
        continue;
      } else {
        arrayToSwap[j + 1] = element;
        break;
      }
    }
  }
};

const insertionSort = () => {
  for (let i = 1; i < arrayToSwap.length; i++) {
    const insertionElement = arrayToSwap[i];
    let j = i - 1;
    while (j >= 0 && arrayToSwap[j] > insertionElement) {
      arrayToSwap[j + 1] = arrayToSwap[j];
      j -= 1;
    }
    arrayToSwap[j + 1] = insertionElement;
  }
};
// insertionSortMine(); // yours is better ;)
insertionSort(); // O(nˆ2)
console.log({ arrayToSwap });
