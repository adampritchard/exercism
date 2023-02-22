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
    return s1 + s2 > s3
        && s2 + s3 > s1
        && s3 + s1 > s2;
  }
}
