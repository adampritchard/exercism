export class Squares {
  public count: number;

  constructor(count: number) {
    this.count = count;
  }

  get squareOfSum(): number {
    let sum = 0;
    for (let val = 1; val <= this.count; val++) {
      sum += val;
    }

    return sum ** 2;
  }

  get sumOfSquares(): number {
    let sum = 0;
    for (let val = 1; val <= this.count; val++) {
      sum += val ** 2;
    }

    return sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
