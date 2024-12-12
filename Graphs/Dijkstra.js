class MinPriorityQueue {
  constructor() {
    this.elements = [];
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  enqueue(node, priority) {
    this.elements.push({ node, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift();
  }
}

class Solution {
  // Function to find the shortest distance of all the vertices
  // from the source vertex src.
  dijkstra(adj, src) {
    // code here
    const distTo = new Array(adj.length).fill(Infinity);
    const pq = new MinPriorityQueue();
    distTo[src] = 0;
    pq.enqueue(src, 0);
    while (!pq.isEmpty()) {
      const { node, priority } = pq.dequeue();
      for (let [u, v] of adj[node]) {
        if (priority + v < distTo[u]) {
          distTo[u] = priority + v;
          pq.enqueue(u, priority + v);
        }
      }
    }
    return distTo;
  }
}
