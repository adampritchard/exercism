export function ofSize(n: number): number[][] {
  const spiral: number[][] = [];
  for (let i = 0; i < n; i += 1) {
    spiral[i] = new Array(n);
  }

  let x1 = 0;
  let x2 = n - 1;
  let y1 = 0;
  let y2 = n - 1;

  let val = 1;
  while (val <= n * n) {
    // top row
    for (let i = x1; i <= x2; i += 1) {
      spiral[y1][i] = val;
      val += 1;
    }
    y1 += 1;

    // right col
    for (let i = y1; i <= y2; i += 1) {
      spiral[i][x2] = val;
      val += 1;
    }
    x2 -= 1;

    // bottom row
    for (let i = x2; i >= x1; i -= 1) {
      spiral[y2][i] = val;
      val += 1;
    }
    y2 -= 1;

    // left col
    for (let i = y2; i >= y1; i -= 1) {
      spiral[i][x1] = val;
      val += 1;
    }
    x1 += 1;
  }  

  return spiral;
}
