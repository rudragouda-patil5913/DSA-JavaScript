class Solution {
  // Function to detect cycle in a directed graph.
  dfs(adj, visited, src, inRecursion) {
    visited[src] = true;
    inRecursion[src] = true;
    for (let neigh of adj[src]) {
      if (!visited[neigh] && this.dfs(adj, visited, neigh, inRecursion)) {
        return true;
      } else if (inRecursion[neigh]) {
        return true;
      }
    }
    inRecursion[src] = false;
    return false;
  }
  isCyclic(V, adj) {
    // code here
    const visited = new Array(V).fill(false);
    const inRecursion = new Array(V).fill(false);
    for (let i = 0; i < V; i++) {
      if (!visited[i] && this.dfs(adj, visited, i, inRecursion)) {
        return true;
      }
    }
    return false;
  }
}


class Solution {
  // Function to detect cycle in a directed graph.
  isCyclic(V, adj) {
    // code here
    const indegree = new Array(V).fill(0);
    for (let i = 0; i < V; i++) {
      for (let neigh of adj[i]) {
        indegree[neigh]++;
      }
    }
    const q = [];
    let count = 0;
    for (let i = 0; i < V; i++) {
      if (indegree[i] === 0) {
        q.push(i);
        count++;
      }
    }
    while (q.length) {
      const node = q.shift();
      for (let neigh of adj[node]) {
        indegree[neigh]--;
        if (indegree[neigh] === 0) {
          q.push(neigh);
          count++;
        }
      }
    }

    if (count === V) {
      return false;
    } else {
      return true;
    }
  }
}
