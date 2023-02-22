export class Series {
  protected numbers: number[];

  constructor(series: string) {
    if (series === '') throw new Error('series cannot be empty');
    this.numbers = series.split('').map(Number);
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    if (sliceLength > this.numbers.length) throw new Error('slice length cannot be greater than series length');

    const result = [];
    for (let i = 0; i + sliceLength <= this.numbers.length; i += 1) {
      result.push(this.numbers.slice(i, sliceLength + i));
    }

    return result;
  }
}
