type Point = {
  x: number,
  y: number,
};

export function count(rows: string[]): number {
  const corners = findCorners(rows);

  let count = 0;
  for (const topLeft of corners) {
    for (const bottomRight of corners) {
      if (isRectangle(rows, topLeft, bottomRight)) {
        count += 1;
      }
    }
  }
  return count;
}

function findCorners(rows: string[]): Point[] {
  const corners: Point[] = [];
  for (let y = 0; y < rows.length; y += 1) {
    for (let x = 0; x < rows[y].length; x += 1) {
      if (rows[y][x] === '+') {
        corners.push({ x, y });
      }
    }
  }
  return corners;
}

function isRectangle(rows: string[], topLeft: Point, bottomRight: Point): boolean {
  if (topLeft.x >= bottomRight.x || topLeft.y >= bottomRight.y) {
    return false;
  }

  return isVerticalSide(rows, topLeft.x, topLeft.y, bottomRight.y) // left
      && isVerticalSide(rows, bottomRight.x, topLeft.y, bottomRight.y) // right
      && isHorizontalSide(rows, topLeft.y, topLeft.x, bottomRight.x) // top
      && isHorizontalSide(rows, bottomRight.y, topLeft.x, bottomRight.x); // bottom
}

function isHorizontalSide(rows: string[], y: number, x1: number, x2: number): boolean {
  for (let x = x1; x <= x2; x += 1) {
    if (rows[y][x] !== '+' && rows[y][x] !== '-') {
      return false;
    }
  }

  return true;
}

function isVerticalSide(rows: string[], x: number, y1: number, y2: number): boolean {
  for (let y = y1; y <= y2; y += 1) {
    if (rows[y][x] !== '+' && rows[y][x] !== '|') {
      return false;
    }
  }

  return true;
}
