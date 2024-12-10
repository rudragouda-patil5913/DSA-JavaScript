class Graph {
  constructor() {
    this.adjList = new Map();
  }
  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }
  addEdges(u, v) {
    this.adjList.get(u).push(v);
    this.adjList.get(v).push(u);
  }
  display() {
    for (let [vertex, edges] of this.adjList) {
      console.log(`${vertex} ====> ${edges}`);
    }
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdges("A", "B");
g.addEdges("B", "C");
g.addEdges("A", "D");

g.display();
