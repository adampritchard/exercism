export function count(rows: string[]): number {
  let rectangleCount = 0;

  for (let y = 0; y < rows.length - 1; y += 1) {
    for (let x = 0; x < rows[y].length; x += 1) {
      if (rows[y].charAt(x) === '+') {
        rectangleCount += countRectanglesFrom(x, y, rows);
      }
    }
  }

  return rectangleCount;
}

function countRectanglesFrom(x: number, y: number, rows: string[]): number {
  let count = 0;

  // move down, looking for corners.
  for (let y2 = y + 1; y2 < rows.length; y2 += 1) {
    const charDown = rows[y2].charAt(x);
    if (!isVerticalPath(charDown)) break;

    // found bottom left corner.
    if (charDown === '+') {
      // move right, looking for corners.
      for (let x2 = x + 1; x2 < rows[y2].length; x2 += 1) {
        const charRight = rows[y2].charAt(x2);
        if (!isHorizontalPath(charRight)) break;

        // found bottom right corner.
        if (charRight === '+') {
          // check right and top sides.
          if (isVerticalSide(y, y2, x2, rows) && isHorizontalSide(x, x2, rows[y])) {
            count += 1;
          }
        }
      }
    }
  }
  
  return count;
}

function isVerticalPath(char: string): boolean {
  return char === '+' || char === '|';
}

function isHorizontalPath(char: string): boolean {
  return char === '+' || char === '-';
}

function isHorizontalSide(x1: number, x2: number, row: string): boolean {
  // check corners.
  if (row[x1] !== '+' || row[x2] !== '+') {
    return false;
  }

  // check path between corners.
  for (let x = x1 + 1; x < x2; x += 1) {
    const char = row.charAt(x);
    if (!isHorizontalPath(char)) {
      return false;
    }
  }

  return true;
}

function isVerticalSide(y1: number, y2: number, x: number, rows: string[]): boolean {
  // check corners.
  if (rows[y1].charAt(x) !== '+' || rows[y2].charAt(x) !== '+') {
    return false;
  }

  // check path between corners.
  for (let y = y1 + 1; y < y2; y += 1) {
    const char = rows[y].charAt(x);
    if (!isVerticalPath(char)) {
      return false;
    }
  }

  return true;
}
