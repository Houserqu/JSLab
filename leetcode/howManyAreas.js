/**
 * 求连通数
 * @param {number[][]} grid
 * @return {number}
 */
var howManyAreas = function (grid) {
  if (grid == null || grid.length == 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if(dfs(grid, j, i) > 0){
        sum++;
      }
    }
  }

  return sum;
};

// 横向为 x+ 轴，纵向为 y+ 轴
var dfs = function (grid, x, y) {
  if(x < 0 || y < 0 || y >= grid.length || x >= grid[y].length || grid[y][x] == 0) {
    return 0;
  }

  grid[y][x] = 0;

  let sum = 1;
  // 上下左右四个方向
  sum += dfs(grid, x + 1, y);
  sum += dfs(grid, x , y + 1);
  sum += dfs(grid, x - 1, y);
  sum += dfs(grid, x , y - 1);

  // // 四个斜角方向
  // sum += dfs(grid, x + 1, y + 1);
  // sum += dfs(grid, x + 1, y - 1);
  // sum += dfs(grid, x - 1, y + 1);
  // sum += dfs(grid, x - 1, y - 1);

  return sum;
}

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

console.log(howManyAreas(grid));