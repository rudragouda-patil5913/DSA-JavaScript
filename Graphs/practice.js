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
  dijskstra(adj, src) {
    const distTo = new Array(adj.length).fill(Infinity);
    const pq = new MinPriorityQueue();
    distTo[src] = 0;
    pq.enqueue(src, 0);
    while (!pq.isEmpty()) {
      const { node, dist } = pq.dequeue();
      for (let [u, v] of adj[node]) {
        if (dist + v < distTo[u]) {
          distTo[u] = dist + v;
          pq.enqueue(u, dist + v);
        }
      }
    }
    return distTo;
  }
}






