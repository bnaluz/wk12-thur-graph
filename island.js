function getNeighbors(row, col, graph) {
  let res = [];
  let x = row;
  let y = col;

  // Up
  let up = [x, y - 1];
  if (graph[x][y - 1] && graph[x][y - 1] === 1) res.push(up);

  // Down
  let down = [x, y + 1];
  if (graph[x][y + 1] && graph[x][y + 1] === 1) res.push(down);

  // Left
  let left = [x - 1, y];
  if (graph[x - 1] && graph[x - 1][y] === 1) res.push(left);

  // Right
  let right = [x + 1, y];
  if (graph[x + 1] && graph[x + 1][y] === 1) res.push(right);

  // console.log(res)
  return res;
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`);
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  // Pop the first node
  while (stack.length) {
    let node = stack.pop();

    size++;
    let neighbors = getNeighbors(node[0], node[1], graph);

    for (let neighbor of neighbors) {
      if (!visited.has(`${neighbor[0]}, ${neighbor[1]}`)) {
        visited.add(`${neighbor[0]}, ${neighbor[1]}`);
        stack.push(neighbor);
      }
    }
  }
  return size;
}

module.exports = [getNeighbors, islandSize];
