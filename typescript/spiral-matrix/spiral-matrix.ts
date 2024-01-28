type Direction = 'right' | 'down' | 'left' | 'up';

export function ofSize(n: number): number[][] {
  const spiral: number[][] = Array(n);
  for (let i = 0; i < n; i += 1) {
    spiral[i] = Array(n).fill(0);
  }

  let val = 1;
  let x = 0;
  let y = 0;
  let dir: Direction = 'right';
  while (val <= n * n) {
    spiral[y][x] = val;
    val += 1;

    const [nx, ny] = nextCoord(x, y, dir);
    if (spiral[ny] && spiral[ny][nx] === 0) {
      x = nx;
      y = ny;
    } else {
      dir = nextDirection(dir);
      [x, y] = nextCoord(x, y, dir);
    }
  }

  return spiral;
}

function nextDirection(d: Direction): Direction {
  switch (d) {
    case 'right': return 'down';
    case 'down':  return 'left';
    case 'left':  return 'up';
    case 'up':    return 'right';
  }
}

function nextCoord(x: number, y: number, d: Direction): [number, number] {
  switch (d) {
    case 'right': return [x + 1, y    ];
    case 'down':  return [x    , y + 1];
    case 'left':  return [x - 1, y    ];
    case 'up':    return [x    , y - 1];
  }
}
