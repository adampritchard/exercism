export function annotate(field: string[]): string[] {
  const input: string[][] = field.map(row => Array.from(row));
  const output: string[][] = field.map(row => Array.from(row));

  function incrementCell(x: number, y: number) {
    if (x < 0 || x >= output[0].length) return;
    if (y < 0 || y >= output.length) return;    
    if (output[y][x] === '*') return;

    const val = Number.parseInt(output[y][x]) || 0;
    output[y][x] = (val + 1).toString();
  }

  for (let y = 0; y < input.length; y += 1) {
    for (let x = 0; x < input[0].length; x += 1) {
      if (input[y][x] === '*') {
        incrementCell(x-1, y-1);
        incrementCell(x,   y-1);
        incrementCell(x+1, y-1);
        incrementCell(x-1, y);
        incrementCell(x+1, y);
        incrementCell(x-1, y+1);
        incrementCell(x,   y+1);
        incrementCell(x+1, y+1);
      }
    }
  }

  return output.map(row => row.join(''));
}
