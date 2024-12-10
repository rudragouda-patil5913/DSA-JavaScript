class Solution {
  // Function to detect cycle in an undirected graph.
  dfs(adj, visited, src, parent) {
    visited[src] = true;
    for (let neigh of adj[src]) {
      if (neigh === parent) continue;
      if (visited[neigh]) return true;
      if (this.dfs(adj, visited, neigh, src)) {
        return true;
      }
    }
    return false;
  }
  isCycle(adj) {
    // code here
    const visited = new Array(adj.length).fill(false);
    for (let i = 0; i < adj.length; i++) {
      if (!visited[i] && this.dfs(adj, visited, i, -1)) {
        return 1;
      }
    }
    return 0;
  }
}


const adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];

const g = new Solution();
console.log(g.isCycle(adj));



class Solution {
  // Function to detect cycle in an undirected graph.
  bfs(adj, visited, src) {
    visited[src] = true;
    const q = [[src, -1]];
    while (q.length) {
      const [node, parent] = q.shift();
      for (let neigh of adj[node]) {
        if (!visited[neigh]) {
          q.push([neigh, node]);
          visited[neigh] = true;
        } else if (neigh != parent) {
          return 1;
        }
      }
    }
    return 0;
  }
  isCycle(adj) {
    // code here
    const visited = new Array(adj.length).fill(false);
    for (let i = 0; i < adj.length; i++) {
      if (!visited[i] && this.bfs(adj, visited, i)) {
        return 1;
      }
    }
    return 0;
  }
}