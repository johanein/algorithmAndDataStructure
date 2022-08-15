// const array = [-6, -2, 4, 8, 10];
let arrayToSwap = [10, 4, -2, 8, -6];

const bubbleSortMine = () => {
  let swapped = true;
  while (swapped) {
    let swappedInsideFor = false;
    for (let i = 0; i < arrayToSwap.length - 1; i++) {
      const swapCondition = arrayToSwap[i] > arrayToSwap[i + 1];
      if (swapCondition) {
        [arrayToSwap[i], arrayToSwap[i + 1]] = [
          arrayToSwap[i + 1],
          arrayToSwap[i],
        ];
        swappedInsideFor = true;
      }
    }
    swapped = swappedInsideFor;
  }
  return arrayToSwap;
};

const bubbleSort = () => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arrayToSwap.length - 1; i++) {
      const swapCondition = arrayToSwap[i] > arrayToSwap[i + 1];
      if (swapCondition) {
        [arrayToSwap[i], arrayToSwap[i + 1]] = [
          arrayToSwap[i + 1],
          arrayToSwap[i],
        ];
        swapped = true;
      }
    }
  } while (swapped);
  return arrayToSwap;
};

// bubbleSortMine();
bubbleSort(); // O(nˆ2)
console.log({ arrayToSwap });
