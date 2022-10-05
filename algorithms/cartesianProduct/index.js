const findCartesianProduct = (arr1, arr2) => {
  const returnArray = [];
  arr1.forEach((element1) => {
    arr2.forEach((element2) => {
      returnArray.push([element1, element2]);
    });
  });
  return returnArray;
};

console.log(findCartesianProduct([1, 2], [3, 4])); //O(mn)
