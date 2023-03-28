class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  display() {
    for (const vertex in this.adjacencyList) {
      if (Object.hasOwnProperty.call(this.adjacencyList, vertex)) {
        // this condition is not needed. It came with the snippet
        const element = this.adjacencyList[vertex];
        console.log(`${vertex} -> ${[...element]}`);
      }
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }
  // end of function
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.addEdges("C", "A");
graph.display();
console.log(graph.hasEdge("B", "C"));
graph.removeEdge("B", "C");
graph.removeVertex("A");
console.log(graph.hasEdge("B", "C"));
graph.display();
