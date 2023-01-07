export class Matrix {
  protected values: number[][];

  constructor(text: string) {
    this.values = this.parseValues(text);
  }

  get rows(): number[][] {
    return this.values;
  }

  get columns(): number[][] {
    return this.transpose(this.values);
  }

  protected parseValues(text: string): number[][] {
    return text
      .split('\n')
      .map(line => line
        .split(' ')
        .map(Number)
      );
  }

  protected transpose<T>(arr: T[][]): T[][] {
    const transposed: T[][] = [];
  
    for (let [i, row] of arr.entries()) {
      for (let [j, val] of row.entries()) {
        if (!transposed[j]) transposed[j] = [];
  
        transposed[j][i] = val;
      }
    }
  
    return transposed;
  }  
}
