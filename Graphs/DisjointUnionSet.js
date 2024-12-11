function find(i, parent) {
  if (i == parent[i]) {
    return i;
  }
  return (parent[i] = find(parent[i], parent));
}

function Union(x, y, parent, rank) {
  const x_parent = find(x, parent);
  const y_parent = find(y, parent);
  if (x_parent === y_parent) {
    return;
  }
  if (rank[x_parent] > rank[y_parent]) {
    parent[y_parent] = x_parent;
  } else if (rank[x_parent] < rank[y_parent]) {
    parent[x_parent] = y_parent;
  } else {
    parent[x_parent] = y_parent;
    rank[y_parent] += 1;
  }
}
