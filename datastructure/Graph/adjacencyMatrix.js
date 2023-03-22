const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrix[1][1]); // this will be zero

const adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["A"],
};

console.log(adjacencyList["A"]);
