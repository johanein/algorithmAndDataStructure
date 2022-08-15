const linearSerchMine1 = (array, searchInput) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === searchInput) {
      return index;
    }
  }
  return -1;
};

console.log(linearSerchMine1([1, 2, 3, 4, 5], 4)); //O(n)
