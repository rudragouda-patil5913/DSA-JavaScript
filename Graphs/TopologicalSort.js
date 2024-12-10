class Solution {
  // Function to return list containing vertices in Topological order.

  dfsTopo(adj, visited, src, stack) {
    visited[src] = true;
    for (let neigh of adj[src]) {
      if (!visited[neigh]) {
        this.dfs(adj, visited, neigh, stack);
      }
    }
    stack.push(src);
  }

  topologicalSort(adj) {
    // code here

    const visited = new Array(adj.length).fill(false);
    const stack = [];
    for (let i = 0; i < adj.length; i++) {
      if (!visited[i]) {
        this.dfsTopo(adj, visited, i, stack);
      }
    }
    const result = [];
    while (stack.length) {
      result.push(stack.pop());
    }
    return result;
  }
}



class Solution {
  // Function to return list containing vertices in Topological order.
  topologicalSort(adj) {
    // code here
    const indegree = new Array(adj.length).fill(0);
    for (let i = 0; i < adj.length; i++) {
      for (let neigh of adj[i]) {
        indegree[neigh]++;
      }
    }
    const queue = [];
    for (let i = 0; i < adj.length; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }
    const result = [];
    while (queue.length) {
      const node = queue.shift();
      result.push(node);
      for (let neigh of adj[node]) {
        indegree[neigh]--;
        if (indegree[neigh] === 0) {
          queue.push(neigh);
        }
      }
    }
    return result;
  }
}