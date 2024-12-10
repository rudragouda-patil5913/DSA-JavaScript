//GFG Practics DFS

class Solution {
  // Function to return a list containing the DFS traversal of the graph.

  dfsRec(adj, visited, source, result) {
    visited[source] = true;
    result.push(source);
    for (let neigh of adj[source]) {
      if (!visited[neigh]) {
        this.dfsRec(adj, visited, neigh, result);
      }
    }
  }
  dfsOfGraph(adj) {
    // code here
    const visited = new Array(adj.length).fill(false);
    const result = [];
    for (let i = 0; i < adj.length; i++) {
      if (!visited[i]) {
        this.dfsRec(adj, visited, i, result);
      }
    }
    return result;
  }
}

//GFG Practics BFS

class Solution {
  // Function to return Breadth First Traversal of the given graph.

  bfs(adj, visited, src, result) {
    const q = [src];
    visited[src] = true;
    while (q.length) {
      const node = q.shift();
      result.push(node);
      for (let neigh of adj[node]) {
        if (!visited[neigh]) {
          q.push(neigh);
          visited[neigh] = true;
        }
      }
    }
  }
  bfsOfGraph(adj) {
    // code here
    const visited = new Array(adj.length).fill(false);
    const result = [];
    this.bfs(adj, visited, 0, result);
    return result;
  }
}
