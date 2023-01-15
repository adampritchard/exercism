export class Triangle {
  public sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides;
  }

  get isEquilateral(): boolean {
    const [s1, s2, s3] = this.sides;
    return this.isValid && (s1 === s2 && s2 === s3);
  }

  get isIsosceles(): boolean {
    const [s1, s2, s3] = this.sides;
    return this.isValid && (s1 === s2 || s2 === s3 || s3 === s1);
  }

  get isScalene(): boolean {
    const [s1, s2, s3] = this.sides;
    return this.isValid && (s1 !== s2 && s2 !== s3);
  }

  get isValid(): boolean {
    const [s1, s2, s3] = this.sides;
    return this.isValidSide(s1, s2, s3)
        && this.isValidSide(s2, s1, s3)
        && this.isValidSide(s3, s1, s2);
  }

  protected isValidSide(side: number, other1: number, other2: number) {
    return side > 0 && other1 + other2 >= side;
  }
}
